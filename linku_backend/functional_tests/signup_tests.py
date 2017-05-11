# -*- coding: utf-8 -*-

import pytest
from fixture_tests import browser, BASE_URL
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from rest_framework.authtoken.models import Token

from meeting.models import User


@pytest.mark.django_db
def test_signup(browser):
    # 철수는 링쿠의 회원이 되기 위해, 회원가입 페이지에 접속했다
    browser.get(BASE_URL+'/signup')

    # 가장 상단에는 링쿠는 '대학생들을 위한 서비스입니다.
    assert '링쿠는 대학생들을 위한 서비스입니다.' in browser.page_source

    # 보다 안전한 서비스 이용을 위해 대학생 인증을 부탁드려요! 이라는 문구가 보였고
    assert '보다 안전한 서비스 이용을 위해 대학생 인증을 부탁드려요!' in browser.page_source

    # 대학생 메일 입력란에 linkutest@test.ac.kr을 입력하고
    browser.find_element_by_xpath("//input[@name='university_email']").send_keys('linkutest@test.ac.kr')

    # 인증번호 발송 버튼을 클릭했다
    browser.find_element_by_xpath("//button[text()='인증번호 발송']").click()

    # 발송 될 때까지 로딩하는 장면이 보였고 철수는 기다리다가
    modal_elem = WebDriverWait(browser, 10).until(
        EC.presence_of_element_located((By.XPATH, "//div[@class='ui modal transition visible active']"))
    )

    # 전송이 완료되자 이메일이 전송되었습니다 라는 메세지의 모달창이 떴고
    assert '이메일이 전송되었습니다' in modal_elem.text

    # 철수는 확인 버튼을 눌러 모달 창을 종료했다
    modal_elem.find_element_by_xpath("//button[@class='ui blue button']").click()

    # 모달창을 종료하자 인증번호 입력창이 나와서
    # 인증번호를 1234 입력 후
    browser.find_element_by_xpath("//input[@name='auth_number']").send_keys('1234')

    # 인증 요청을 클릭하자
    browser.find_element_by_xpath("//button[text()='인증 요청']").click()

    # 인증이 완료되었습니다 라는 메세지를 가진 모달창이 나와서
    cmp_modal = WebDriverWait(browser, 10).until(
        EC.presence_of_element_located((By.XPATH, "//div[@class='ui page modals dimmer transition visible active']"))
    )
    assert '인증이 완료되었습니다' in cmp_modal.text

    # 확인 버튼을 눌러서 모달창을 종료했다.
    cmp_modal.find_element_by_xpath("//button[@class='ui blue button']").click()

    # 모달창을 종료하자 정보를 입력하는 폼들이 나왔고,
    # 이메일, 이름, 성별 선택, 전화번호, 비밀번호, 비밀번호 확인에 적절한 값을 입력 후
    browser.find_element_by_xpath("//input[@name='username']").send_keys('test@gmail.com')
    browser.find_element_by_xpath("//input[@name='name']").send_keys('test name')
    browser.find_element_by_xpath("//input[@name='gender' and @value='M']").click()
    browser.find_element_by_xpath("//input[@name='phone_number']").send_keys('01012341234')
    browser.find_element_by_xpath("//input[@name='password']").send_keys('test password')
    browser.find_element_by_xpath("//input[@name='password_check']").send_keys('test password')

    # 가입 완료 버튼을 누르자
    browser.find_element_by_xpath("//button[text()='가입 완료']").click()

    # 회원가입이 완료되었습니다 라는 모달 창이 떴고
    verfi_modal = WebDriverWait(browser, 10).until(
        EC.presence_of_element_located((By.XPATH, "//div[@class='ui page modals dimmer transition visible active']"))
    )
    assert '회원가입이 완료되었습니다' in verfi_modal.text

    # 확인 버튼을 누르자
    verfi_modal.find_element_by_xpath("//button[@class='ui blue button']").click()

    # 홈페이지로 다시 이동하게 되었다
    assert BASE_URL + '/' == browser.current_url

    ## 회원가입 테스트 DB 삭제

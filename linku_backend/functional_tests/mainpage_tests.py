import pytest
from fixture_tests import browser, BASE_URL

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys


def test_login_and_logout_button_on_main_page(browser):
    # 철수는 메인페이지에 접속해서
    browser.get(BASE_URL)
    # 로그인 버튼을 클릭했더니
    browser.find_element_by_xpath("//button[text()='로그인']").click()
    # 로그인 페이지로 이동했고
    assert BASE_URL + '/login' == browser.current_url
    # 아이디를 testman@email.com을 입력 후
    browser.find_element_by_xpath("//input[@name='username']").send_keys('testman@email.com')
    # 비밀번호를 1234를 입력하고
    browser.find_element_by_xpath("//input[@name='password']").send_keys('1234')
    # 로그인 버튼을 클릭했더니
    browser.find_element_by_xpath("//form[@class='ui form']/button").send_keys(Keys.ENTER)
    # 로그아웃 버튼이 나올 때 까지 기다리자
    logout_element = WebDriverWait(browser, 30).until(
        EC.presence_of_element_located((By.XPATH, "//button[text()='로그아웃']"))
    )
    # 메인화면으로 다시 돌아왔고
    assert BASE_URL + "/" == browser.current_url
    # 메인페이지에는 로그인이라고 써져있던 버튼이 로그아웃으로 바껴 있었다.
    # 그래서 로그아웃 버튼을 눌렀더니
    logout_element.click()
    # 다시 로그인 버튼으로 바뀌었다.
    browser.find_element_by_xpath("//button[text()='로그인']")

# -*- coding: utf-8 -*-

import sys
import os

from selenium import webdriver
import pytest
import time

BASE_URL = "http://localhost:3000"


@pytest.fixture(scope="module")
def browser():
    if sys.platform == 'darwin':
        project_root = os.path.dirname(os.path.dirname(
            os.path.realpath(__file__)))
        repo_root = os.path.dirname(project_root)
        sys.path.append(os.path.join(repo_root, 'dev'))
        import download_chromedriver
        download_chromedriver.download()
        chrome_path = download_chromedriver.get_chromedriver_path()
        if chrome_path is False:
            raise SystemExit
        driver = webdriver.Chrome(chrome_path)
    else:
        driver = webdriver.Firefox()
    yield driver
    if 'CIRCLE_ARTIFACTS' in os.environ:
        driver.get_screenshot_as_file(os.environ['CIRCLE_ARTIFACTS'] + '/test.png')
    driver.close()


@pytest.mark.django_db
def test_authentication(browser):
    browser.get(BASE_URL)
    browser.find_element_by_xpath("//button[text()='회원가입']").click()
    browser.find_element_by_xpath("//input[@name='username']").send_keys('test@gmail.com')
    browser.find_element_by_xpath("//input[@name='nickname']").send_keys('test nickname')
    browser.find_element_by_xpath("//input[@name='gender' and @value='M']").click()
    browser.find_element_by_xpath("//input[@name='phone_number']").send_keys('01012341234')
    browser.find_element_by_xpath("//input[@name='password']").send_keys('test password')
    browser.find_element_by_xpath("//input[@name='password_check']").send_keys('test password')
    browser.find_element_by_xpath("//input[@name='authenticated_university_email']").send_keys('test@univ.ac.kr')
    browser.find_element_by_xpath("//button[text()='가입 완료']").click()
    time.sleep(1)

    confirm_element = browser.find_element_by_xpath("//div[@id='confirm_modal']/div[@class='header']")
    assert confirm_element.text == "회원가입이 완료되었습니다."

    browser.find_element_by_xpath("//div[@id='confirm_modal']/div[@class='actions']/button").click()

    browser.find_element_by_xpath("//button[text()='로그인']").click()
    browser.find_element_by_xpath("//input[@name='username']").send_keys('test@gmail.com')
    browser.find_element_by_xpath("//input[@name='password']").send_keys('test password')
    browser.find_element_by_xpath("//button[text()='로그인' and @type='submit']").click()

    time.sleep(1)
    assert '로그아웃' in browser.page_source


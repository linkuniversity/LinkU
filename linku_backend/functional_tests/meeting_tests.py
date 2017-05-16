# -*- coding: utf-8 -*-

import sys
import os

from selenium import webdriver
import pytest

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


def login_with(browser, username, password):
    browser.get(BASE_URL)
    browser.find_element_by_xpath("//button[text()='알림받기']").click()
    browser.find_element_by_xpath("//input[@name='username']").send_keys(username)
    browser.find_element_by_xpath("//input[@name='password']").send_keys(password)
    browser.find_element_by_xpath("//button[text()='로그인' and @type='submit']").click()


@pytest.mark.django_db
def test_show_meeting_infos(browser):
    browser.get(BASE_URL)
    meeting_card = browser.find_elements_by_xpath("//div[@id='meeting-card']")
    assert len(meeting_card) == 2

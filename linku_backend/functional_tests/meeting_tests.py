# -*- coding: utf-8 -*-

import sys
import os

from selenium import webdriver
import pytest
from fixture_tests import browser, BASE_URL


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

import json


def test_read_correct_mail_conf_file():
    with open('mail_setting.json') as data_file:
        mail_setting = json.load(data_file)

        assert mail_setting['email'] == 'team.uniculture@gmail.com'
        assert mail_setting['password'] is not None

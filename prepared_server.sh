#!/usr/bin/env bash

./linku_backend/manage.py migrate
./linku_backend/manage.py runserver 0.0.0.0:8000

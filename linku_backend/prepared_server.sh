#!/usr/bin/env bash

BASEDIR=$(dirname "$0")

python $BASEDIR/manage.py migrate
python $BASEDIR/manage.py runserver 0.0.0.0:8000

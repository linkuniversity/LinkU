#!/usr/bin/env bash

BASEDIR=$(dirname "$0")

$BASEDIR/manage.py migrate
$BASEDIR/manage.py runserver 0.0.0.0:8000

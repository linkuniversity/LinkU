#!/usr/bin/env bash

BASEDIR=$(dirname "$0")

mysql -u linku -p$LINKU_MYSQL_PASSWORD <<EOF
drop database linku;
create database linku;
EOF

python $BASEDIR/manage.py migrate
python $BASEDIR/manage.py runserver 0.0.0.0:8000

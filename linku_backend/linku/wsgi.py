"""
WSGI config for linku project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.10/howto/deployment/wsgi/
"""

import os
import sys
if sys.platform == "linux2" or sys.platform == "linux":
    sys.path.append('/home/linku/.pyenv/versions/LinkU/lib/python3.5/site-packages')
from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "linku.settings")

application = get_wsgi_application()


# Requires python-magic, which requires the native libmagic lib
# I installed both on macOS with:
# - pip3 install python-magic
# - port install libmagic
#
# To run:
# python3 tobase64mime.py http://imagedomain.com/file.jpeg

import sys
import urllib.request

from base64 import b64encode

response = urllib.request.urlopen(sys.argv[1])
data = response.read()

print(b64encode(data).decode('utf-8'))

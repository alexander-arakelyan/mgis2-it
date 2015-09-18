#!/bin/bash

# npm install -g protractor
# webdriver-manager start
# sh -c 'while inotifywait -e close_write ./specs2/* ; do ./run-protractor.sh; done'

protractor run-protractor-conf.js


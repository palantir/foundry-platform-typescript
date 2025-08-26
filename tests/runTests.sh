#!/bin/bash

chmod 755 envConfig.sh

. ./envConfig.sh

npx vitest targetworkbench-functional.test.ts
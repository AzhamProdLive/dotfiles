#!/usr/bin/env bash

TEMP="$(cat /sys/devices/platform/coretemp.0/hwmon/hwmon7/temp1_input | awk '{sub(/000$/, "°C", $0); print}')"
echo "${TEMP:-null}"

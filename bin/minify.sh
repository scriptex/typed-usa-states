#!/bin/bash

path="$1"

find $path -name '*.js' -type f | while read f
do
    terser "$f" --output "$f" --compress --mangle
done

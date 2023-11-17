#!/bin/bash
# Run this script with
# npm run pullYMLtoLDB
# because it assumes you're in the root folder
module="${PWD##*/}"
fvtt package workon $module --type "Module"
for dir in src/packs/*; do
    pack="${dir##*/}"
    fvtt package pack -n $pack --in src/packs/$pack --out packs/
done
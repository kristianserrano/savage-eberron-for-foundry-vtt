#!/bin/bash
# Run this script with
# npm run pushLDBtoYML
# because it assumes you're in the root folder
module="${PWD##*/}"
fvtt package workon $module --type "Module"
for dir in packs/*; do
    pack="${dir##*/}"
    rm src/packs/$pack/*.yml
    fvtt package unpack -n $pack --out src/packs/$pack
done
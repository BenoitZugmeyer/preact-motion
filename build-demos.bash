#!/bin/bash

set -euo pipefail

for path in demos/*; do
  if [[ -e "$path"/index.jsx ]]; then
    echo "Building $path ..."
    rollup -c --format iife --output "$path"/all.js --environment NODE_ENV:production -- "$path"/index.jsx
  fi
done

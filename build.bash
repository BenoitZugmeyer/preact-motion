#!/bin/bash

set -euo pipefail

rm -rf build
echo "Building default bundle..."
rollup -c --external preact --format umd --output build/preact-motion.js --environment NODE_ENV:
echo "Building esnext bundle..."
rollup -c --external preact --format es  --output build/preact-motion.es.js --environment NODE_ENV:
echo "Building development bundle..."
rollup -c --external preact --format umd --output build/preact-motion.dev.js --environment NODE_ENV:development
echo "Building production bundle..."
rollup -c --external preact --format umd --output build/preact-motion.prod.js --environment NODE_ENV:production

echo "Generating flow types..."
# Idea from https://github.com/facebook/flow/issues/1996#issuecomment-228925018
cat > build/preact-motion.js.flow <<- EOS
/* @flow */

export * from '../src';
EOS

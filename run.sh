#!/bin/sh

set -ex
git clone https://github.com/ruby/ruby.git --depth 1
cd ruby
patch -p1 < ../emscripten.patch
autoconf
emconfigure ./configure --host wasm32-unknown-emscripten
emmake make V=1 miniruby.js EXEEXT=.js
cp miniruby.js miniruby.wasm ../docs

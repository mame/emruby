#!/bin/sh

set -ex
git clone https://github.com/ruby/ruby.git --depth 1
cd ruby
patch -p1 < ../emscripten.patch
autoconf
emconfigure ./configure CFLAGS="-m32 -s EMULATE_FUNCTION_POINTER_CASTS=1"
emmake make V=1 miniruby.js EXEEXT=.js
cp miniruby.js ../docs

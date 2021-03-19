#!/bin/sh

set -ex
git clone https://github.com/ruby/ruby.git --depth 1
cd ruby
patch -p1 < ../emscripten.patch
./autogen.sh
emconfigure ./configure --build x86_64-pc-linux-gnu --host wasm32-unknown-emscripten --with-static-linked-ext --with-ext=stringio,ripper,date,strscan,io/console,monitor,digest,pathname,psych
emmake make
cp ruby ruby.wasm ../docs

#!/bin/sh

set -ex
git clone https://github.com/ruby/ruby.git --depth 1
cd ruby
patch -p1 < ../emscripten.patch
./autogen.sh
./configure --build x86_64-pc-linux-gnu --host wasm32-unknown-emscripten --with-static-linked-ext --with-ext=stringio,ripper,date,strscan,io/console,io/wait,monitor,digest,pathname,psych optflags=-Os debugflags=-g0 CC=emcc LD=emcc AR=emar RANLIB=emranlib LDFLAGS="-sASYNCIFY_STACK_SIZE=65536" cflags="-DNDEBUG"
make
cp ruby ../app/public/ruby.js
cp ruby.wasm ../app/public/ruby.wasm
cd ..
ruby gen-fs.rb

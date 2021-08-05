# emruby: emscripten'ed ruby

Demo: https://mame.github.io/emruby/

## How to build

1. Setup emsdk ([Mozilla's document](https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_wasm)).  Make sure you can use `emcc`, `emconfigure`, and `emmake`.
2. Run the build script: `sh build.sh`.
3. Run `cd app && npm install && npx next build && npx next export -o ../docs`

You can test the app by running `cd app && node server.js` and opening http://localhost:3000/.

I have confirmed that "emscripten" package in Ubuntu 21.04 can also be used to build emruby. But emcc in the Ubuntu package emits by default a `warning: LLVM version appears incorrect (seeing "12.0", expected "11.0") [-Wversion-check]`, which makes `./configure` fail. You need to set `export EMCC_SKIP_SANITY_CHECK=1` to disable the warning.

## How to pronounce

To differentiate emruby from [mruby](https://github.com/mruby/mruby), please pronounce emruby as "Ee-Em-Ruby," not "Em-Ruby".  This is as per [matz's request](https://twitter.com/yukihiro_matz/status/964313657898295296).

## License

The MIT License (MIT)

Copyright (c) 2018, 2021 Yusuke Endoh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

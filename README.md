# emruby: emscripten'ed ruby

DEMO: https://mame.github.io/emruby/

## How to build

1. Setup emsdk ([Mozilla's document](https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_wasm)).  You need to be able to use `emcc`, `emconfigure`, and `emmake`.
2. Run the build script: `sh build.sh`.
3. You will see `docs/miniruby.js`.

NOTE: This is still just a proof-of-concept.  I just confirmed miniruby can be built.  Need more work to make this practical.  Your contribution is welcome!

## How to pronounce

To differentiate emruby from [mruby](https://github.com/mruby/mruby), please pronounce emruby as "Ee-Em-Ruby," not "Em-Ruby".  This is as per [matz's request](https://twitter.com/yukihiro_matz/status/964313657898295296).

## License

The MIT License (MIT)

Copyright (c) 2018 Yusuke Endoh

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

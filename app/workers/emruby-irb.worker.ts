export default {};

interface MyEmscriptenModule extends EmscriptenModule {
  thisProgram: string;
  stdin: () => number | null;
  stdout: (key: number | null) => void;
  stderr: (key: number | null) => void;
  setStatus: (msg: string) => void;
}

declare const self: { Module: Partial<MyEmscriptenModule> } & typeof globalThis;

const root = process.env.BASE_PATH + "/";

let buffer: Int32Array;

self.addEventListener("message", (msg) => {
  const shared = msg.data;
  buffer = new Int32Array(shared);
});

let i = 0;
const mystdin = () => {
  self.postMessage(-1);
  Atomics.wait(buffer, i, -1);
  const key = Atomics.load(buffer, i);
  Atomics.store(buffer, i, -1);
  i = (i + 1) % 1024;
  return key < 0 ? null : key;
};

self.Module = {
  locateFile: (path) => root + path,
  thisProgram: "ruby",
  arguments: [
    "-I/",
    "-I/lib",
    "-I/.ext/common",
    "-rirb",
    "-e",
    "def $stdout.tty? = true; ENV['TERM']='xterm'; IRB.start(__FILE__)",
  ],
  stdin: mystdin,
  stdout: self.postMessage,
  stderr: self.postMessage,
  setStatus: (msg: string) => self.postMessage(msg),
};

importScripts(root + "fs.js");
importScripts(root + "ruby.js");

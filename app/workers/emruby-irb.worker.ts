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
  self.postMessage(["input"]);
  Atomics.wait(buffer, i, -1);
  const key = Atomics.load(buffer, i);
  Atomics.store(buffer, i, -1);
  i = (i + 1) % 1024;
  return key;
};

self.Module = {
  locateFile: (path) => root + path,
  postRun: [() => self.postMessage(["terminated"])],
  thisProgram: "ruby",
  arguments: ["-I/", "-I/lib", "-I/.ext/common", "emruby-irb.rb"],
  stdin: mystdin,
  stdout: (key) => self.postMessage(["output", key]),
  stderr: (key) => self.postMessage(["output", key]),
  setStatus: (msg: string) => self.postMessage(["status", msg]),
};

importScripts(root + "fs.js");
importScripts(root + "ruby.js");

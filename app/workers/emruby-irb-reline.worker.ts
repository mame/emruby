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

console.log(root);
importScripts(root + "workerTools.js");

onmessage = (msg) => {
  self.Module = {
    locateFile: (path) => root + path,
    postRun: [() => self.postMessage({ type: "terminated" })],
    thisProgram: "ruby",
    arguments: ["-I/", "-I/lib", "-I/.ext/common", "emruby-irb.rb"],
    setStatus: (msg: string) =>
      self.postMessage({ type: "status", message: msg }),
  };

  importScripts(root + "fs.js");
  importScripts(root + "ruby.js");

  const { emscriptenHack, TtyClient } = self as any;
  emscriptenHack(new TtyClient(msg.data));
};

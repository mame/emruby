export default {};

console.log("invoked");
interface MyEmscriptenModule extends EmscriptenModule {
  thisProgram: string;
  setStatus: (msg: string) => void;
}

declare const self: { Module: Partial<MyEmscriptenModule> } & typeof globalThis;

const root = process.env.BASE_PATH + "/";

self.addEventListener("message", (msg) => {
  const code = msg.data;

  self.Module = {
    locateFile: (path) => root + path,
    postRun: [() => self.postMessage(["terminated"])],
    thisProgram: "ruby",
    arguments: ["-I/", "-I/lib", "-I/.ext/common", "-e", code],
    print: (line) => self.postMessage(["line", line]),
    printErr: (line) => self.postMessage(["line", line]),
    setStatus: (msg) => self.postMessage(["status", msg]),
  };

  importScripts(root + "fs.js");
  importScripts(root + "ruby.js");
});

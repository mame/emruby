import { FC, useCallback, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Terminal } from "xterm";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
import "xterm/css/xterm.css";

const Term = dynamic(() => import("../components/Term"), { ssr: false });

const Irb: FC = () => {
  const [xterm, setXterm] = useState<Terminal>();
  const [localEcho, setLocalEcho] = useState<any>(null);
  const [message, setMessage] = useState<any>(<>Status: Not initialized</>);

  const onXterm = useCallback((xterm, localEcho) => {
    setXterm(xterm);
    setLocalEcho(localEcho);
  }, []);

  useEffect(() => {
    if (!xterm || !localEcho) return;

    const worker = new Worker("../workers/emruby-irb.worker.ts", {
      type: "module",
    });

    const shared = new SharedArrayBuffer(1024);
    const buffer = new Int32Array(shared);
    buffer.fill(-1);
    worker.postMessage(shared);

    let i = 0;
    const input_buffer: number[] = [];
    const feed = () => {
      Atomics.store(buffer, i, input_buffer.shift() as number);
      Atomics.notify(buffer, i);
      i = (i + 1) % 1024;
    };

    worker.onmessage = (evt) => {
      const key = evt.data;
      if (typeof key == "string") {
        setMessage(<>Status: {key}</>);
      } else if (key >= 0) {
        xterm.write(String.fromCharCode(key));
      } else {
        setMessage(
          <>
            Ready! Type <code>RUBY_DESCRIPTION</code> and press the Enter key
          </>
        );
        if (input_buffer.length == 0) {
          localEcho.read("> ").then((line: string) => {
            xterm.write("\x1b[A> ");
            const s = line + "\n";
            for (let j = 0; j < s.length; j++) {
              input_buffer.push(s.charCodeAt(j));
            }
            input_buffer.push(-1);
            feed();
          });
        } else {
          feed();
        }
      }
    };

    return () => {
      localEcho.detach();
      xterm.dispose();
      worker.terminate();
    };
  }, [xterm, localEcho]);

  return (
    <div className="container-fluid">
      <Head>
        <title>irb on WASM (very experimental)</title>
      </Head>
      <h1 className="mb-5">irb on WASM (very experimental)</h1>
      <p>Note: This works on only Chrome before version 91</p>
      <p>{message}</p>
      <Term onXterm={onXterm} needLocalEcho={true} />
      <p className="mt-4">
        <Link href="/">Back to top</Link>
      </p>
    </div>
  );
};

export default Irb;

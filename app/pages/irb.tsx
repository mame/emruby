import { FC, useCallback, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Terminal } from "xterm";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
import "xterm/css/xterm.css";

const Term = dynamic(() => import("../components/Term"), { ssr: false });

const Irb: FC = () => {
  useEffect(() => {
    // https://dev.to/stefnotch/enabling-coop-coep-without-touching-the-server-2d3n
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register(`${process.env.BASE_PATH}/sw.js`).then(
        function (registration) {
          console.log(
            "COOP/COEP Service Worker registered: ",
            registration.scope
          );
          if (registration.active && !navigator.serviceWorker.controller) {
            window.location.reload();
          }
        },
        function (err) {
          console.log("COOP/COEP Service Worker failed to register: ", err);
        }
      );
    } else {
      console.warn("Cannot register COOP/COEP Service Worker");
    }
  }, []);
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

    worker.onmessage = (e) => {
      const evt = e.data;
      switch (evt[0]) {
        case "status":
          if (evt[1]) setMessage(<>Status: {evt[1]}</>);
          break;
        case "terminated":
          setMessage(
            <>Status: Terminated. Please reload this page to re-run irb.</>
          );
          break;
        case "output":
          xterm.write(String.fromCharCode(evt[1]));
          break;
        case "input":
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
          break;
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
      <Term onXterm={onXterm} needFit={true} needLocalEcho={true} />
      <p className="mt-4">
        <Link href="/">Back to top</Link>
      </p>
    </div>
  );
};

export default Irb;

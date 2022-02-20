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
  const [message, setMessage] = useState<any>(<>Status: Not initialized</>);

  const onXterm = useCallback((xterm) => {
    setXterm(xterm);
  }, []);

  useEffect(() => {
    if (!xterm) return;

    const init = async () => {
      const { openpty, TtyServer } = await import("xterm-pty");

      const worker = new Worker("../workers/emruby-irb-reline.worker.ts", {
        type: "module",
      });

      const { master, slave } = openpty();
      xterm.loadAddon(master);

      new TtyServer(slave).start(worker, (msg) => {
        switch (msg.data.type) {
          case "status":
            setMessage(<>Status: {msg.data.message}</>);
            break;
          case "terminated":
            setMessage(
              <>Status: Terminated. Please reload this page to re-run irb.</>
            );
            break;
        }
      });
    };

    init();

    return () => {
      xterm.dispose();
    };
  }, [xterm]);

  return (
    <div className="container-fluid">
      <Head>
        <title>irb on WASM (very experimental)</title>
      </Head>
      <h1 className="mb-5">irb on WASM (very experimental)</h1>
      <p>Note: This works on only Chrome before version 91</p>
      <p>{message}</p>
      <div id="terminal" />
      <Term onXterm={onXterm} needFit={false} needLocalEcho={false} />
      <p className="mt-4">
        <Link href="/">Back to top</Link>
      </p>
    </div>
  );
};

export default Irb;

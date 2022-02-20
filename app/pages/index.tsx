import React, { FC, useCallback, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "xterm/css/xterm.css";
import { Terminal } from "xterm";

const Term = dynamic(() => import("../components/Term"), { ssr: false });
const Editor = dynamic(() => import("../components/Editor"), { ssr: false });

const code = `puts "# Show Ruby version"
p RUBY_DESCRIPTION

puts
puts "# Execute Ruby code"
p 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
p "Hello" + "world"

puts
puts "# Execute JS code from Ruby"
p emscripten_run_script_int(<<JAVASCRIPT)
(function() {
  var sum = 0;
  for (var i = 1; i <= 100; i++) sum += i;
  return sum;
})();
JAVASCRIPT

puts
puts "# Sleep one second"
sleep 1

puts
puts "# Use an extension library"

require "stringio"
p StringIO.new("foobar").read(3)

puts
puts "# Use an ruby library (did_you_mean) and show an exception"
StrngIO`;

const Home: FC = () => {
  const [xterm, setXterm] = useState<Terminal>();
  const [input, setInput] = useState(code);
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState("");

  const onXterm = useCallback((xterm) => setXterm(xterm), []);

  const runWorker = (
    code: string,
    onMessage: (
      evt: ["status", string] | ["line", string] | ["terminated"]
    ) => void
  ) => {
    const worker = new Worker("../workers/emruby.worker.ts", {
      type: "module",
    });
    worker.onmessage = (evt) => onMessage(evt.data);
    worker.postMessage(code);
  };

  const clicked = useCallback(() => {
    if (xterm) {
      xterm.clear();
      setRunning(true);
      runWorker(input, (evt) => {
        switch (evt[0]) {
          case "status":
            setStatus(evt[1]);
            break;
          case "line":
            xterm.write(evt[1] + "\n");
            break;
          case "terminated":
            setRunning(false);
            break;
        }
      });
    }
  }, [input, xterm]);

  return (
    <div className="container-fluid">
      <Head>
        <title>emruby: A Ruby interpreter on browser</title>
      </Head>
      <h1>emruby: A Ruby interpreter on browser</h1>
      <p>
        This is a demonstration of Ruby interpreter (MRI) that works on browser
        (experimental). Powered by{" "}
        <a href="https://emscripten.org/">Emscripten</a>.
      </p>
      <h2 className="mt-4">Code</h2>
      <Editor text={input} onChange={(text) => setInput(text)} />
      <Button disabled={running} onClick={clicked} className="mt-3">
        {running ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="sr-only">Loading...</span> {status}
          </>
        ) : (
          "Run"
        )}
      </Button>
      <h2 className="mt-4">Result</h2>
      <Term onXterm={onXterm} needFit={true} needLocalEcho={false} />
      <h2 className="mt-4">See also</h2>
      <ul>
        <li>
          <Link href="/irb">irb (experimental)</Link>
          <Link href="/irb-reline">irb with reline (very experimental)</Link>
        </li>
        <li>
          <Link href="https://github.com/mame/emruby">source (github)</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

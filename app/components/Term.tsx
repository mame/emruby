import { FC, MutableRefObject, useEffect, useRef } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const LocalEchoController = require("local-echo").default;

interface Props {
  onXterm: (xterm: Terminal, localEcho?: any) => void;
  needLocalEcho: boolean;
}

const Term: FC<Props> = ({ onXterm, needLocalEcho }) => {
  const xtermRef = useRef<Terminal>(null) as MutableRefObject<Terminal>;
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elem = divRef.current;
    if (!elem) return;

    if (!xtermRef.current) {
      xtermRef.current = new Terminal({ convertEol: true });
    }
    const xterm = xtermRef.current;

    const fitAddon = new FitAddon();
    xterm.loadAddon(fitAddon);
    let localEcho: any = null;
    if (needLocalEcho) {
      localEcho = new LocalEchoController();
      xterm.loadAddon(localEcho);
    }
    onXterm(xterm, localEcho);

    xterm.open(elem);
    fitAddon.fit();

    return () => {
      if (needLocalEcho) {
        if (localEcho) localEcho.detach();
      }
      xterm.dispose();
    };
  }, [divRef, onXterm, needLocalEcho]);

  return <div ref={divRef}></div>;
};

export default Term;

import { FC, MutableRefObject, useEffect, useRef } from "react";
import CodeMirror from "codemirror";
import { Card } from "react-bootstrap";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/ruby/ruby.js";

interface Props {
  text: string;
  onChange: (text: string) => void;
}

const Editor: FC<Props> = ({ text, onChange }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const codeMirrorRef = useRef<CodeMirror.Editor>(
    null
  ) as MutableRefObject<CodeMirror.Editor>;

  useEffect(() => {
    const textArea = textAreaRef.current;
    if (!textArea) return;
    if (!codeMirrorRef.current) {
      const codeMirror = CodeMirror(
        (elt: HTMLElement) => {
          const parent = textArea.parentNode;
          if (parent) parent.replaceChild(elt, textArea);
        },
        { value: text }
      );
      codeMirror.on("change", () => {
        onChange(codeMirror.getValue());
      });
      codeMirrorRef.current = codeMirror;
    }
  }, [text, onChange]);

  return (
    <Card>
      <Card.Body style={{ padding: 0 }}>
        <textarea
          ref={textAreaRef}
          onChange={(e) => console.log(e.target.value)}
        />
      </Card.Body>
    </Card>
  );
};

export default Editor;

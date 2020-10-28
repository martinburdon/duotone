import Prism from 'prismjs';
import { useEffect } from 'react';
import dedent from 'dedent';

const Code = ({ language, children }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <pre>
      <code className={`language-${language}`}>{dedent(children)}</code>
    </pre>
  );
};

export default Code;

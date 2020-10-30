import Prism from 'prismjs';
import { useEffect, useState } from 'react';
import dedent from 'dedent';
const { Collapse, Button, Stack } = require('@chakra-ui/core');
import copy from 'copy-to-clipboard';
import 'prismjs/themes/prism-okaidia.css';

const Code = ({ language, children }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  const [isOpen, setIsOpen] = useState(false);
  const formattedCode = dedent(children);

  return (
    <>
      <Stack isInline>
        <Button onClick={() => setIsOpen(!isOpen)} size="xs">
          View full code
        </Button>
        <Button
          variantColor="teal"
          ml="auto"
          onClick={() => copy(formattedCode)}
          size="xs"
        >
          Copy to clipboard
        </Button>
      </Stack>
      <Collapse startingHeight={60} isOpen={isOpen}>
        <pre>
          <code className={`language-${language}`}>{formattedCode}</code>
        </pre>
      </Collapse>
    </>
  );
};

export default Code;

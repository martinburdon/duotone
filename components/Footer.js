import { Flex, IconButton, Link, Stack, Text } from '@chakra-ui/core';

const Footer = () => (
  <Stack as="footer" minH="200px" align="center" justify="center">
    <a href="https://martinburdon.co.uk">Made by Martin</a>
    <Stack isInline>
      <Link href="https://twitter.com/martin870" title="Twitter" isExternal>
        <IconButton
          aria-label="Twitter"
          icon="twitter"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="https://github.com/martinburdon" title="GitHub" isExternal>
        <IconButton
          aria-label="GitHub"
          icon="github"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="mailto:martin@martinburdon.co.uk" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon="mail"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
    </Stack>
  </Stack>
);

export default Footer;

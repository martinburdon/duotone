import { IconButton, Link, Stack } from '@chakra-ui/core';
import styled from '@emotion/styled';

const TextLink = styled.a`
  transition: color 0.5s ease, text-shadow 0.5s ease;

  &:hover {
    color: #29ffc4;
    text-shadow: 0 0 8px #80ffce;
  }
`;

const SocialButton = styled(IconButton)`
  &:hover {
    background: transparent;
    color: #29ffc4;
  }
`;

const Footer = () => (
  <Stack
    as="footer"
    minH="150px"
    align="center"
    justify="center"
    padding={8}
    paddingTop={32}
  >
    <TextLink href="https://martinburdon.co.uk">Made by Martin</TextLink>
    <Stack isInline>
      <Link href="https://twitter.com/martin870" title="Twitter" isExternal>
        <SocialButton
          aria-label="Twitter"
          icon="twitter"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="https://github.com/martinburdon" title="GitHub" isExternal>
        <SocialButton
          aria-label="GitHub"
          icon="github"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="mailto:martin@martinburdon.co.uk" title="Email" isExternal>
        <SocialButton
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

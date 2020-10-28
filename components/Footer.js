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
  <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#090c14"
        fillOpacity="1"
        d="M0,32L48,58.7C96,85,192,139,288,149.3C384,160,480,128,576,128C672,128,768,160,864,160C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
    <Stack
      as="footer"
      align="center"
      backgroundColor="#090c14"
      justify="center"
      padding={8}
      paddingTop={0}
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
  </>
);

export default Footer;

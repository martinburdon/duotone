import { Flex, Image } from '@chakra-ui/core';
import styled from '@emotion/styled';

const StyledContainer = styled(Flex)`
  background: #f32959; // TODO: Config
  position: relative;

  &::after {
    background-color: #1d3162; // TODO: Config
    content: '';
    height: 100%;
    left: 0;
    mix-blend-mode: lighten;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const StyledImage = styled(Image)`
  filter: grayscale(100%) contrast(1);
  mix-blend-mode: darken; // TODO Config multiply, darken, lighten
`;

const DuoImage = ({ src }) => {
  return (
    <StyledContainer justifyContent="center" w="100%">
      <StyledImage src={src} />
    </StyledContainer>
  );
};

export default DuoImage;

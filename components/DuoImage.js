import { Box, Flex, Image } from '@chakra-ui/core';
import styled from '@emotion/styled';

const StyledContainer = styled(Box)`
  background: ${(props) => props.color1};
  position: relative;

  &::after {
    background-color: ${(props) => props.color2};
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
  filter: grayscale(100%) contrast(${(props) => props.contrast});
  mix-blend-mode: ${(props) => props.blendMode};
`;

const DuoImage = ({ src, color1, color2, contrast, blendMode }) => {
  return (
    <Flex justifyContent="center" marginBottom={8} maxW="500px">
      <StyledContainer color1={color1} color2={color2} justifyContent="center">
        <StyledImage contrast={contrast} blendMode={blendMode} src={src} />
      </StyledContainer>
    </Flex>
  );
};

export default DuoImage;

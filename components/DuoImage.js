import { Flex, Image } from '@chakra-ui/core';
import styled from '@emotion/styled';

const StyledContainer = styled(Flex)`
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
  mix-blend-mode: ${(props) =>
    props.mixBlendMode}; // TODO Config multiply, darken, lighten
`;

const DuoImage = ({
  src,
  color1 = '#f32959',
  color2 = '#1d3162',
  contrast = 1,
  mixBlendMode = 'darken'
}) => {
  return (
    <StyledContainer
      color1={color1}
      color2={color2}
      justifyContent="center"
      w="100%"
    >
      <StyledImage contrast={contrast} mixBlendMode={mixBlendMode} src={src} />
    </StyledContainer>
  );
};

export default DuoImage;

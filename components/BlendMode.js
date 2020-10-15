import { Button, Flex } from '@chakra-ui/core';

const BlendModeButton = ({ children, type, blendMode, setBlendMode }) => (
  <Button
    onClick={() => setBlendMode(type)}
    m={2}
    size="sm"
    variantColor="teal"
    variant={blendMode === type ? 'solid' : 'outline'}
  >
    {children}
  </Button>
);

const BlendMode = (props) => {
  return (
    <Flex justifyContent="center">
      <BlendModeButton type="darken" {...props}>
        Darken
      </BlendModeButton>
      <BlendModeButton type="lighten" {...props}>
        Lighten
      </BlendModeButton>
      <BlendModeButton type="multiply" {...props}>
        Multiply
      </BlendModeButton>
    </Flex>
  );
};

export default BlendMode;

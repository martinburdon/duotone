import { Button, Stack } from '@chakra-ui/core';

const BlendModeButton = ({ children, type, blendMode, setBlendMode }) => (
  <Button
    onClick={() => setBlendMode(type)}
    size="sm"
    variantColor="teal"
    variant={blendMode === type ? 'solid' : 'outline'}
  >
    {children}
  </Button>
);

const BlendMode = (props) => {
  return (
    <Stack isInline spacing={0} shouldWrapChildren>
      <BlendModeButton type="darken" {...props}>
        Darken
      </BlendModeButton>
      <BlendModeButton type="lighten" {...props}>
        Lighten
      </BlendModeButton>
      <BlendModeButton type="multiply" {...props}>
        Multiply
      </BlendModeButton>
    </Stack>
  );
};

export default BlendMode;

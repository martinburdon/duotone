import { Button, Flex, Text } from '@chakra-ui/core';

const BlendMode = ({ blendMode, setBlendMode }) => {
  return (
    <Flex justifyContent="center">
      <Button
        m={2}
        size="sm"
        variantColor="teal"
        variant={blendMode === 'multiply' ? 'solid' : 'outline'}
        onClick={() => setBlendMode('multiply')}
      >
        Multiply
      </Button>
      <Button
        m={2}
        size="sm"
        variantColor="teal"
        variant={blendMode === 'darken' ? 'solid' : 'outline'}
        onClick={() => setBlendMode('darken')}
      >
        Darken
      </Button>
      <Button
        m={2}
        size="sm"
        variantColor="teal"
        variant={blendMode === 'lighten' ? 'solid' : 'outline'}
        onClick={() => setBlendMode('lighten')}
      >
        Lighten
      </Button>
    </Flex>
  );
};

export default BlendMode;

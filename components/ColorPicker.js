const { Box, Flex, Stack, Text } = require('@chakra-ui/core');
import { useState } from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ color, onChange, label }) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const onSwatchClick = () => {
    setIsPickerOpen(!isPickerOpen);
  };

  return (
    <Box pos="relative" marginBottom={[4, 0]}>
      <Flex
        alignItems="center"
        cursor="pointer"
        justifyContent="space-between"
        onClick={onSwatchClick}
      >
        <Flex mr={4} direction="column">
          <Text>{label}</Text>
          <Text color="gray.400">{color}</Text>
        </Flex>
        <Box backgroundColor={color} borderRadius={8} h="44px" w="44px"></Box>
      </Flex>
      {isPickerOpen && (
        <Flex
          position="absolute"
          onClick={onSwatchClick}
          top="100%"
          zIndex="100"
        >
          <Box position="fixed" top="0" right="0" bottom="0" left="0" />
          <ChromePicker disableAlpha color={color} onChange={onChange} />
        </Flex>
      )}
    </Box>
  );
};

export default ColorPicker;

const { Box, Flex, Stack } = require('@chakra-ui/core');
import { getContrastingColor } from '@/utils/helpers';
import { useState } from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ color, onChange }) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const textColor = getContrastingColor(color);

  const onSwatchClick = () => {
    setIsPickerOpen(!isPickerOpen);
  };

  return (
    <Stack pos="relative" w="100%">
      <Flex
        alignItems="center"
        backgroundColor={color}
        color={textColor}
        cursor="pointer"
        justifyContent="center"
        p={4}
        onClick={onSwatchClick}
      >
        {color}
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
    </Stack>
  );
};

export default ColorPicker;

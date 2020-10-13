const { Flex, Box } = require('@chakra-ui/core');
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
    <Flex flexDirection="column" m={4}>
      <Flex
        alignItems="center"
        backgroundColor={color}
        borderRadius="300px"
        color={textColor}
        cursor="pointer"
        h="100px"
        justifyContent="center"
        onClick={onSwatchClick}
        w="100px"
      >
        {color}
      </Flex>
      {isPickerOpen && (
        <Flex
          position="fixed"
          top="0"
          right="0"
          bottom="0"
          left="0"
          alignItems="center"
          justifyContent="center"
          onClick={onSwatchClick}
        >
          <Box position="absolute">
            <ChromePicker disableAlpha color={color} onChange={onChange} />
          </Box>
        </Flex>
      )}
    </Flex>
  );
};

export default ColorPicker;

const { Flex, Heading } = require('@chakra-ui/core');
import { SketchPicker } from 'react-color';

const Options = ({ setColor1, color1, setColor2, color2 }) => {
  const onChangeColor1 = (color) => setColor1(color.hex);
  const onChangeColor2 = (color) => setColor2(color.hex);

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column">
        <Heading as="h2">Color 1</Heading>
        <SketchPicker color={color1} onChange={onChangeColor1} />
      </Flex>
      <Flex flexDirection="column">
        <Heading as="h2">Color 2</Heading>
        <SketchPicker color={color2} onChange={onChangeColor2} />
      </Flex>
    </Flex>
  );
};

export default Options;

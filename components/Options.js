const { Flex } = require('@chakra-ui/core');
import ColorPicker from './ColorPicker';

const Options = ({ setColor1, color1, setColor2, color2 }) => {
  const onChangeColor1 = (color) => setColor1(color.hex);
  const onChangeColor2 = (color) => setColor2(color.hex);

  return (
    <Flex flexDirection="row" justifyContent="center" alignItems="center">
      <ColorPicker color={color1} onChange={onChangeColor1} />
      <ColorPicker color={color2} onChange={onChangeColor2} />
    </Flex>
  );
};

export default Options;

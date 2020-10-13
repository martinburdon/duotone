const { Flex } = require('@chakra-ui/core');
import BlendMode from './BlendMode';
import ColorPicker from './ColorPicker';

const Options = ({
  blendMode,
  setBlendMode,
  color1,
  setColor1,
  color2,
  setColor2
}) => {
  const onChangeColor1 = (color) => setColor1(color.hex);
  const onChangeColor2 = (color) => setColor2(color.hex);

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <ColorPicker color={color1} onChange={onChangeColor1} />
        <ColorPicker color={color2} onChange={onChangeColor2} />
      </Flex>
      <BlendMode blendMode={blendMode} setBlendMode={setBlendMode} />
    </Flex>
  );
};

export default Options;

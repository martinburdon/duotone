const {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  Text
} = require('@chakra-ui/core');

const ContrastControl = ({ contrast, setContrast }) => {
  return (
    <Stack>
      <Text>Contrast</Text>
      <Slider
        onChange={(value) => setContrast(value)}
        defaultValue={contrast}
        size="lg"
        min="0"
        max="1"
        step="0.05"
      >
        <SliderTrack bg="teal.800" />
        <SliderFilledTrack bg="teal.400" />
        <SliderThumb size={6} />
      </Slider>
    </Stack>
  );
};

export default ContrastControl;

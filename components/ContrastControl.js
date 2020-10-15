const {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb
} = require('@chakra-ui/core');

const ContrastControl = ({ contrast, setContrast }) => {
  return (
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
  );
};

export default ContrastControl;

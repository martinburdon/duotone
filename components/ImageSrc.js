const { Input, InputGroup, InputLeftAddon } = require('@chakra-ui/core');

const ImageUrl = ({ imageSrc, setImageSrc }) => {
  const handleChange = (event) => setImageSrc(event.target.value);

  return (
    <InputGroup mb={4} w="100%">
      <InputLeftAddon children="URL" />
      <Input
        backgroundColor="gray.800"
        borderColor="gray.700"
        value={imageSrc}
        onChange={handleChange}
        onFocus={(e) => e.target.select()}
        placeholder="Pick image"
      />
    </InputGroup>
  );
};

export default ImageUrl;

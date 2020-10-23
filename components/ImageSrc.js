const { Input, Text, Stack } = require('@chakra-ui/core');

const ImageUrl = ({ imageSrc, setImageSrc }) => {
  const handleChange = (event) => setImageSrc(event.target.value);

  return (
    <Stack mb={4} w="100%">
      <Text>Select image</Text>
      <Input
        backgroundColor="gray.800"
        borderColor="gray.700"
        value={imageSrc}
        onChange={handleChange}
        onFocus={(e) => e.target.select()}
        placeholder="Pick image"
      />
    </Stack>
  );
};

export default ImageUrl;

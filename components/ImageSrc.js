const { Input, Text, Flex } = require('@chakra-ui/core');

const ImageUrl = ({ imageSrc, setImageSrc }) => {
  const handleChange = (event) => setImageSrc(event.target.value);

  return (
    <Flex mb={4} flexDirection="column">
      <Text mr={4}>Select image</Text>
      <Input
        backgroundColor="gray.800"
        borderColor="gray.700"
        value={imageSrc}
        onChange={handleChange}
        placeholder="Pick image"
      />
    </Flex>
  );
};

export default ImageUrl;

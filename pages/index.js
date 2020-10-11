import { Flex, Grid, Heading } from '@chakra-ui/core';

export default function Home() {
  return (
    <Grid
      className="wrapper"
      templateColumns="minmax(20px, 1fr) minmax(auto, 600px) minmax(20px, 1fr)"
    >
      <Flex m="2rem 0" justifyContent="center">
        <Heading as="h1">Duotone</Heading>
      </Flex>
    </Grid>
  );
}

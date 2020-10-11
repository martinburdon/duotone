import DuoImage from '@/components/DuoImage';
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
      <Flex>
        <DuoImage src="https://i.scdn.co/image/ab67616d00001e028b52c6b9bc4e43d873869699" />
      </Flex>
    </Grid>
  );
}

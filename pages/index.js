import { Grid } from '@chakra-ui/core';

export default function Home() {
  return (
    <Grid
      className="wrapper"
      templateColumns="minmax(20px, 1fr) minmax(auto, 600px) minmax(20px, 1fr)"
    >
      <h1>Let's go 🤓✌️</h1>
    </Grid>
  );
}

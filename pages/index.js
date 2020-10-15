import DuoImage from '@/components/DuoImage';
import ImageSrc from '@/components/ImageSrc';
import Options from '@/components/Options';
import { Flex, Grid, Heading } from '@chakra-ui/core';
import { useState } from 'react';
export default function Home() {
  const [imageSrc, setImageSrc] = useState(
    'https://i.scdn.co/image/ab67616d00001e028b52c6b9bc4e43d873869699'
  );
  const [color1, setColor1] = useState('#f32959');
  const [color2, setColor2] = useState('#1d3162');
  const [blendMode, setBlendMode] = useState('darken');
  const [contrast, setContrast] = useState(1);

  return (
    <Grid
      className="wrapper"
      templateColumns="minmax(20px, 1fr) minmax(auto, 600px) minmax(20px, 1fr)"
    >
      <Flex m="2rem 0" justifyContent="center">
        <Heading as="h1">Duotone</Heading>
      </Flex>
      <Flex flexDirection="column">
        <ImageSrc imageSrc={imageSrc} setImageSrc={setImageSrc} />
        <DuoImage
          blendMode={blendMode}
          color1={color1}
          color2={color2}
          contrast={contrast}
          src={imageSrc}
        />
        <Options
          blendMode={blendMode}
          setBlendMode={setBlendMode}
          color1={color1}
          setColor1={setColor1}
          color2={color2}
          setColor2={setColor2}
          contrast={contrast}
          setContrast={setContrast}
        />
      </Flex>
    </Grid>
  );
}

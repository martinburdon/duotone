import DuoImage from '@/components/DuoImage';
import Footer from '@/components/Footer';
import ImageSrc from '@/components/ImageSrc';
import Options from '@/components/Options';
import { Flex, Heading } from '@chakra-ui/core';
import { useState } from 'react';

export default function Home() {
  const [imageSrc, setImageSrc] = useState(
    'https://i.scdn.co/image/ab67616d00001e02fce23dadb51975ebf2e9d75c'
  );
  const [color1, setColor1] = useState('#f32959');
  const [color2, setColor2] = useState('#1d3162');
  const [blendMode, setBlendMode] = useState('darken');
  const [contrast, setContrast] = useState(1);

  return (
    <Flex direction="column">
      <Flex m="2rem 0" paddingX={8} justifyContent="center">
        <Heading as="h1">Duotone</Heading>
      </Flex>
      <Flex paddingX={8} flexDirection="column" alignItems="center">
        <Flex flexDirection="column" alignItems="center" maxW="500px" w="100%">
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
      </Flex>
      <Footer />
    </Flex>
  );
}

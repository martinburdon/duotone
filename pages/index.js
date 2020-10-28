import Download from '@/components/Download';
import DuoImage from '@/components/DuoImage';
import Footer from '@/components/Footer';
import ImageSrc from '@/components/ImageSrc';
import Options from '@/components/Options';
import Presets from '@/components/Presets';
import { Flex, Heading } from '@chakra-ui/core';
import { useState } from 'react';

export default function Home() {
  const [imageSrc, setImageSrc] = useState(
    'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  );

  const [color1, setColor1] = useState('#00e2ff');
  const [color2, setColor2] = useState('#450084');
  const [blendMode, setBlendMode] = useState('darken');
  const [contrast, setContrast] = useState(1);

  return (
    <Flex direction="column">
      <Flex m="2rem 0" paddingX={8} justifyContent="center">
        <Heading as="h1">Duotone</Heading>
      </Flex>
      <Flex paddingX={8} flexDirection="column" alignItems="center">
        <Flex flexDirection="column" alignItems="center" maxW="500px" w="100%">
          <Flex w="100%">
            <ImageSrc imageSrc={imageSrc} setImageSrc={setImageSrc} />
            <Download imageSrc={imageSrc} color1={color1} color2={color2} />
          </Flex>
          <DuoImage
            blendMode={blendMode}
            color1={color1}
            color2={color2}
            contrast={contrast}
            src={imageSrc}
          />
          <Presets setColor1={setColor1} setColor2={setColor2} />
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

import presets from '@/utils/presets';
import { Button, SimpleGrid } from '@chakra-ui/core';
import styled from '@emotion/styled';

const DuoButton = styled(Button)`
  background: linear-gradient(
    135deg,
    ${(props) => props.fill1} 50%,
    ${(props) => props.fill2} 50%
  );
  border-radius: 100%;
  height: 40px;
  width: 40px;

  span {
    display: none;
  }
`;

const PresetItem = ({ setColor1, setColor2, fill1, fill2 }) => {
  return (
    <DuoButton
      fill1={fill1}
      fill2={fill2}
      onClick={() => {
        setColor1(fill1);
        setColor2(fill2);
      }}
    >
      <span>{fill1}</span>
    </DuoButton>
  );
};

const Presets = (props) => {
  const presetItems = presets.map((data, i) => {
    return <PresetItem key={i} {...props} {...data} />;
  });

  return (
    <SimpleGrid columns="5" spacing={8} mb={8}>
      {presetItems}
    </SimpleGrid>
  );
};

export default Presets;

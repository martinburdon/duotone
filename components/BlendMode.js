import { Button, RadioButtonGroup, Stack, Text } from '@chakra-ui/core';

const CustomRadio = React.forwardRef((props, ref) => {
  const { isChecked, isDisabled, value, ...rest } = props;

  return (
    <Button
      ref={ref}
      variantColor="teal"
      variant={isChecked ? 'solid' : 'outline'}
      aria-checked={isChecked}
      role="radio"
      isDisabled={isDisabled}
      {...rest}
      mr="0"
      px="0"
      w="100%"
    />
  );
});

const BlendMode = ({ blendMode, setBlendMode }) => {
  return (
    <Stack>
      <Text>Blend Mode</Text>
      <RadioButtonGroup
        onChange={(val) => setBlendMode(val)}
        value={blendMode}
        isInline
        display="flex"
      >
        <CustomRadio roundedLeft={8} roundedRight="0" value="darken">
          Darken
        </CustomRadio>
        <CustomRadio borderRadius="0" borderX="none" value="lighten">
          Lighten
        </CustomRadio>
        <CustomRadio roundedLeft="0" roundedRight={8} value="multiply">
          Multiply
        </CustomRadio>
      </RadioButtonGroup>
    </Stack>
  );
};

export default BlendMode;

export const getContrastingColor = (color) => {
  if (!color) return '#fff';
  const { r, g, b } = hexToRGB(color);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000' : '#fff';
};

const hexToRGB = (hex) => {
  let r = 0,
    g = 0,
    b = 0;

  // If hex is shorthand, i.e. #fff
  if (hex.length === 4) {
    r = `0x${hex[1]}${hex[1]}`;
    g = `0x${hex[2]}${hex[2]}`;
    b = `0x${hex[3]}${hex[3]}`;
  }

  // If hex is longhand, i.e. #ffffff
  if (hex.length === 7) {
    r = `0x${hex[1]}${hex[2]}`;
    g = `0x${hex[3]}${hex[4]}`;
    b = `0x${hex[5]}${hex[6]}`;
  }

  return { r, g, b };
};

import { theme as chakraTheme } from '@chakra-ui/core';

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `'Roboto Mono', monospace,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `'Roboto Mono', monospace,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    mono: `'Roboto Mono', monospace,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  },
  colors: {
    ...chakraTheme.colors,
    gray: {
      50: '#eef1f9',
      100: '#d3d6de',
      200: '#b7bbc5',
      300: '#9a9faf',
      400: '#7e8498',
      500: '#646b7e',
      600: '#4e5363',
      700: '#383b47',
      800: '#21242c',
      900: '#090c14'
    },
    teal: {
      50: '#dcfff6',
      100: '#b0ffe3',
      200: '#80ffce',
      300: '#50ffc6',
      400: '#29ffc4',
      500: '#19e6b6',
      600: '#0bb39a',
      700: '#008079',
      800: '#004d4d',
      900: '#001b1a'
    }
  },
  icons: {
    ...chakraTheme.icons,
    github: {
      path: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </g>
      )
    }
  }
};

export default theme;

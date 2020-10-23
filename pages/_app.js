import Head from 'next/head';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';

import customTheme from '@/styles/theme';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }

          #__next {
            background: #090c14;
            color: #fff;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          .wrapper > * {
            grid-column: 2;
          }

          .full-bleed {
            grid-column: 1 / 4;
            width: 100%;
          }

          input:focus {
            border-color: #19e6b6 !important;
            box-shadow: 0 0 0 1px #19e6b6 !important;
          }

          ::selection {
            background-color: #29ffc4;
            color: #004d4d;
          }
        `}
      />
      {children}
    </>
  );
};

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider value="dark">
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;

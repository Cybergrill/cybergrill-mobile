import { extendTheme } from 'native-base';

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  colors: {
    primary: {
      50: '#ffe9e1',
      100: '#fcc5b7',
      200: '#f4a18b',
      300: '#ee7b5e',
      400: '#e75731',
      500: '#ce3e18',
      600: '#a12f11',
      700: '#73210b',
      800: '#481204',
      900: '#1f0300',
    },
    secondary: {
      50: '#dafbff',
      100: '#b2ebfb',
      200: '#88ddf4',
      300: '#5bceee',
      400: '#31c0e7',
      500: '#18a7ce',
      600: '#0582a1',
      700: '#005d74',
      800: '#003948',
      900: '#00151c',
    },
    burnt: '#ea6947',
    taupe: '#4b4237',
    alabaster: '#ede7d9',
    darkCyan: '#4b8f8c',
    federalBlue: '#090446',
  },
});

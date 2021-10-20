import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#ef4941',
    lightGray: '#f7f7f7',
  },
});

type Theme = typeof theme;

export type { Theme };

export default theme;

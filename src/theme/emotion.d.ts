import '@emotion/react';
import { Theme as CustomTheme } from './index';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}

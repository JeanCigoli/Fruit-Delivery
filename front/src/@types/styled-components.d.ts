import 'styled-components';
import { Theme } from '../main/style/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

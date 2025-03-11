import 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {
	// @ts-expect-error - Это валидный паттерн для типизации темы в styled-components
  export interface DefaultTheme extends Theme {}
}
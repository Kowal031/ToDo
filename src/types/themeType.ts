import { CONSTANTS } from "../constants/constants";

export type ThemeType =
  | typeof CONSTANTS.THEME.LIGHT
  | typeof CONSTANTS.THEME.DARK;

export interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

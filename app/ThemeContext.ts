import { createContext } from "react";
import { Dispatch, SetStateAction } from "react";
class ThemeContextData {
  public isDarkMode: boolean;
  public setIsDarkMode: Dispatch<SetStateAction<boolean>>;

  constructor(isDarkMode, setIsDarkMode) {
    this.isDarkMode = isDarkMode;
    this.setIsDarkMode = setIsDarkMode;
  }
}

export const ThemeContext = createContext(new ThemeContextData(true, () => {}));

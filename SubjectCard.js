// context/ThemeContext.js

import React, {
  createContext,
  useContext,
  useMemo,
} from "react";

import { useSettings } from "./SettingsContext";

import { COLORS } from "../styles/colors";

const ThemeContext =
  createContext();

export const useTheme =
  () =>
    useContext(
      ThemeContext
    );

export const ThemeProvider =
  ({ children }) => {
    const {
      settings,
    } = useSettings();

    const theme =
      useMemo(() => {
        const appearance =
          settings?.appearance ||
          "dark";

        return {
          mode: appearance,

          colors: COLORS,
        };
      }, [settings]);

    return (
      <ThemeContext.Provider
        value={{
          theme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  };
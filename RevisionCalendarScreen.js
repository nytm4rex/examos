// navigation/AppNavigator.js

import React from "react";

import {
  NavigationContainer,
  DarkTheme,
} from "@react-navigation/native";

import BottomTabs from "./BottomTabs";

const ExamOSTheme = {
  ...DarkTheme,

  colors: {
    ...DarkTheme.colors,

    background: "#080808",

    card: "#2C2C2E",

    text: "#FFFFFF",

    border: "#373737",

    primary: "#1596F5",
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer
      theme={ExamOSTheme}
    >
      <BottomTabs />
    </NavigationContainer>
  );
}
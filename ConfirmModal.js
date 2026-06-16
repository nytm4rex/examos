// screens/more/SettingsScreen.js

import React from "react";

import {
  ScrollView,
} from "react-native";

import InfoCard from "../../components/cards/InfoCard";

import { useSettings } from "../../context/SettingsContext";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function SettingsScreen() {
  const {
    appearance,
    setAppearance,

    weekStartsOn,
    setWeekStartsOn,
  } = useSettings();

  return (
    <ScrollView
      style={GLOBAL_STYLES.screen}
    >
      <InfoCard
        title="Theme"
        value={appearance}
        onPress={() =>
          setAppearance(
            appearance === "dark"
              ? "light"
              : "dark"
          )
        }
      />

      <InfoCard
        title="Week Starts On"
        value={weekStartsOn}
        onPress={() =>
          setWeekStartsOn(
            weekStartsOn === "monday"
              ? "sunday"
              : "monday"
          )
        }
      />

      <InfoCard
        title="Version"
        value="1.0.0"
      />
    </ScrollView>
  );
}
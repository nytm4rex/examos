// screens/more/AppearanceScreen.js

import React from "react";

import {
  ScrollView,
} from "react-native";

import InfoCard from "../../components/cards/InfoCard";
import SectionHeader from "../../components/common/SectionHeader";

import { useSettings } from "../../context/SettingsContext";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function AppearanceScreen() {
  const {
    appearance,
    setAppearance,
  } = useSettings();

  return (
    <ScrollView
      style={GLOBAL_STYLES.screen}
    >
      <SectionHeader
        title="Current Theme"
      />

      <InfoCard
        title="Dark"
        value={
          appearance === "dark"
            ? "Selected"
            : ""
        }
        onPress={() =>
          setAppearance("dark")
        }
      />

      <InfoCard
        title="Light"
        value={
          appearance === "light"
            ? "Selected"
            : ""
        }
        onPress={() =>
          setAppearance("light")
        }
      />

      <SectionHeader
        title="Future Themes"
      />

      <InfoCard
        title="Physics Blue"
        subtitle="Coming Soon"
      />

      <InfoCard
        title="Organic Orange"
        subtitle="Coming Soon"
      />

      <InfoCard
        title="Biology Green"
        subtitle="Coming Soon"
      />
    </ScrollView>
  );
}
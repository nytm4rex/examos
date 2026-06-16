// screens/more/BerriInfoScreen.js

import React from "react";

import {
  ScrollView,
} from "react-native";

import InfoCard from "../../components/cards/InfoCard";
import SectionHeader from "../../components/common/SectionHeader";

import { useBerri } from "../../context/HomeContext";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function BerriInfoScreen() {
  const { berri } =
    useBerri();

  return (
    <ScrollView
      style={GLOBAL_STYLES.screen}
    >
      <InfoCard
        title="Current Berri"
        value={berri}
      />

      <SectionHeader
        title="How To Earn"
      />

      <InfoCard
        title="Complete Revision"
        value="+1"
      />

      <InfoCard
        title="Complete Lecture"
        value="+1"
      />

      <InfoCard
        title="Finish MCQ Session"
        value="+1"
      />

      <InfoCard
        title="Maintain Streak"
        value="Bonus"
      />

      <SectionHeader
        title="Purpose"
      />

      <InfoCard
        title="Spend Berri"
        subtitle="Purchase themes, cosmetics and future rewards."
      />
    </ScrollView>
  );
}
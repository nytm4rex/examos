// screens/more/BackupScreen.js

import React from "react";

import {
  ScrollView,
  Alert,
} from "react-native";

import InfoCard from "../../components/cards/InfoCard";

import {
  exportAppData,
} from "../../utils/exportUtils";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function BackupScreen() {
  const handleExport =
    async () => {
      try {
        await exportAppData();

        Alert.alert(
          "Success",
          "Backup exported."
        );
      } catch {
        Alert.alert(
          "Error",
          "Export failed."
        );
      }
    };

  return (
    <ScrollView
      style={GLOBAL_STYLES.screen}
    >
      <InfoCard
        title="Export Backup"
        value="Export"
        onPress={handleExport}
      />

      <InfoCard
        title="Last Export"
        value="-"
      />

      <InfoCard
        title="Backup Type"
        value="JSON"
      />
    </ScrollView>
  );
}
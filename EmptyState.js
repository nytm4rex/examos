// screens/more/MoreScreen.js

import React from "react";

import {
  ScrollView,
} from "react-native";

import {
  useNavigation,
} from "@react-navigation/native";

import InfoCard from "../../components/cards/InfoCard";

import {
  GLOBAL_STYLES,
} from "../../styles/globalStyles";

export default function MoreScreen() {
  const navigation =
    useNavigation();

  return (
    <ScrollView
      style={
        GLOBAL_STYLES.screen
      }
    >
      <InfoCard
        title="Shop"
        value="Open"
        onPress={() =>
          navigation.navigate(
            "Shop"
          )
        }
      />

      <InfoCard
        title="Berri"
        value="Open"
        onPress={() =>
          navigation.navigate(
            "BerriInfo"
          )
        }
      />

      <InfoCard
        title="Achievements"
        value="Open"
        onPress={() =>
          navigation.navigate(
            "Achievements"
          )
        }
      />

      <InfoCard
        title="Backup"
        value="Open"
        onPress={() =>
          navigation.navigate(
            "Backup"
          )
        }
      />

      <InfoCard
        title="Settings"
        value="Open"
        onPress={() =>
          navigation.navigate(
            "Settings"
          )
        }
      />
    </ScrollView>
  );
}
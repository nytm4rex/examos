// screens/more/AchievementsScreen.js

import React, {
  useMemo,
} from "react";

import {
  ScrollView,
} from "react-native";

import InfoCard from "../../components/cards/InfoCard";
import SectionHeader from "../../components/common/SectionHeader";

import { useHome } from "../../context/HomeContext";

import {
  ACHIEVEMENT_DEFINITIONS,
} from "../../data/achievementDefinitions";

import {
  getUnlockedAchievements,
} from "../../engines/achievementEngine";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function AchievementsScreen() {
  const {
    achievements,
  } = useHome();

  const unlockedIds =
    useMemo(
      () =>
        getUnlockedAchievements(
          achievements
        ),
      [achievements]
    );

  return (
    <ScrollView
      style={GLOBAL_STYLES.screen}
    >
      <SectionHeader
        title="Achievements"
      />

      {ACHIEVEMENT_DEFINITIONS.map(
        (
          achievement
        ) => {
          const unlocked =
            unlockedIds.includes(
              achievement.id
            );

          return (
            <InfoCard
              key={
                achievement.id
              }
              title={
                achievement.title
              }
              subtitle={
                achievement.description
              }
              value={
                unlocked
                  ? "Unlocked"
                  : "Locked"
              }
            />
          );
        }
      )}
    </ScrollView>
  );
}
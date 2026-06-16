// screens/mcq/MCQStreaksScreen.js

import React, {
  useMemo,
} from "react";

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
} from "react-native";

import InfoCard from "../../components/cards/InfoCard";
import WeeklyHeatmap from "../../components/calendar/WeeklyHeatmap";

import SectionHeader from "../../components/common/SectionHeader";

import { useMCQ } from "../../context/MCQContext";

import {
  calculateCurrentStreak,
  calculateLongestStreak,
} from "../../engines/streakEngine";

import {
  buildWeeklyHeatmapData,
} from "../../engines/calendarEngine";

import { COLORS } from "../../styles/colors";
import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function MCQStreaksScreen() {
  const {
    sessions,
  } = useMCQ();

  const currentStreak =
    useMemo(
      () =>
        calculateCurrentStreak(
          sessions
        ),
      [sessions]
    );

  const longestStreak =
    useMemo(
      () =>
        calculateLongestStreak(
          sessions
        ),
      [sessions]
    );

  const weekData =
    useMemo(
      () =>
        buildWeeklyHeatmapData(
          sessions
        ),
      [sessions]
    );

  return (
    <ScrollView
      style={
        GLOBAL_STYLES.screen
      }
    >
      <SectionHeader
        title="Streak"
      />

      <InfoCard
        title="Current Streak"
        value={`${currentStreak} Days`}
      />

      <InfoCard
        title="Longest Streak"
        value={`${longestStreak} Days`}
      />

      <SectionHeader
        title="Weekly Activity"
      />

      <WeeklyHeatmap
        weekData={weekData}
      />

      <SectionHeader
        title="Consistency"
      />

      <InfoCard
        title="Sessions Logged"
        value={sessions.length}
      />

      <View
        style={styles.messageBox}
      >
        <Text
          style={styles.message}
        >
          {
            currentStreak >= 30
              ? "Excellent consistency."
              : currentStreak >=
                14
              ? "Strong momentum."
              : currentStreak >=
                7
              ? "Keep the streak alive."
              : "Start building your streak today."
          }
        </Text>
      </View>
    </ScrollView>
  );
}

const styles =
  StyleSheet.create({
    messageBox: {
      marginTop: 20,

      padding: 16,

      borderRadius: 16,

      backgroundColor:
        COLORS.cardBackground,
    },

    message: {
      color: COLORS.white,

      textAlign: "center",

      fontWeight: "600",
    },
  });
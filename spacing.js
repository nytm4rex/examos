// components/cards/ReadinessCard.js

import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import ProgressBar from "../common/ProgressBar";

import { COLORS } from "../../styles/colors";
import { SPACING } from "../../styles/spacing";
import { TYPOGRAPHY } from "../../styles/typography";

export default function ReadinessCard({
  chapterName,

  readinessScore = 0,

  priorityRank,

  reason,
}) {
  const scoreColor =
    readinessScore >= 80
      ? COLORS.progressGreen
      : readinessScore >= 50
      ? COLORS.warningYellow
      : COLORS.dangerRed;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {chapterName}
        </Text>

        <Text
          style={styles.rank}
        >
          #{priorityRank}
        </Text>
      </View>

      <Text
        style={[
          styles.score,
          {
            color: scoreColor,
          },
        ]}
      >
        {readinessScore}/100
      </Text>

      <ProgressBar
        completed={
          readinessScore
        }
        total={100}
        color={scoreColor}
      />

      {reason ? (
        <Text
          style={styles.reason}
        >
          {reason}
        </Text>
      ) : null}
    </View>
  );
}

const styles =
  StyleSheet.create({
    container: {
      backgroundColor:
        COLORS.cardBackground,

      borderRadius: 18,

      padding:
        SPACING.lg,

      marginBottom:
        SPACING.md,
    },

    header: {
      flexDirection: "row",

      justifyContent:
        "space-between",
    },

    title: {
      color: COLORS.white,

      flex: 1,

      fontSize:
        TYPOGRAPHY.body,

      fontWeight: "700",
    },

    rank: {
      color:
        COLORS.secondaryText,
    },

    score: {
      marginTop: 10,

      marginBottom: 10,

      fontSize: 20,

      fontWeight: "700",
    },

    reason: {
      color:
        COLORS.secondaryText,

      marginTop: 10,
    },
  });
// components/cards/TestCard.js

import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { COLORS } from "../../styles/colors";
import { SPACING } from "../../styles/spacing";
import { TYPOGRAPHY } from "../../styles/typography";

export default function TestCard({
  testType,
  testNumber,

  testDate,

  daysLeft,

  chapterSummary,

  chaptersStarted,

  totalChapters,

  score,

  scoreChange,

  analysisDone = false,

  isFinished = false,

  crunchMode = false,

  onCrunchPress,

  onAnalysisPress,

  onPress,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,

        crunchMode &&
          styles.crunchContainer,
      ]}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.header}>
        <Text style={styles.title}>
          {testType} {testNumber}
        </Text>

        {isFinished ? (
          <TouchableOpacity
            onPress={onAnalysisPress}
          >
            <Ionicons
              name="analytics"
              size={22}
              color={
                analysisDone
                  ? COLORS.progressGreen
                  : COLORS.darkGrey
              }
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={onCrunchPress}
          >
            <Ionicons
              name="flame"
              size={22}
              color={
                crunchMode
                  ? COLORS.crunchOrange
                  : COLORS.darkGrey
              }
            />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.date}>
        {testDate}

        {!isFinished &&
          daysLeft !== undefined &&
          ` (${daysLeft}d)`}
      </Text>

      {!!chapterSummary && (
        <Text style={styles.info}>
          {chapterSummary}
        </Text>
      )}

      {!isFinished &&
        chaptersStarted !==
          undefined &&
        totalChapters !==
          undefined && (
          <Text
            style={styles.info}
          >
            {chaptersStarted}/
            {totalChapters}
            {" "}
            Chapters Started
          </Text>
        )}

      {isFinished &&
        score !== undefined && (
          <View
            style={styles.scoreRow}
          >
            <Text
              style={styles.score}
            >
              {score}
            </Text>

            {scoreChange !==
              undefined && (
              <Ionicons
                name={
                  scoreChange >= 0
                    ? "arrow-up"
                    : "arrow-down"
                }
                size={18}
                color={
                  scoreChange >= 0
                    ? COLORS.progressGreen
                    : COLORS.dangerRed
                }
              />
            )}
          </View>
        )}
    </TouchableOpacity>
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

    crunchContainer: {
      backgroundColor:
        "#FFECBD",
    },

    header: {
      flexDirection: "row",

      justifyContent:
        "space-between",

      alignItems: "center",
    },

    title: {
      color: COLORS.white,

      fontSize:
        TYPOGRAPHY.h3,

      fontWeight: "700",
    },

    date: {
      color:
        COLORS.secondaryText,

      marginTop: 8,
    },

    info: {
      color: COLORS.white,

      marginTop: 8,
    },

    scoreRow: {
      flexDirection: "row",

      alignItems: "center",

      marginTop: 12,
    },

    score: {
      color: COLORS.white,

      fontSize: 22,

      fontWeight: "700",

      marginRight: 8,
    },
  });
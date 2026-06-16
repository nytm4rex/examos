// components/cards/MCQReferenceCard.js

import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import StatusBadge from "../common/StatusBadge";

import { COLORS } from "../../styles/colors";
import { SPACING } from "../../styles/spacing";
import { TYPOGRAPHY } from "../../styles/typography";

export default function MCQReferenceCard({
  referenceName,

  solved = 0,
  total = 0,

  attemptNumber = 1,

  completedAttempt = false,

  lastAttemptLabel = "-",
  lastAttemptType = "neutral",

  onSaveSession,
  onIncrementAttempt,

  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.header}>
        <Text style={styles.title}>
          {referenceName}
        </Text>

        <View
          style={[
            styles.attemptChip,

            {
              backgroundColor:
                completedAttempt
                  ? COLORS.progressGreen
                  : COLORS.darkGrey,
            },
          ]}
        >
          <Text
            style={styles.attemptText}
          >
            {attemptNumber}x
          </Text>
        </View>
      </View>

      <View style={styles.middleRow}>
        <Text style={styles.progress}>
          {solved}/{total} MCQs
        </Text>

        <StatusBadge
          label={lastAttemptLabel}
          type={lastAttemptType}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={onSaveSession}
        >
          <Text
            style={styles.saveText}
          >
            Save
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.repeatButton}
          onPress={
            onIncrementAttempt
          }
        >
          <Ionicons
            name="refresh"
            size={20}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>
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

    header: {
      flexDirection: "row",

      justifyContent:
        "space-between",

      alignItems: "center",
    },

    title: {
      flex: 1,

      color: COLORS.white,

      fontWeight: "700",

      fontSize:
        TYPOGRAPHY.h3,

      marginRight: 10,
    },

    attemptChip: {
      paddingHorizontal: 12,

      paddingVertical: 5,

      borderRadius: 10,
    },

    attemptText: {
      color: COLORS.white,

      fontWeight: "700",
    },

    middleRow: {
      flexDirection: "row",

      justifyContent:
        "space-between",

      alignItems: "center",

      marginTop: 16,
    },

    progress: {
      color: COLORS.white,

      fontWeight: "600",
    },

    footer: {
      flexDirection: "row",

      justifyContent:
        "flex-end",

      marginTop: 18,
    },

    saveButton: {
      backgroundColor:
        COLORS.lightBlue,

      borderRadius: 12,

      paddingHorizontal: 16,

      paddingVertical: 10,
    },

    saveText: {
      color: COLORS.white,

      fontWeight: "700",
    },

    repeatButton: {
      width: 42,

      height: 42,

      borderRadius: 21,

      backgroundColor:
        COLORS.darkGrey,

      justifyContent:
        "center",

      alignItems: "center",

      marginLeft: 10,
    },
  });
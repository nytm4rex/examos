// components/cards/SubjectCard.js

import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import ProgressBar from "../common/ProgressBar";

import { COLORS } from "../../styles/colors";
import { SPACING } from "../../styles/spacing";
import { TYPOGRAPHY } from "../../styles/typography";

export default function SubjectCard({
  subjectName,

  icon,

  completed = 0,

  total = 0,

  progressLabel = "Progress",

  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={styles.topRow}>
        {icon ? (
          <Image
            source={icon}
            style={styles.icon}
          />
        ) : (
          <View
            style={styles.placeholderIcon}
          />
        )}

        <View style={styles.info}>
          <Text style={styles.name}>
            {subjectName}
          </Text>

          <Text style={styles.subtitle}>
            {completed}/{total}{" "}
            {progressLabel}
          </Text>
        </View>
      </View>

      <ProgressBar
        completed={completed}
        total={total}
        showLabel={false}
      />
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

    topRow: {
      flexDirection: "row",

      alignItems: "center",

      marginBottom:
        SPACING.md,
    },

    icon: {
      width: 52,
      height: 52,

      resizeMode:
        "contain",
    },

    placeholderIcon: {
      width: 52,
      height: 52,

      borderRadius: 26,

      backgroundColor:
        COLORS.darkGrey,
    },

    info: {
      flex: 1,

      marginLeft:
        SPACING.md,
    },

    name: {
      color: COLORS.white,

      fontSize:
        TYPOGRAPHY.h3,

      fontWeight: "700",
    },

    subtitle: {
      color:
        COLORS.secondaryText,

      marginTop: 4,

      fontSize:
        TYPOGRAPHY.body,
    },
  });
// components/cards/RevisionCard.js

import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import Badge from "../common/Badge";
import StatusBadge from "../common/StatusBadge";

import { COLORS } from "../../styles/colors";
import { SPACING } from "../../styles/spacing";
import { TYPOGRAPHY } from "../../styles/typography";

export default function RevisionCard({
  topicName,

  tags = [],

  revisionLabel = "Rev 0",

  revisionCompleted = 0,

  revisionTotal = 0,

  lastRevisionLabel = "-",

  lastRevisionType = "neutral",

  scheduled = false,

  onPlayPress,

  onPress,

  showPlayButton = true,
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.header}>
        <Text style={styles.title}>
          {topicName}
        </Text>

        <Badge
          label={revisionLabel}
          backgroundColor={
            revisionCompleted >= 4
              ? COLORS.progressGreen
              : COLORS.darkGrey
          }
        />
      </View>

      {!!tags.length && (
        <View style={styles.tagsRow}>
          {tags.map((tag) => (
            <Badge
              key={tag}
              label={tag}
              small
            />
          ))}
        </View>
      )}

      <View style={styles.middleRow}>
        <StatusBadge
          label={lastRevisionLabel}
          type={lastRevisionType}
        />

        <Text style={styles.countText}>
          {revisionCompleted}/
          {revisionTotal}
        </Text>
      </View>

      <View style={styles.footer}>
        {showPlayButton && (
          <TouchableOpacity
            style={[
              styles.playButton,
              scheduled &&
                styles.activePlayButton,
            ]}
            onPress={onPlayPress}
          >
            <Ionicons
              name="play"
              size={18}
              color={COLORS.white}
            />
          </TouchableOpacity>
        )}
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

      marginRight: 12,
    },

    tagsRow: {
      flexDirection: "row",

      flexWrap: "wrap",

      marginTop: 10,
    },

    middleRow: {
      flexDirection: "row",

      justifyContent:
        "space-between",

      alignItems: "center",

      marginTop: 14,
    },

    countText: {
      color: COLORS.white,

      fontWeight: "600",
    },

    footer: {
      alignItems: "flex-end",

      marginTop: 16,
    },

    playButton: {
      width: 42,

      height: 42,

      borderRadius: 21,

      backgroundColor:
        COLORS.darkGrey,

      justifyContent:
        "center",

      alignItems: "center",
    },

    activePlayButton: {
      backgroundColor:
        "#9A9A9A",
    },
  });
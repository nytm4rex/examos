// components/cards/ChapterCard.js

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
import ProgressBar from "../common/ProgressBar";

import { COLORS } from "../../styles/colors";
import { SPACING } from "../../styles/spacing";
import { TYPOGRAPHY } from "../../styles/typography";

export default function ChapterCard({
  chapterName,

  tags = [],

  completed = 0,
  total = 0,

  progressLabel,

  statusLabel,
  statusType = "neutral",

  shortNotesStatus = null,

  lectureEnabled = false,
  onLecturePress,

  bookmarkCount = null,

  onPress,
}) {
  const getShortNotesColor =
    () => {
      switch (
        shortNotesStatus
      ) {
        case "completed":
          return COLORS.progressGreen;

        case "ongoing":
          return COLORS.warningYellow;

        default:
          return COLORS.darkGrey;
      }
    };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.85}
      onPress={onPress}
    >
      {/* Header */}

      <View style={styles.header}>
        <View
          style={styles.titleRow}
        >
          {shortNotesStatus !==
            null && (
            <View
              style={[
                styles.shortNotesDot,
                {
                  backgroundColor:
                    getShortNotesColor(),
                },
              ]}
            />
          )}

          <Text
            style={styles.title}
          >
            {chapterName}
          </Text>
        </View>

        {statusLabel && (
          <StatusBadge
            type={statusType}
            label={statusLabel}
          />
        )}
      </View>

      {/* Tags */}

      {!!tags.length && (
        <View style={styles.tags}>
          {tags.map((tag) => (
            <Badge
              key={tag}
              label={tag}
              small
            />
          ))}
        </View>
      )}

      {/* Numbers */}

      <View
        style={styles.progressRow}
      >
        <Text
          style={
            styles.progressText
          }
        >
          {completed}/{total}
          {progressLabel
            ? ` ${progressLabel}`
            : ""}
        </Text>
      </View>

      {/* Bar */}

      <ProgressBar
        completed={completed}
        total={total}
      />

      {/* Footer */}

      <View style={styles.footer}>
        {lectureEnabled ? (
          <TouchableOpacity
            style={
              styles.lectureButton
            }
            onPress={
              onLecturePress
            }
          >
            <Text
              style={
                styles.lectureText
              }
            >
              Lect
            </Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}

        {bookmarkCount !==
          null && (
          <View
            style={
              styles.bookmarkRow
            }
          >
            <Ionicons
              name="bookmark"
              size={18}
              color={
                COLORS.lightBlue
              }
            />

            <Text
              style={
                styles.bookmarkText
              }
            >
              {bookmarkCount}
            </Text>
          </View>
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

    titleRow: {
      flexDirection: "row",

      alignItems: "center",

      flex: 1,
    },

    shortNotesDot: {
      width: 10,
      height: 10,

      borderRadius: 5,

      marginRight: 10,
    },

    title: {
      flex: 1,

      color: COLORS.white,

      fontSize:
        TYPOGRAPHY.h3,

      fontWeight: "700",
    },

    tags: {
      flexDirection: "row",

      flexWrap: "wrap",

      marginTop: 12,
    },

    progressRow: {
      marginTop: 12,
      marginBottom: 8,
    },

    progressText: {
      color: COLORS.white,

      fontWeight: "600",
    },

    footer: {
      flexDirection: "row",

      justifyContent:
        "space-between",

      alignItems: "center",

      marginTop:
        SPACING.md,
    },

    lectureButton: {
      backgroundColor:
        COLORS.lightBlue,

      paddingHorizontal: 14,

      paddingVertical: 6,

      borderRadius: 10,
    },

    lectureText: {
      color: COLORS.white,

      fontWeight: "700",
    },

    bookmarkRow: {
      flexDirection: "row",

      alignItems: "center",
    },

    bookmarkText: {
      color: COLORS.white,

      marginLeft: 6,

      fontWeight: "700",
    },
  });
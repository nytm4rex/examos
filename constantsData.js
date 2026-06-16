// components/cards/LectureCard.js

import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import Badge from "../common/Badge";

import { COLORS } from "../../styles/colors";
import { SPACING } from "../../styles/spacing";
import { TYPOGRAPHY } from "../../styles/typography";

export default function LectureCard({
  lectureName,

  duration,

  actualTime,

  tag,

  status = "idle",

  onPlay,

  onPause,

  onResume,

  onComplete,

  onPress,
}) {
  const showActualTime =
    actualTime &&
    actualTime !== "0:00";

  const overTime =
    false;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <Text style={styles.title}>
        {lectureName}
      </Text>

      <View style={styles.row}>
        <Text style={styles.label}>
          Length
        </Text>

        <Text style={styles.value}>
          {duration}
        </Text>
      </View>

      {showActualTime && (
        <View style={styles.row}>
          <Text
            style={styles.label}
          >
            Actual
          </Text>

          <View
            style={[
              styles.actualTimeChip,

              {
                backgroundColor:
                  overTime
                    ? COLORS.dangerRed
                    : COLORS.progressGreen,
              },
            ]}
          >
            <Text
              style={
                styles.actualTimeText
              }
            >
              {actualTime}
            </Text>
          </View>
        </View>
      )}

      {tag ? (
        <View
          style={styles.tagRow}
        >
          <Badge
            label={tag}
          />
        </View>
      ) : null}

      <View style={styles.actions}>
        {status === "idle" && (
          <TouchableOpacity
            style={
              styles.actionButton
            }
            onPress={onPlay}
          >
            <Ionicons
              name="play"
              size={20}
              color={
                COLORS.white
              }
            />
          </TouchableOpacity>
        )}

        {status ===
          "playing" && (
          <>
            <TouchableOpacity
              style={
                styles.actionButton
              }
              onPress={onPause}
            >
              <Ionicons
                name="pause"
                size={20}
                color={
                  COLORS.white
                }
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={
                styles.completeButton
              }
              onPress={
                onComplete
              }
            >
              <Text
                style={
                  styles.completeText
                }
              >
                Complete
              </Text>
            </TouchableOpacity>
          </>
        )}

        {status ===
          "paused" && (
          <>
            <TouchableOpacity
              style={
                styles.actionButton
              }
              onPress={
                onResume
              }
            >
              <Ionicons
                name="play"
                size={20}
                color={
                  COLORS.white
                }
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={
                styles.completeButton
              }
              onPress={
                onComplete
              }
            >
              <Text
                style={
                  styles.completeText
                }
              >
                Complete
              </Text>
            </TouchableOpacity>
          </>
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

    title: {
      color: COLORS.white,

      fontWeight: "700",

      fontSize:
        TYPOGRAPHY.h3,

      marginBottom: 12,
    },

    row: {
      flexDirection: "row",

      justifyContent:
        "space-between",

      alignItems: "center",

      marginBottom: 8,
    },

    label: {
      color:
        COLORS.secondaryText,
    },

    value: {
      color: COLORS.white,

      fontWeight: "600",
    },

    tagRow: {
      marginTop: 8,
    },

    actions: {
      flexDirection: "row",

      justifyContent:
        "flex-end",

      marginTop: 18,
    },

    actionButton: {
      width: 42,

      height: 42,

      borderRadius: 21,

      backgroundColor:
        COLORS.lightBlue,

      justifyContent:
        "center",

      alignItems: "center",
    },

    completeButton: {
      backgroundColor:
        COLORS.progressGreen,

      borderRadius: 12,

      justifyContent:
        "center",

      paddingHorizontal: 16,

      marginLeft: 10,
    },

    completeText: {
      color: COLORS.white,

      fontWeight: "700",
    },

    actualTimeChip: {
      paddingHorizontal: 10,

      paddingVertical: 4,

      borderRadius: 8,
    },

    actualTimeText: {
      color: COLORS.white,

      fontWeight: "700",
    },
  });
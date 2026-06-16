// components/calendar/WeeklyHeatmap.js

import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { COLORS } from "../../styles/colors";
import { SPACING } from "../../styles/spacing";

export default function WeeklyHeatmap({
  weekData = [],
}) {
  const getColor =
    (count) => {
      if (count >= 250)
        return COLORS.heatmap250;

      if (count >= 200)
        return COLORS.heatmap200;

      if (count >= 150)
        return COLORS.heatmap150;

      if (count >= 100)
        return COLORS.heatmap100;

      if (count >= 50)
        return COLORS.heatmap50;

      return COLORS.cardBackground;
    };

  const maxCount =
    Math.max(
      ...weekData.map(
        (d) => d.count
      ),
      1
    );

  return (
    <View style={styles.container}>
      {weekData.map((day) => (
        <View
          key={day.day}
          style={styles.row}
        >
          <Text
            style={styles.day}
          >
            {day.day}
          </Text>

          <View
            style={
              styles.barContainer
            }
          >
            <View
              style={[
                styles.bar,
                {
                  width: `${
                    (day.count /
                      maxCount) *
                    100
                  }%`,

                  backgroundColor:
                    getColor(
                      day.count
                    ),
                },
              ]}
            />
          </View>

          <Text
            style={
              styles.count
            }
          >
            {day.count}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles =
  StyleSheet.create({
    container: {
      marginTop:
        SPACING.md,
    },

    row: {
      flexDirection: "row",

      alignItems:
        "center",

      marginBottom: 10,
    },

    day: {
      width: 40,

      color: COLORS.white,

      fontWeight: "600",
    },

    barContainer: {
      flex: 1,

      height: 16,

      backgroundColor:
        COLORS.cardBackground,

      borderRadius: 8,

      overflow: "hidden",

      marginHorizontal: 10,
    },

    bar: {
      height: "100%",
    },

    count: {
      width: 50,

      textAlign: "right",

      color: COLORS.white,

      fontWeight: "600",
    },
  });
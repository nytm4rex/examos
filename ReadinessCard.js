// components/calendar/MCQHeatmapCalendar.js

import React from "react";

import {
  View,
  StyleSheet,
} from "react-native";

import { COLORS } from "../../styles/colors";
import { SPACING } from "../../styles/spacing";

export default function MCQHeatmapCalendar({
  data = [],
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

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {data.map((day) => (
          <View
            key={day.date}
            style={[
              styles.cell,
              {
                backgroundColor:
                  getColor(
                    day.count
                  ),
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles =
  StyleSheet.create({
    container: {
      marginTop:
        SPACING.md,
    },

    grid: {
      flexDirection: "row",

      flexWrap: "wrap",
    },

    cell: {
      width: 14,

      height: 14,

      borderRadius: 3,

      margin: 2,
    },
  });
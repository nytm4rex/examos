// components/calendar/TimelineCalendar.js

import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { COLORS } from "../../styles/colors";
import { SPACING } from "../../styles/spacing";

export default function TimelineCalendar({
  events = [],
}) {
  return (
    <View style={styles.container}>
      {events.map(
        (event, index) => {
          const isLast =
            index ===
            events.length - 1;

          return (
            <View
              key={`${event.id}_${index}`}
              style={styles.row}
            >
              <View
                style={
                  styles.timelineContainer
                }
              >
                <View
                  style={[
                    styles.dot,
                    {
                      backgroundColor:
                        event.color ||
                        COLORS.lightBlue,
                    },
                  ]}
                />

                {!isLast && (
                  <View
                    style={
                      styles.line
                    }
                  />
                )}
              </View>

              <View
                style={
                  styles.content
                }
              >
                <Text
                  style={
                    styles.title
                  }
                >
                  {event.title}
                </Text>

                <Text
                  style={
                    styles.date
                  }
                >
                  {event.date}
                </Text>
              </View>
            </View>
          );
        }
      )}
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
    },

    timelineContainer: {
      width: 32,

      alignItems:
        "center",
    },

    dot: {
      width: 14,
      height: 14,

      borderRadius: 7,
    },

    line: {
      width: 2,

      flex: 1,

      marginTop: 4,

      backgroundColor:
        COLORS.darkGrey,
    },

    content: {
      flex: 1,

      paddingBottom: 24,
    },

    title: {
      color: COLORS.white,

      fontWeight: "600",

      fontSize: 15,
    },

    date: {
      color:
        COLORS.secondaryText,

      marginTop: 4,

      fontSize: 12,
    },
  });
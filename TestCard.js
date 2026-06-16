// components/calendar/RevisionGrid.js

import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { COLORS } from "../../styles/colors";
import { SPACING } from "../../styles/spacing";

export default function RevisionGrid({
  topics = [],
}) {
  const getColor =
    (quality) => {
      switch (
        quality
      ) {
        case "good":
          return COLORS.goodRecall;

        case "okay":
          return COLORS.warningYellow;

        default:
          return COLORS.darkGrey;
      }
    };

  return (
    <View style={styles.container}>
      <View
        style={styles.header}
      >
        <Text
          style={
            styles.topicHeader
          }
        >
          Topic
        </Text>

        <Text
          style={
            styles.revHeader
          }
        >
          R1
        </Text>

        <Text
          style={
            styles.revHeader
          }
        >
          R2
        </Text>

        <Text
          style={
            styles.revHeader
          }
        >
          R3
        </Text>

        <Text
          style={
            styles.revHeader
          }
        >
          R4
        </Text>
      </View>

      {topics.map(
        (topic) => (
          <View
            key={topic.id}
            style={styles.row}
          >
            <Text
              style={
                styles.topicName
              }
              numberOfLines={1}
            >
              {topic.name}
            </Text>

            {[1, 2, 3, 4].map(
              (rev) => {
                const revision =
                  topic.revisions?.find(
                    (r) =>
                      r.revisionNumber ===
                      rev
                  );

                return (
                  <View
                    key={rev}
                    style={[
                      styles.cell,
                      {
                        backgroundColor:
                          getColor(
                            revision?.quality
                          ),
                      },
                    ]}
                  />
                );
              }
            )}
          </View>
        )
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

    header: {
      flexDirection: "row",

      marginBottom: 12,
    },

    topicHeader: {
      flex: 1,

      color: COLORS.white,

      fontWeight: "700",
    },

    revHeader: {
      width: 36,

      textAlign:
        "center",

      color: COLORS.white,

      fontWeight: "700",
    },

    row: {
      flexDirection: "row",

      alignItems:
        "center",

      marginBottom: 10,
    },

    topicName: {
      flex: 1,

      color: COLORS.white,

      marginRight: 8,
    },

    cell: {
      width: 24,

      height: 24,

      borderRadius: 6,

      marginHorizontal: 6,
    },
  });
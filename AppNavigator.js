// components/cards/InfoCard.js

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

export default function InfoCard({
  title,
  value,
  subtitle,

  icon,

  onPress,
}) {
  const Wrapper =
    onPress
      ? TouchableOpacity
      : View;

  return (
    <Wrapper
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>
            {title}
          </Text>

          {subtitle && (
            <Text
              style={
                styles.subtitle
              }
            >
              {subtitle}
            </Text>
          )}
        </View>

        <View
          style={styles.right}
        >
          <Text
            style={styles.value}
          >
            {value}
          </Text>

          {icon && (
            <Ionicons
              name={icon}
              size={18}
              color={
                COLORS.white
              }
            />
          )}
        </View>
      </View>
    </Wrapper>
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

    row: {
      flexDirection: "row",

      justifyContent:
        "space-between",

      alignItems: "center",
    },

    title: {
      color: COLORS.white,

      fontSize:
        TYPOGRAPHY.body,

      fontWeight: "600",
    },

    subtitle: {
      color:
        COLORS.secondaryText,

      marginTop: 4,
    },

    right: {
      flexDirection: "row",

      alignItems: "center",
    },

    value: {
      color: COLORS.white,

      fontWeight: "700",

      marginRight: 6,
    },
  });
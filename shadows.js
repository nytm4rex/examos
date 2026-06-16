// components/modals/RecallQualityModal.js

import React from "react";

import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { COLORS } from "../../styles/colors";
import { SPACING } from "../../styles/spacing";
import { TYPOGRAPHY } from "../../styles/typography";

export default function RecallQualityModal({
  visible,

  onGood,

  onOkay,

  onClose,
}) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View
          style={styles.container}
        >
          <Text
            style={styles.title}
          >
            Recall Quality
          </Text>

          <Text
            style={styles.subtitle}
          >
            How well did you
            remember it?
          </Text>

          <TouchableOpacity
            style={[
              styles.option,
              {
                backgroundColor:
                  COLORS.goodRecall,
              },
            ]}
            onPress={onGood}
          >
            <Text
              style={styles.optionText}
            >
              🟢 Good Recall
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.option,
              {
                backgroundColor:
                  COLORS.warningYellow,
              },
            ]}
            onPress={onOkay}
          >
            <Text
              style={[
                styles.optionText,
                {
                  color:
                    COLORS.background,
                },
              ]}
            >
              🟡 Okay Recall
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onClose}
          >
            <Text
              style={styles.cancel}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles =
  StyleSheet.create({
    overlay: {
      flex: 1,

      backgroundColor:
        "rgba(0,0,0,0.75)",

      justifyContent:
        "center",

      alignItems: "center",

      padding: SPACING.lg,
    },

    container: {
      width: "100%",

      backgroundColor:
        COLORS.cardBackground,

      borderRadius: 20,

      padding: SPACING.lg,
    },

    title: {
      color: COLORS.white,

      fontSize:
        TYPOGRAPHY.h3,

      fontWeight: "700",

      textAlign: "center",
    },

    subtitle: {
      color:
        COLORS.secondaryText,

      textAlign: "center",

      marginTop: 8,

      marginBottom: 20,
    },

    option: {
      borderRadius: 14,

      paddingVertical: 16,

      alignItems: "center",

      marginBottom: 12,
    },

    optionText: {
      color: COLORS.white,

      fontWeight: "700",

      fontSize: 16,
    },

    cancel: {
      textAlign: "center",

      color:
        COLORS.secondaryText,

      marginTop: 8,
    },
  });
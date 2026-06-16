// components/modals/MCQSessionModal.js

import React, {
  useState,
  useEffect,
} from "react";

import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { COLORS } from "../../styles/colors";
import { SPACING } from "../../styles/spacing";
import { TYPOGRAPHY } from "../../styles/typography";

export default function MCQSessionModal({
  visible,

  maxMCQs = 0,

  onSave,

  onClose,
}) {
  const [from, setFrom] =
    useState("");

  const [to, setTo] =
    useState("");

  useEffect(() => {
    if (visible) {
      setFrom("");
      setTo("");
    }
  }, [visible]);

  const handleSave = () => {
    const start =
      Number(from);

    const end =
      Number(to);

    if (
      !start ||
      !end ||
      start > end
    ) {
      return;
    }

    onSave({
      from: start,
      to: end,
    });
  };

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
            Save MCQ Session
          </Text>

          <Text
            style={styles.subtitle}
          >
            Enter solved range
          </Text>

          <TextInput
            style={styles.input}
            value={from}
            onChangeText={setFrom}
            placeholder="From"
            keyboardType="numeric"
            placeholderTextColor={
              COLORS.secondaryText
            }
          />

          <TextInput
            style={styles.input}
            value={to}
            onChangeText={setTo}
            placeholder="To"
            keyboardType="numeric"
            placeholderTextColor={
              COLORS.secondaryText
            }
          />

          <Text
            style={styles.maxText}
          >
            Total MCQs: {maxMCQs}
          </Text>

          <View
            style={styles.footer}
          >
            <TouchableOpacity
              onPress={onClose}
            >
              <Text
                style={
                  styles.cancelText
                }
              >
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                styles.saveButton
              }
              onPress={handleSave}
            >
              <Text
                style={
                  styles.saveText
                }
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
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
    },

    subtitle: {
      color:
        COLORS.secondaryText,

      marginTop: 4,

      marginBottom: 16,
    },

    input: {
      backgroundColor:
        COLORS.background,

      color: COLORS.white,

      borderRadius: 12,

      padding: 12,

      marginBottom: 12,
    },

    maxText: {
      color:
        COLORS.secondaryText,

      marginBottom: 20,
    },

    footer: {
      flexDirection: "row",

      justifyContent:
        "space-between",

      alignItems: "center",
    },

    cancelText: {
      color:
        COLORS.secondaryText,
    },

    saveButton: {
      backgroundColor:
        COLORS.lightBlue,

      borderRadius: 12,

      paddingHorizontal: 18,

      paddingVertical: 10,
    },

    saveText: {
      color: COLORS.white,

      fontWeight: "700",
    },
  });
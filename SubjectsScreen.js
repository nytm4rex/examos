// styles/globalStyles.js

import { StyleSheet } from "react-native";

import COLORS from "./colors";

import {
  SPACING,
  SCREEN_PADDING,
  CARD_PADDING,
  RADIUS,
} from "./spacing";

import {
  FONT_SIZE,
  FONT_WEIGHT,
} from "./typography";

export const globalStyles = StyleSheet.create({
  /* =========================================
     SCREENS
  ========================================= */

  screen: {
    flex: 1,

    backgroundColor: COLORS.background,

    paddingHorizontal: SCREEN_PADDING.horizontal,

    paddingVertical: SCREEN_PADDING.vertical,
  },

  centeredScreen: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    backgroundColor: COLORS.background,
  },

  /* =========================================
     TEXT
  ========================================= */

  screenTitle: {
    color: COLORS.textPrimary,

    fontSize: FONT_SIZE.title,

    fontWeight: FONT_WEIGHT.bold,

    marginBottom: SPACING.xl,
  },

  sectionTitle: {
    color: COLORS.textPrimary,

    fontSize: FONT_SIZE.xl,

    fontWeight: FONT_WEIGHT.semiBold,
  },

  primaryText: {
    color: COLORS.textPrimary,

    fontSize: FONT_SIZE.md,
  },

  secondaryText: {
    color: COLORS.textSecondary,

    fontSize: FONT_SIZE.sm,
  },

  /* =========================================
     CARDS
  ========================================= */

  card: {
    backgroundColor: COLORS.card,

    borderRadius: RADIUS.lg,

    paddingHorizontal: CARD_PADDING.horizontal,

    paddingVertical: CARD_PADDING.vertical,

    marginBottom: SPACING.md,
  },

  borderedCard: {
    backgroundColor: COLORS.card,

    borderRadius: RADIUS.lg,

    borderWidth: 1,

    borderColor: COLORS.border,

    paddingHorizontal: CARD_PADDING.horizontal,

    paddingVertical: CARD_PADDING.vertical,
  },

  /* =========================================
     ROWS
  ========================================= */

  row: {
    flexDirection: "row",

    alignItems: "center",
  },

  rowBetween: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",
  },

  rowAround: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-around",
  },

  /* =========================================
     CENTERING
  ========================================= */

  center: {
    justifyContent: "center",

    alignItems: "center",
  },

  /* =========================================
     INPUTS
  ========================================= */

  input: {
    backgroundColor: COLORS.card,

    color: COLORS.textPrimary,

    borderRadius: RADIUS.md,

    paddingHorizontal: SPACING.lg,

    paddingVertical: SPACING.md,

    marginBottom: SPACING.md,
  },

  /* =========================================
     BUTTONS
  ========================================= */

  button: {
    backgroundColor: COLORS.lightBlue,

    borderRadius: RADIUS.md,

    paddingVertical: SPACING.md,

    alignItems: "center",

    justifyContent: "center",
  },

  buttonText: {
    color: COLORS.textPrimary,

    fontSize: FONT_SIZE.md,

    fontWeight: FONT_WEIGHT.semiBold,
  },

  /* =========================================
     SEPARATORS
  ========================================= */

  divider: {
    height: 1,

    backgroundColor: COLORS.divider,

    marginVertical: SPACING.md,
  },

  /* =========================================
     MARGINS
  ========================================= */

  mbXs: {
    marginBottom: SPACING.xs,
  },

  mbSm: {
    marginBottom: SPACING.sm,
  },

  mbMd: {
    marginBottom: SPACING.md,
  },

  mbLg: {
    marginBottom: SPACING.lg,
  },

  mbXl: {
    marginBottom: SPACING.xl,
  },

  mtXs: {
    marginTop: SPACING.xs,
  },

  mtSm: {
    marginTop: SPACING.sm,
  },

  mtMd: {
    marginTop: SPACING.md,
  },

  mtLg: {
    marginTop: SPACING.lg,
  },

  mtXl: {
    marginTop: SPACING.xl,
  },
});

export default globalStyles;
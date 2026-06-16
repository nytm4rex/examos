// styles/typography.js

export const FONT_SIZE = {
  xs: 10,

  sm: 12,

  md: 14,

  lg: 16,

  xl: 18,

  xxl: 22,

  title: 26,

  hero: 32,
};

export const FONT_WEIGHT = {
  light: "300",

  regular: "400",

  medium: "500",

  semiBold: "600",

  bold: "700",

  extraBold: "800",
};

export const LINE_HEIGHT = {
  sm: 16,

  md: 20,

  lg: 24,

  xl: 28,

  xxl: 32,
};

export const TYPOGRAPHY = {
  screenTitle: {
    fontSize: FONT_SIZE.title,
    fontWeight: FONT_WEIGHT.bold,
  },

  sectionTitle: {
    fontSize: FONT_SIZE.xl,
    fontWeight: FONT_WEIGHT.semiBold,
  },

  cardTitle: {
    fontSize: FONT_SIZE.lg,
    fontWeight: FONT_WEIGHT.semiBold,
  },

  body: {
    fontSize: FONT_SIZE.md,
    fontWeight: FONT_WEIGHT.regular,
  },

  caption: {
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.regular,
  },

  chip: {
    fontSize: FONT_SIZE.xs,
    fontWeight: FONT_WEIGHT.medium,
  },

  stats: {
    fontSize: FONT_SIZE.xxl,
    fontWeight: FONT_WEIGHT.bold,
  },
};

export default TYPOGRAPHY;
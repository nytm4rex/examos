// data/constantsData.js

/* =========================================
   SUBJECTS
========================================= */

export const SUBJECTS = [
  {
    id: "physics",
    name: "Physics",
    shortName: "P",
    icon: "physics",
    color: "#007DD9",
  },

  {
    id: "pc",
    name: "Physical Chemistry",
    shortName: "PC",
    icon: "physical_chem",
    color: "#B3B3B3",
  },

  {
    id: "ioc",
    name: "Inorganic Chemistry",
    shortName: "IOC",
    icon: "inorganic_chem",
    color: "#6800B8",
  },

  {
    id: "oc",
    name: "Organic Chemistry",
    shortName: "OC",
    icon: "organic_chem",
    color: "#FF5E29",
  },

  {
    id: "biology",
    name: "Biology",
    shortName: "B",
    icon: "biology",
    color: "#43922B",
  },
];

/* =========================================
   REVISION DEFAULTS
========================================= */

export const DEFAULT_REVISION_INTERVALS = [
  1,
  3,
  7,
  14,
];

export const MAX_AUTO_REVISIONS = 4;

/* =========================================
   REVISION RECALL
========================================= */

export const RECALL_QUALITY = {
  GOOD: "good",
  OKAY: "okay",
};

/* =========================================
   CHAPTER TAGS
========================================= */

export const CHAPTER_TAGS = [
  "EHW",
  "HHW",
  "ELW",
  "HLW",

  "Theory",
  "Formula",
  "Concept",
  "Numericals",

  "NCERT",
  "Diagram",
  "Reactions",
  "Mechanism",

  "Forgettable",
  "Exceptions",

  "ARCave",
  "MTFCave",
  "DirectNCERT",
];

/* =========================================
   TOPIC TAGS
========================================= */

export const TOPIC_TAGS = [
  "Quick",
  "Mid",
  "Big",

  "FastDecay",

  "Confusing",
  "SillyMistake",

  "FreqAsked",

  "NCERTLine",

  "Weak",
  "Strong",

  "RepeatedMistakes",
  "RepeatedUnattempted",
];

/* =========================================
   LECTURE TAGS
========================================= */

export const LECTURE_TAGS = [
  "Concept Heavy",
  "Que Heavy",
  "NCERT",
  "Que + Concept",
];

/* =========================================
   SHORT NOTES STATUS
========================================= */

export const SHORT_NOTES_STATUS = {
  COMPLETED: "completed",
  ONGOING: "ongoing",
  NA: "na",
};

/* =========================================
   MCQ BOOKMARK TYPES
========================================= */

export const MCQ_BOOKMARK_TYPES = [
  "GQ",
  "CE",
  "SM",
  "Type-B",
  "OS",
];

/* =========================================
   TEST BOOKMARK TYPES
========================================= */

export const TEST_BOOKMARK_TYPES = [
  "GQ",
  "CE",
  "SM",
  "Type-B",
  "OS",
  "CE-U",
];

/* =========================================
   TEST TYPES
========================================= */

export const TEST_TYPES = [
  "UT",
  "RT",
  "FST11",
  "FST12",
  "FSTALL",
];

/* =========================================
   TEST TYPE LABELS
========================================= */

export const TEST_TYPE_LABELS = {
  UT: "Unit Test",
  RT: "Review Test",
  FST11: "FST (11th)",
  FST12: "FST (12th)",
  FSTALL: "FST (All)",
};

/* =========================================
   NEET SCORING
========================================= */

export const NEET_SCORING = {
  CORRECT: 4,
  WRONG: -1,
  UNATTEMPTED: 0,
};

/* =========================================
   HEATMAP SLABS
========================================= */

export const DAILY_HEATMAP_SLABS = [
  50,
  100,
  150,
  200,
  250,
];

export const WEEKLY_HEATMAP_SLABS = [
  350,
  500,
  1000,
  1500,
  2000,
];

/* =========================================
   AUTO TAG THRESHOLDS
========================================= */

export const AUTO_TAG_DEFAULTS = {
  weakThreshold: 0.15,
  strongThreshold: 0.05,

  repeatedMistakesThreshold: 3,

  repeatedUnattemptedThreshold: 3,
};

/* =========================================
   LEAGUES
========================================= */

export const LEAGUES = [
  {
    name: "Bronze",
    streak: 5,
    multiplier: 1.1,
  },

  {
    name: "Silver",
    streak: 15,
    multiplier: 1.25,
  },

  {
    name: "Gold",
    streak: 30,
    multiplier: 1.3,
  },

  {
    name: "Platinum",
    streak: 60,
    multiplier: 1.4,
  },

  {
    name: "Diamond",
    streak: 90,
    multiplier: 1.5,
  },

  {
    name: "Obsidian",
    streak: 120,
    multiplier: 1.75,
  },

  {
    name: "Mithril",
    streak: 150,
    multiplier: 2,
  },

  {
    name: "Adamantium",
    streak: 200,
    multiplier: 2.25,
  },

  {
    name: "DragonScales",
    streak: 250,
    multiplier: 2.5,
  },

  {
    name: "BonesOfGod",
    streak: 300,
    multiplier: 3,
  },
];

/* =========================================
   BOUNTY TITLES
========================================= */

export const BOUNTY_TITLES = [
  {
    title: "Local Goon",
    bounty: 1_000_000,
  },

  {
    title: "Island's Mafia",
    bounty: 10_000_000,
  },

  {
    title: "Super Rookie",
    bounty: 100_000_000,
  },

  {
    title: "Part of The Worst Generation",
    bounty: 300_000_000,
  },

  {
    title: "One of the Seven Warlords of the Sea",
    bounty: 500_000_000,
  },

  {
    title: "Emperor Candidate",
    bounty: 750_000_000,
  },

  {
    title: "Yonko",
    bounty: 1_000_000_000,
  },

  {
    title: "World Threat",
    bounty: 2_000_000_000,
  },
];

/* =========================================
   BERRI REWARDS
========================================= */

export const BERRI_REWARDS = {
  REVISION: 10000,

  LECTURE_COMPLETION: 100000,

  SHORT_NOTES_COMPLETION: 500000,

  MCQ_SOLVED: 5000,

  TEST_FAIL_PENALTY: -2000000,

  LECTURE_ON_TIME_BONUS: 500000,
};

/* =========================================
   SHOP
========================================= */

export const SHOP_ITEMS = {
  STREAK_SAVE_12H: {
    minimumCost: 100000,
    balancePercentage: 0.075,
    cooldownHours: 24,
  },

  STREAK_SAVE_16H: {
    minimumCost: 200000,
    balancePercentage: 0.1,
    cooldownHours: 24,
  },

  REGAIN_STREAK: {
    minimumCost: 10000000,
    balancePercentage: 0.5,
  },
};
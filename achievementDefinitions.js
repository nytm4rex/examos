// utils/colorUtils.js

import COLORS from "../styles/colors";

/* =========================================
   LAST REVISION / LAST ATTEMPT
========================================= */

export const getLastRevisionColor = (
  days
) => {
  if (
    days === null ||
    days === undefined
  ) {
    return COLORS.DARK_GREY;
  }

  if (days === 0) {
    return COLORS.RECALL_GOOD;
  }

  if (days >= 60) {
    return COLORS.REVISION_RED;
  }

  if (days >= 30) {
    return COLORS.REVISION_YELLOW;
  }

  return COLORS.DARK_GREY;
};

/* =========================================
   SHORT NOTES
========================================= */

export const getShortNotesColor = (
  status
) => {
  switch (status) {
    case "completed":
      return COLORS.PROGRESS_GREEN;

    case "ongoing":
      return COLORS.REVISION_YELLOW;

    default:
      return COLORS.DARK_GREY;
  }
};

/* =========================================
   RECALL QUALITY
========================================= */

export const getRecallQualityColor =
  (quality) => {
    switch (quality) {
      case "good":
        return COLORS.RECALL_GOOD;

      case "okay":
        return COLORS.RECALL_OKAY;

      default:
        return COLORS.DARK_GREY;
    }
  };

/* =========================================
   REVISION CHIP
========================================= */

export const getRevisionChipColor =
  (revisionNumber) => {
    if (revisionNumber >= 4) {
      return COLORS.RECALL_GOOD;
    }

    return COLORS.DARK_GREY;
  };

/* =========================================
   TOPIC AUTO TAGS
========================================= */

export const getTopicTagColor = (
  tag
) => {
  switch (tag) {
    case "Weak":
      return COLORS.REVISION_RED;

    case "Strong":
      return COLORS.RECALL_GOOD;

    case "RepeatedMistakes":
      return COLORS.REVISION_RED;

    case "RepeatedUnattempted":
      return COLORS.REVISION_YELLOW;

    default:
      return COLORS.DARK_GREY;
  }
};

/* =========================================
   TEST WORKLOAD
========================================= */

export const getWorkloadColor = (
  revisionsPerDay
) => {
  if (revisionsPerDay <= 7) {
    return COLORS.RECALL_GOOD;
  }

  if (revisionsPerDay <= 14) {
    return COLORS.REVISION_YELLOW;
  }

  return COLORS.REVISION_RED;
};

/* =========================================
   TEST SCORE CHANGE
========================================= */

export const getScoreTrendColor = (
  difference
) => {
  if (difference > 0) {
    return COLORS.RECALL_GOOD;
  }

  if (difference < 0) {
    return COLORS.REVISION_RED;
  }

  return COLORS.DARK_GREY;
};

/* =========================================
   CRUNCH MODE
========================================= */

export const getCrunchModeColor =
  (active) => {
    return active
      ? COLORS.CRUNCH_ORANGE
      : COLORS.DARK_GREY;
  };

/* =========================================
   HEATMAP DAILY
========================================= */

export const getDailyHeatmapColor =
  (count = 0) => {
    if (count >= 250) {
      return COLORS.HEATMAP_250;
    }

    if (count >= 200) {
      return COLORS.HEATMAP_200;
    }

    if (count >= 150) {
      return COLORS.HEATMAP_150;
    }

    if (count >= 100) {
      return COLORS.HEATMAP_100;
    }

    if (count >= 50) {
      return COLORS.HEATMAP_50;
    }

    return COLORS.CARD_BACKGROUND;
  };

/* =========================================
   HEATMAP WEEKLY
========================================= */

export const getWeeklyHeatmapColor =
  (count = 0) => {
    if (count >= 2000) {
      return COLORS.HEATMAP_250;
    }

    if (count >= 1500) {
      return COLORS.HEATMAP_200;
    }

    if (count >= 1000) {
      return COLORS.HEATMAP_150;
    }

    if (count >= 500) {
      return COLORS.HEATMAP_100;
    }

    if (count >= 350) {
      return COLORS.HEATMAP_50;
    }

    return COLORS.CARD_BACKGROUND;
  };

/* =========================================
   STREAK LEAGUES
========================================= */

export const getLeagueColor = (
  leagueName
) => {
  switch (leagueName) {
    case "Bronze":
      return "#CD7F32";

    case "Silver":
      return "#C0C0C0";

    case "Gold":
      return "#FFD700";

    case "Platinum":
      return "#6FC3DF";

    case "Diamond":
      return "#58D3F7";

    case "Obsidian":
      return "#4B4B4B";

    case "Mithril":
      return "#8ED6FF";

    case "Adamantium":
      return "#B5B5B5";

    case "DragonScales":
      return "#7CFC00";

    case "BonesOfGod":
      return "#FFECBD";

    default:
      return COLORS.DARK_GREY;
  }
};

/* =========================================
   BERRI TITLES
========================================= */

export const getBountyTitleColor =
  (bounty) => {
    if (bounty >= 2000000000) {
      return "#FFECBD";
    }

    if (bounty >= 1000000000) {
      return "#FFD700";
    }

    if (bounty >= 500000000) {
      return "#FF5E29";
    }

    if (bounty >= 100000000) {
      return "#58D3F7";
    }

    return COLORS.TEXT_PRIMARY;
  };
// engines/achievementEngine.js

import { ACHIEVEMENTS } from "../data/achievementDefinitions";

/* =========================================
   ACHIEVEMENT CHECKERS
========================================= */

const categoryCheckers = {
  revision: (stats, target) =>
    stats.totalRevisions >= target,

  shortNotes: (stats, target) =>
    stats.completedShortNotes >= target,

  lecture: (stats, target) =>
    stats.completedLectures >= target,

  mcq: (stats, target) =>
    stats.totalMCQs >= target,

  streak: (stats, target) =>
    stats.longestStreak >= target,

  score: (stats, target) =>
    stats.bestScore >= target,

  bounty: (stats, target) =>
    stats.bounty >= target,
};

/* =========================================
   SINGLE ACHIEVEMENT
========================================= */

export const isAchievementUnlocked =
  (
    achievement,
    stats
  ) => {
    const checker =
      categoryCheckers[
        achievement.category
      ];

    if (!checker) {
      return false;
    }

    return checker(
      stats,
      achievement.target
    );
  };

/* =========================================
   ALL UNLOCKED
========================================= */

export const getUnlockedAchievements =
  (stats) => {
    return ACHIEVEMENTS.filter(
      (achievement) =>
        isAchievementUnlocked(
          achievement,
          stats
        )
    );
  };

/* =========================================
   ALL LOCKED
========================================= */

export const getLockedAchievements =
  (stats) => {
    return ACHIEVEMENTS.filter(
      (achievement) =>
        !isAchievementUnlocked(
          achievement,
          stats
        )
    );
  };

/* =========================================
   NEWLY UNLOCKED
========================================= */

export const getNewAchievements =
  (
    stats,
    unlockedIds = []
  ) => {
    return ACHIEVEMENTS.filter(
      (achievement) =>
        !unlockedIds.includes(
          achievement.id
        ) &&
        isAchievementUnlocked(
          achievement,
          stats
        )
    );
  };

/* =========================================
   SAVE ENTRY
========================================= */

export const createAchievementEntry =
  (
    achievement
  ) => {
    return {
      achievementId:
        achievement.id,

      title:
        achievement.title,

      unlockedDate:
        new Date().toISOString(),
    };
  };

/* =========================================
   PROGRESS
========================================= */

export const getAchievementProgress =
  (
    achievement,
    stats
  ) => {
    switch (
      achievement.category
    ) {
      case "revision":
        return {
          current:
            stats.totalRevisions || 0,
          target:
            achievement.target,
        };

      case "shortNotes":
        return {
          current:
            stats.completedShortNotes ||
            0,
          target:
            achievement.target,
        };

      case "lecture":
        return {
          current:
            stats.completedLectures ||
            0,
          target:
            achievement.target,
        };

      case "mcq":
        return {
          current:
            stats.totalMCQs || 0,
          target:
            achievement.target,
        };

      case "streak":
        return {
          current:
            stats.longestStreak || 0,
          target:
            achievement.target,
        };

      case "score":
        return {
          current:
            stats.bestScore || 0,
          target:
            achievement.target,
        };

      case "bounty":
        return {
          current:
            stats.bounty || 0,
          target:
            achievement.target,
        };

      default:
        return {
          current: 0,
          target:
            achievement.target,
        };
    }
  };

/* =========================================
   COMPLETION %
========================================= */

export const getAchievementPercentage =
  (
    achievement,
    stats
  ) => {
    const progress =
      getAchievementProgress(
        achievement,
        stats
      );

    return Math.min(
      100,
      Math.round(
        (progress.current /
          progress.target) *
          100
      )
    );
  };
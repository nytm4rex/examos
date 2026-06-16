// engines/berriEngine.js

import {
  BOUNTY_TITLES,
} from "../data/constantsData";

/* =========================================
   BASE REWARDS
========================================= */

export const BERRI_REWARDS = {
  REVISION: 10000,

  SHORT_NOTES: 500000,

  LECTURE: 100000,

  MCQ: 5000,

  LECTURE_ON_TIME_BONUS: 500000,

  TEST_FAIL_PENALTY: 2000000,
};

/* =========================================
   TEST REWARDS
========================================= */

export const getTestReward =
  (score) => {
    if (score < 450) {
      return (
        -BERRI_REWARDS.TEST_FAIL_PENALTY
      );
    }

    return score * 10000;
  };

/* =========================================
   SCORE MILESTONES
========================================= */

export const getScoreMilestoneReward =
  (score) => {
    if (score >= 700)
      return 70000000;

    if (score >= 650)
      return 40000000;

    if (score >= 600)
      return 10000000;

    if (score >= 550)
      return 500000;

    return 0;
  };

/* =========================================
   MCQ MILESTONES
========================================= */

export const getMCQMilestoneReward =
  (totalMCQs) => {
    switch (totalMCQs) {
      case 1000:
        return 1000000;

      case 2000:
        return 2000000;

      case 5000:
        return 5000000;

      case 10000:
        return 10000000;

      case 20000:
        return 20000000;

      case 50000:
        return 50000000;

      default:
        return 0;
    }
  };

/* =========================================
   STREAK MILESTONES
========================================= */

export const getStreakReward =
  (streak) => {
    switch (streak) {
      case 7:
        return 1000000;

      case 21:
        return 7000000;

      case 66:
        return 49000000;

      case 100:
        return 70000000;

      case 200:
        return 77000000;

      case 250:
        return 84000000;

      case 300:
        return 100000000;

      default:
        return 0;
    }
  };

/* =========================================
   BOUNTY
========================================= */

export const addBounty =
  (
    currentBounty,
    reward
  ) => {
    return (
      currentBounty + reward
    );
  };

/* =========================================
   BALANCE
========================================= */

export const calculateBalanceReward =
  (
    bountyReward,
    streakMultiplier = 1
  ) => {
    return Math.floor(
      bountyReward *
        0.1 *
        streakMultiplier
    );
  };

export const addBalance =
  (
    currentBalance,
    amount
  ) => {
    return (
      currentBalance + amount
    );
  };

export const subtractBalance =
  (
    currentBalance,
    amount
  ) => {
    return Math.max(
      0,
      currentBalance - amount
    );
  };

/* =========================================
   TITLES
========================================= */

export const getBountyTitle =
  (bounty) => {
    let current =
      BOUNTY_TITLES[0];

    BOUNTY_TITLES.forEach(
      (title) => {
        if (
          bounty >=
          title.requiredBounty
        ) {
          current = title;
        }
      }
    );

    return current;
  };

/* =========================================
   YONKO BONUS
========================================= */

export const shouldAwardYonkoBonus =
  (
    previousBounty,
    currentBounty
  ) => {
    return (
      previousBounty <
        1000000000 &&
      currentBounty >=
        1000000000
    );
  };

export const getYonkoBonus =
  () => {
    return 500000000;
  };

/* =========================================
   HISTORY
========================================= */

export const createBerriTransaction =
  ({
    type,
    amount,
    reason,
  }) => {
    return {
      id: Date.now(),

      type,

      amount,

      reason,

      createdAt:
        new Date().toISOString(),
    };
  };
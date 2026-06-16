// engines/streakEngine.js

import { getToday } from "../utils/dateUtils";

import {
  LEAGUES,
} from "../data/constantsData";

/* =========================================
   STREAK SUCCESS
========================================= */

export const didMeetDailyTarget =
  (
    solvedToday,
    target
  ) => {
    return solvedToday >= target;
  };

/* =========================================
   UPDATE STREAK
========================================= */

export const updateStreak =
  ({
    currentStreak,
    longestStreak,
    solvedToday,
    target,
  }) => {
    const success =
      didMeetDailyTarget(
        solvedToday,
        target
      );

    if (!success) {
      return {
        currentStreak: 0,
        longestStreak,
      };
    }

    const newStreak =
      currentStreak + 1;

    return {
      currentStreak:
        newStreak,

      longestStreak:
        Math.max(
          longestStreak,
          newStreak
        ),
    };
  };

/* =========================================
   LEAGUE
========================================= */

export const getCurrentLeague =
  (streak) => {
    let league =
      LEAGUES[0];

    LEAGUES.forEach(
      (item) => {
        if (
          streak >=
          item.requiredDays
        ) {
          league = item;
        }
      }
    );

    return league;
  };

/* =========================================
   MULTIPLIER
========================================= */

export const getLeagueMultiplier =
  (streak) => {
    return getCurrentLeague(
      streak
    ).multiplier;
  };

/* =========================================
   TARGET HISTORY
========================================= */

export const addTargetHistory =
  (
    history = [],
    target
  ) => {
    return [
      {
        target,

        date:
          getToday(),
      },
      ...history,
    ];
  };

/* =========================================
   TWO WEEK AVERAGE
========================================= */

export const getTwoWeekAverage =
  (history = []) => {
    if (
      history.length === 0
    ) {
      return 0;
    }

    const total =
      history.reduce(
        (
          sum,
          day
        ) =>
          sum +
          (day.solved || 0),
        0
      );

    return Math.round(
      total /
        history.length
    );
  };

/* =========================================
   STREAK RECOVERY
========================================= */

export const canRecoverStreak =
  ({
    currentStreak,
    lastMissedDays,
  }) => {
    return (
      currentStreak > 0 &&
      lastMissedDays === 1
    );
  };

/* =========================================
   APPLY RECOVERY
========================================= */

export const recoverStreak =
  ({
    currentStreak,
    longestStreak,
  }) => {
    return {
      currentStreak,

      longestStreak,
    };
  };

/* =========================================
   MILESTONES
========================================= */

export const reachedStreakMilestone =
  (streak) => {
    const milestones = [
      7,
      21,
      66,
      100,
      200,
      250,
      300,
    ];

    return milestones.includes(
      streak
    );
  };

/* =========================================
   LEAGUE PROGRESS
========================================= */

export const getLeagueProgress =
  (streak) => {
    const currentLeague =
      getCurrentLeague(
        streak
      );

    const currentIndex =
      LEAGUES.findIndex(
        (league) =>
          league.name ===
          currentLeague.name
      );

    const nextLeague =
      LEAGUES[
        currentIndex + 1
      ];

    if (!nextLeague) {
      return {
        completed: true,
      };
    }

    return {
      current:
        streak,

      target:
        nextLeague.requiredDays,

      remaining:
        nextLeague.requiredDays -
        streak,
    };
  };
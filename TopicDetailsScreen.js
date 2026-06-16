// utils/constantsUtils.js

import {
  SUBJECTS,
  TEST_TYPE_LABELS,
  LEAGUES,
  BOUNTY_TITLES,
} from "../data/constantsData";

/* =========================================
   SUBJECTS
========================================= */

export const getSubjectById = (
  subjectId
) => {
  return (
    SUBJECTS.find(
      (subject) =>
        subject.id === subjectId
    ) || null
  );
};

export const getSubjectName = (
  subjectId
) => {
  return (
    getSubjectById(subjectId)?.name ||
    "Unknown"
  );
};

export const getSubjectColor = (
  subjectId
) => {
  return (
    getSubjectById(subjectId)?.color ||
    "#FFFFFF"
  );
};

export const getSubjectShortName = (
  subjectId
) => {
  return (
    getSubjectById(subjectId)
      ?.shortName || ""
  );
};

/* =========================================
   TEST TYPES
========================================= */

export const getTestTypeLabel = (
  type
) => {
  return (
    TEST_TYPE_LABELS[type] || type
  );
};

/* =========================================
   LEAGUES
========================================= */

export const getLeagueFromStreak = (
  streak
) => {
  let currentLeague = LEAGUES[0];

  LEAGUES.forEach((league) => {
    if (streak >= league.streak) {
      currentLeague = league;
    }
  });

  return currentLeague;
};

/* =========================================
   BOUNTY TITLES
========================================= */

export const getBountyTitle = (
  bounty
) => {
  let currentTitle =
    BOUNTY_TITLES[0];

  BOUNTY_TITLES.forEach(
    (titleEntry) => {
      if (
        bounty >= titleEntry.bounty
      ) {
        currentTitle = titleEntry;
      }
    }
  );

  return currentTitle;
};

/* =========================================
   BOOLEAN HELPERS
========================================= */

export const isPhysics = (
  subjectId
) => subjectId === "physics";

export const isPC = (subjectId) =>
  subjectId === "pc";

export const isIOC = (subjectId) =>
  subjectId === "ioc";

export const isOC = (subjectId) =>
  subjectId === "oc";

export const isBiology = (
  subjectId
) => subjectId === "biology";
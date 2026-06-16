// engines/homeEngine.js

import {
  sortRevisionsForHome,
} from "./revisionEngine";

/* =========================================
   REVISIONS
========================================= */

export const getHomeRevisions =
  (
    revisions = [],
    topics = [],
    chapters = []
  ) => {
    const pending =
      revisions.filter(
        (revision) =>
          !revision.actualDate
      );

    return sortRevisionsForHome(
      pending
    );
  };

/* =========================================
   COMPLETED TODAY
========================================= */

export const getCompletedToday =
  (
    revisions = [],
    today
  ) => {
    return revisions.filter(
      (revision) =>
        revision.actualDate ===
        today
    );
  };

/* =========================================
   ACTIVE LECTURES
========================================= */

export const getActiveLectures =
  (
    lectures = []
  ) => {
    return lectures.filter(
      (lecture) =>
        !lecture.completed
    );
  };

/* =========================================
   NEXT LECTURES
========================================= */

export const getQueuedLectures =
  (
    lectures = [],
    chapterId
  ) => {
    return lectures
      .filter(
        (lecture) =>
          lecture.chapterId ===
            chapterId &&
          !lecture.completed
      )
      .sort(
        (a, b) =>
          a.name.localeCompare(
            b.name
          )
      );
  };

/* =========================================
   ACTIVE REFERENCES
========================================= */

export const getHomeReferences =
  (
    references = []
  ) => {
    return references.filter(
      (reference) =>
        reference.solvedCount >
          0 &&
        !reference.completed
    );
  };

/* =========================================
   DAILY MCQ
========================================= */

export const getTodayMCQCount =
  (
    sessions = [],
    today
  ) => {
    return sessions
      .filter(
        (session) =>
          session.date ===
          today
      )
      .reduce(
        (
          total,
          session
        ) =>
          total +
          session.solvedCount,
        0
      );
  };

/* =========================================
   DAILY TARGET
========================================= */

export const getTargetProgress =
  (
    solvedToday,
    target
  ) => {
    return {
      solved:
        solvedToday,

      target,

      percentage:
        target === 0
          ? 0
          : Math.min(
              100,
              Math.round(
                (solvedToday /
                  target) *
                  100
              )
            ),
    };
  };

/* =========================================
   NEXT TEST
========================================= */

export const getHomeNextTest =
  (
    tests = []
  ) => {
    const upcoming =
      tests
        .filter(
          (test) =>
            new Date(
              test.date
            ) >=
            new Date()
        )
        .sort(
          (a, b) =>
            new Date(
              a.date
            ) -
            new Date(
              b.date
            )
        );

    return (
      upcoming[0] ||
      null
    );
  };

/* =========================================
   DASHBOARD STATS
========================================= */

export const buildHomeStats =
  ({
    streak,
    dailyTarget,
    solvedToday,
    bounty,
  }) => {
    return {
      streak,

      bounty,

      target:
        dailyTarget,

      progress:
        getTargetProgress(
          solvedToday,
          dailyTarget
        ),
    };
  };
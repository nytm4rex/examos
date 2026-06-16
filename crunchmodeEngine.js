// engines/mcqEngine.js

import { getToday } from "../utils/dateUtils";

/* =========================================
   SOLVE SESSIONS
========================================= */

export const createMCQSession = ({
  referenceId,
  startQuestion,
  endQuestion,
}) => {
  const solvedCount =
    endQuestion - startQuestion + 1;

  return {
    referenceId,

    date: getToday(),

    startQuestion,

    endQuestion,

    solvedCount,
  };
};

/* =========================================
   TOTAL SOLVED
========================================= */

export const getSolvedCount =
  (sessions = []) => {
    return sessions.reduce(
      (total, session) =>
        total +
        (session.solvedCount || 0),
      0
    );
  };

/* =========================================
   ATTEMPT STATUS
========================================= */

export const isAttemptCompleted =
  (
    solvedCount,
    totalQuestions
  ) => {
    return (
      solvedCount >= totalQuestions
    );
  };

/* =========================================
   CURRENT ATTEMPT
========================================= */

export const getCurrentAttemptNumber =
  (attempts = []) => {
    return attempts.length + 1;
  };

/* =========================================
   START NEXT ATTEMPT
========================================= */

export const createNextAttempt =
  (
    referenceId,
    previousAttempts = []
  ) => {
    return {
      referenceId,

      attemptNumber:
        previousAttempts.length + 1,

      solvedCount: 0,

      completed: false,

      createdDate:
        getToday(),
    };
  };

/* =========================================
   REFERENCE COMPLETION
========================================= */

export const getReferenceProgress =
  (
    solvedCount,
    totalQuestions
  ) => {
    return {
      solved: solvedCount,

      total: totalQuestions,

      percentage:
        totalQuestions === 0
          ? 0
          : Math.round(
              (
                solvedCount /
                totalQuestions
              ) *
                100
            ),
    };
  };

/* =========================================
   CHAPTER TOTALS
========================================= */

export const getChapterMCQTotals =
  (references = []) => {
    return references.reduce(
      (
        totals,
        reference
      ) => {
        totals.solved +=
          reference.solvedCount || 0;

        totals.total +=
          reference.totalQuestions ||
          0;

        return totals;
      },
      {
        solved: 0,
        total: 0,
      }
    );
  };

/* =========================================
   SUBJECT TOTALS
========================================= */

export const getSubjectMCQTotals =
  (chapterTotals = []) => {
    return chapterTotals.reduce(
      (
        totals,
        chapter
      ) => {
        totals.solved +=
          chapter.solved || 0;

        totals.total +=
          chapter.total || 0;

        return totals;
      },
      {
        solved: 0,
        total: 0,
      }
    );
  };

/* =========================================
   BOOKMARKS
========================================= */

export const getMistakeBookmarks =
  (bookmarks = []) => {
    return bookmarks.filter(
      (bookmark) =>
        bookmark.type === "CE" ||
        bookmark.type === "SM"
    );
  };

export const getConceptErrors =
  (bookmarks = []) => {
    return bookmarks.filter(
      (bookmark) =>
        bookmark.type === "CE"
    );
  };

export const getSillyMistakes =
  (bookmarks = []) => {
    return bookmarks.filter(
      (bookmark) =>
        bookmark.type === "SM"
    );
  };

export const getGoodQuestions =
  (bookmarks = []) => {
    return bookmarks.filter(
      (bookmark) =>
        bookmark.type === "GQ"
    );
  };

export const getTypeBQuestions =
  (bookmarks = []) => {
    return bookmarks.filter(
      (bookmark) =>
        bookmark.type === "Type-B"
    );
  };

/* =========================================
   ACTIVE REFERENCES
========================================= */

export const getActiveReferences =
  (
    references = []
  ) => {
    return references.filter(
      (reference) =>
        reference.solvedCount > 0 &&
        !reference.completed
    );
  };

/* =========================================
   LAST ATTEMPT
========================================= */

export const getLastAttemptDate =
  (sessions = []) => {
    if (
      sessions.length === 0
    ) {
      return null;
    }

    return sessions.sort(
      (a, b) =>
        new Date(b.date) -
        new Date(a.date)
    )[0].date;
  };

/* =========================================
   HEATMAP
========================================= */

export const getDailyMCQCount =
  (
    sessions = [],
    date
  ) => {
    return sessions
      .filter(
        (session) =>
          session.date === date
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

export const getWeeklyMCQCount =
  (sessions = []) => {
    return sessions.reduce(
      (
        total,
        session
      ) =>
        total +
        session.solvedCount,
      0
    );
  };
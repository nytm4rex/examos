// engines/testEngine.js

import { getToday } from "../utils/dateUtils";

/* =========================================
   TEST STATUS
========================================= */

export const getTestStatus =
  (testDate) => {
    const today =
      getToday();

    if (testDate < today) {
      return "finished";
    }

    return "upcoming";
  };

/* =========================================
   NEET SCORING
========================================= */

export const calculateSubjectScore =
  ({
    correct = 0,
    wrong = 0,
  }) => {
    return (
      correct * 4 - wrong
    );
  };

export const calculateTestScore =
  (
    subjectResults = []
  ) => {
    return subjectResults.reduce(
      (
        total,
        subject
      ) =>
        total +
        calculateSubjectScore(
          subject
        ),
      0
    );
  };

/* =========================================
   ATTEMPTS
========================================= */

export const getTotalAttempts =
  ({
    correct = 0,
    wrong = 0,
  }) => {
    return correct + wrong;
  };

export const getAccuracy =
  ({
    correct = 0,
    wrong = 0,
  }) => {
    const attempts =
      correct + wrong;

    if (attempts === 0) {
      return 0;
    }

    return Math.round(
      (correct /
        attempts) *
        100
    );
  };

/* =========================================
   SCORE TREND
========================================= */

export const getScoreDifference =
  (
    currentScore,
    previousScore
  ) => {
    return (
      currentScore -
      previousScore
    );
  };

/* =========================================
   ANALYSIS
========================================= */

export const toggleAnalysis =
  (test) => {
    return {
      ...test,

      analysisDone:
        !test.analysisDone,
    };
  };

/* =========================================
   BOOKMARKS
========================================= */

export const getTestMistakes =
  (bookmarks = []) => {
    return bookmarks.filter(
      (bookmark) =>
        bookmark.category ===
          "CE" ||
        bookmark.category ===
          "SM"
    );
  };

export const getRepeatedMistakes =
  (bookmarks = []) => {
    return bookmarks.filter(
      (bookmark) =>
        bookmark.category ===
          "CE" ||
        bookmark.category ===
          "SM"
    ).length;
  };

export const getRepeatedUnattempted =
  (bookmarks = []) => {
    return bookmarks.filter(
      (bookmark) =>
        bookmark.category ===
        "CE-U"
    ).length;
  };

/* =========================================
   AUTO TAG HELPERS
========================================= */

export const shouldApplyRepeatedMistakesTag =
  (bookmarks = []) => {
    return (
      getRepeatedMistakes(
        bookmarks
      ) > 3
    );
  };

export const shouldApplyRepeatedUnattemptedTag =
  (bookmarks = []) => {
    return (
      getRepeatedUnattempted(
        bookmarks
      ) > 3
    );
  };

/* =========================================
   CHAPTER STARTED
========================================= */

export const getStartedChapterCount =
  (
    syllabusChapters = [],
    revisionTopics = [],
    references = []
  ) => {
    let started = 0;

    syllabusChapters.forEach(
      (chapter) => {
        const revisionStarted =
          revisionTopics.some(
            (topic) =>
              topic.chapterId ===
                chapter.id &&
              topic.isScheduled
          );

        const mcqStarted =
          references.some(
            (reference) =>
              reference.chapterId ===
                chapter.id &&
              reference.solvedCount >
                0
          );

        if (
          revisionStarted ||
          mcqStarted
        ) {
          started++;
        }
      }
    );

    return started;
  };

/* =========================================
   WORKLOAD
========================================= */

export const getDailyRevisionLoad =
  (
    pendingRevisions,
    daysLeft
  ) => {
    if (
      daysLeft <= 0
    ) {
      return pendingRevisions;
    }

    return Math.ceil(
      pendingRevisions /
        daysLeft
    );
  };

/* =========================================
   NEXT TEST
========================================= */

export const getNextTest =
  (tests = []) => {
    const upcoming =
      tests.filter(
        (test) =>
          getTestStatus(
            test.date
          ) === "upcoming"
      );

    if (
      upcoming.length === 0
    ) {
      return null;
    }

    return upcoming.sort(
      (a, b) =>
        new Date(a.date) -
        new Date(b.date)
    )[0];
  };
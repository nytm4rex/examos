// engines/fstEngine.js

/* =========================================
   READINESS FACTOR
========================================= */

export const getRevisionFactor =
  ({
    lastRecallQuality,
    daysSinceRevision,
  }) => {
    let score = 0;

    if (
      lastRecallQuality ===
      "good"
    ) {
      score += 50;
    }

    if (
      lastRecallQuality ===
      "okay"
    ) {
      score += 25;
    }

    if (
      daysSinceRevision <= 7
    ) {
      score += 50;
    } else if (
      daysSinceRevision <= 30
    ) {
      score += 25;
    }

    return score;
  };

/* =========================================
   MCQ FACTOR
========================================= */

export const getMCQFactor =
  ({
    weakScore,
    mcqCompleted,
  }) => {
    let score = 0;

    if (mcqCompleted) {
      score += 50;
    }

    score += Math.max(
      0,
      50 -
        Math.round(
          weakScore * 100
        )
    );

    return score;
  };

/* =========================================
   TEST FACTOR
========================================= */

export const getTestFactor =
  ({
    mistakeCount,
    unattemptedCount,
  }) => {
    const penalty =
      mistakeCount * 5 +
      unattemptedCount * 10;

    return Math.max(
      0,
      100 - penalty
    );
  };

/* =========================================
   FINAL READINESS SCORE
========================================= */

export const calculateReadinessScore =
  ({
    revisionFactor,
    mcqFactor,
    testFactor,
  }) => {
    return Math.round(
      revisionFactor * 0.4 +
        mcqFactor * 0.3 +
        testFactor * 0.3
    );
  };

/* =========================================
   CHAPTER PRIORITY
========================================= */

export const rankFSTChapters =
  (chapters = []) => {
    return [...chapters].sort(
      (a, b) =>
        a.readinessScore -
        b.readinessScore
    );
  };

/* =========================================
   REALISTIC COVERAGE
========================================= */

export const estimateCoverage =
  ({
    daysLeft,
    chaptersPerDay = 2,
  }) => {
    return (
      daysLeft *
      chaptersPerDay
    );
  };

/* =========================================
   CHAPTERS TO REVISE
========================================= */

export const getPriorityCoverage =
  (
    rankedChapters,
    coverageCount
  ) => {
    return rankedChapters.slice(
      0,
      coverageCount
    );
  };

/* =========================================
   FST PROGRESS
========================================= */

export const getCoverageProgress =
  (
    coveredChapters,
    totalChapters
  ) => {
    return {
      covered:
        coveredChapters,

      total: totalChapters,

      percentage:
        totalChapters === 0
          ? 0
          : Math.round(
              (
                coveredChapters /
                totalChapters
              ) *
                100
            ),
    };
  };

/* =========================================
   SCORE TREND
========================================= */

export const getFSTScoreTrend =
  (tests = []) => {
    return tests.map(
      (test) => ({
        number:
          test.number,

        score:
          test.score,

        date:
          test.date,
      })
    );
  };

/* =========================================
   COVERAGE TREND
========================================= */

export const getCoverageTrend =
  (history = []) => {
    return history.map(
      (entry) => ({
        fst:
          entry.fstNumber,

        chapters:
          entry.coveredChapters,
      })
    );
  };
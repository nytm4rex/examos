// utils/domainUtils.js

/* =========================================
   REVISION DOMAIN
========================================= */

export const getCompletedRevisionCount = (
  revisions = []
) => {
  return revisions.filter(
    (revision) => revision.actualDate
  ).length;
};

export const getPendingRevisionCount = (
  revisions = []
) => {
  return revisions.filter(
    (revision) => !revision.actualDate
  ).length;
};

export const getTopicProgress = (
  revisions = []
) => {
  const total = revisions.length;

  if (!total) {
    return {
      completed: 0,
      total: 0,
      percentage: 0,
    };
  }

  const completed =
    getCompletedRevisionCount(
      revisions
    );

  return {
    completed,
    total,
    percentage: Math.round(
      (completed / total) * 100
    ),
  };
};

/* =========================================
   CHAPTER PROGRESS
========================================= */

export const getChapterProgress = (
  chapterTopics = [],
  revisions = []
) => {
  let total = 0;
  let completed = 0;

  chapterTopics.forEach((topic) => {
    const topicRevisions =
      revisions.filter(
        (revision) =>
          revision.topicId === topic.id
      );

    total += topicRevisions.length;

    completed +=
      topicRevisions.filter(
        (revision) =>
          revision.actualDate
      ).length;
  });

  return {
    completed,
    total,
    percentage:
      total === 0
        ? 0
        : Math.round(
            (completed / total) * 100
          ),
  };
};

/* =========================================
   TOPIC STATUS
========================================= */

export const isTopicStarted = (
  topic
) => {
  return (
    topic?.isScheduled === true
  );
};

export const getCurrentRevisionNumber =
  (revisions = []) => {
    const completed =
      revisions.filter(
        (revision) =>
          revision.actualDate
      ).length;

    return completed + 1;
  };

/* =========================================
   LECTURES
========================================= */

export const getLectureActualMinutes =
  (sessions = []) => {
    return sessions.reduce(
      (total, session) =>
        total +
        (session.durationMinutes ||
          0),
      0
    );
  };

export const isLectureCompleted =
  (lecture) => {
    return (
      lecture?.completed === true
    );
  };

export const getLectureCompletionRate =
  (
    completedLectures = 0,
    totalLectures = 0
  ) => {
    if (!totalLectures) return 0;

    return Math.round(
      (completedLectures /
        totalLectures) *
        100
    );
  };

/* =========================================
   MCQ DOMAIN
========================================= */

export const getReferenceSolvedCount =
  (sessions = []) => {
    return sessions.reduce(
      (total, session) => {
        const solved =
          session.endQuestion -
          session.startQuestion +
          1;

        return total + solved;
      },
      0
    );
  };

export const isReferenceCompleted =
  (
    solvedCount,
    totalQuestions
  ) => {
    return (
      solvedCount >= totalQuestions
    );
  };

export const getChapterMCQTotals = (
  references = []
) => {
  let solved = 0;
  let total = 0;

  references.forEach(
    (reference) => {
      solved +=
        reference.solvedCount || 0;

      total +=
        reference.totalQuestions ||
        0;
    }
  );

  return {
    solved,
    total,
  };
};

export const getBookmarkMistakeCount =
  (bookmarks = []) => {
    return bookmarks.filter(
      (bookmark) =>
        bookmark.type === "CE" ||
        bookmark.type === "SM"
    ).length;
  };

/* =========================================
   TEST DOMAIN
========================================= */

export const calculateTestScore =
  ({
    correct = 0,
    wrong = 0,
  }) => {
    return (
      correct * 4 - wrong
    );
  };

export const calculateTotalAttempts =
  ({
    correct = 0,
    wrong = 0,
  }) => {
    return correct + wrong;
  };

export const getStartedChapterCount =
  (
    chapters = [],
    topics = [],
    references = []
  ) => {
    let started = 0;

    chapters.forEach(
      (chapter) => {
        const hasTopicStarted =
          topics.some(
            (topic) =>
              topic.chapterId ===
                chapter.id &&
              topic.isScheduled
          );

        const hasReferenceStarted =
          references.some(
            (reference) =>
              reference.chapterId ===
                chapter.id &&
              (reference.solvedCount ||
                0) > 0
          );

        if (
          hasTopicStarted ||
          hasReferenceStarted
        ) {
          started++;
        }
      }
    );

    return started;
  };

/* =========================================
   READINESS SCORE
========================================= */

export const calculateReadinessScore =
  ({
    revisionFactor = 0,
    mcqFactor = 0,
    testFactor = 0,
  }) => {
    return Math.round(
      revisionFactor * 0.4 +
        mcqFactor * 0.3 +
        testFactor * 0.3
    );
  };

/* =========================================
   HOME SCREEN
========================================= */

export const sortHomeRevisions = (
  revisions = []
) => {
  const priorityMap = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
  };

  return [...revisions].sort(
    (a, b) => {
      return (
        (priorityMap[
          a.revisionNumber
        ] || 99) -
        (priorityMap[
          b.revisionNumber
        ] || 99)
      );
    }
  );
};

/* =========================================
   BERRI
========================================= */

export const calculateBalanceReward =
  (
    bountyReward,
    multiplier = 1
  ) => {
    return Math.floor(
      bountyReward * 0.1 * multiplier
    );
  };
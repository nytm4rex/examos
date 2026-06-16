// engines/revisionEngine.js

import {
  REVISION_INTERVALS,
} from "../data/constantsData";

import {
  createRevisionDate,
  getToday,
} from "../utils/dateUtils";

import {
  generateRevisionId,
} from "../utils/idUtils";

/* =========================================
   CREATE DEFAULT REVISIONS
========================================= */

export const createRevisionSchedule =
  (
    topicId,
    startDate = getToday()
  ) => {
    return REVISION_INTERVALS.map(
      (
        interval,
        index
      ) => ({
        id: generateRevisionId(),

        topicId,

        revisionNumber:
          index + 1,

        expectedDate:
          createRevisionDate(
            startDate,
            interval
          ),

        actualDate: null,

        recallQuality: null,
      })
    );
  };

/* =========================================
   TOPIC STATUS
========================================= */

export const isTopicScheduled =
  (revisions = []) => {
    return revisions.length > 0;
  };

export const getCompletedRevisionCount =
  (revisions = []) => {
    return revisions.filter(
      (revision) =>
        revision.actualDate
    ).length;
  };

export const getPendingRevisionCount =
  (revisions = []) => {
    return revisions.filter(
      (revision) =>
        !revision.actualDate
    ).length;
  };

/* =========================================
   REVISION PROGRESS
========================================= */

export const getTopicProgress =
  (revisions = []) => {
    const total =
      revisions.length;

    const completed =
      getCompletedRevisionCount(
        revisions
      );

    return {
      completed,
      total,
      percentage:
        total === 0
          ? 0
          : Math.round(
              (
                completed /
                total
              ) *
                100
            ),
    };
  };

/* =========================================
   COMPLETE REVISION
========================================= */

export const completeRevision =
  (
    revision,
    recallQuality
  ) => {
    return {
      ...revision,

      actualDate:
        getToday(),

      recallQuality,
    };
  };

/* =========================================
   CURRENT REVISION
========================================= */

export const getCurrentRevisionNumber =
  (revisions = []) => {
    return (
      getCompletedRevisionCount(
        revisions
      ) + 1
    );
  };

/* =========================================
   LAST REVISION
========================================= */

export const getLastCompletedRevision =
  (revisions = []) => {
    const completed =
      revisions.filter(
        (revision) =>
          revision.actualDate
      );

    if (
      completed.length === 0
    ) {
      return null;
    }

    return completed.sort(
      (a, b) =>
        new Date(
          b.actualDate
        ) -
        new Date(
          a.actualDate
        )
    )[0];
  };

/* =========================================
   CHAPTER PROGRESS
========================================= */

export const getChapterProgress =
  (
    topics = [],
    revisions = []
  ) => {
    let total = 0;
    let completed = 0;

    topics.forEach(
      (topic) => {
        const topicRevisions =
          revisions.filter(
            (
              revision
            ) =>
              revision.topicId ===
              topic.id
          );

        total +=
          topicRevisions.length;

        completed +=
          topicRevisions.filter(
            (
              revision
            ) =>
              revision.actualDate
          ).length;
      }
    );

    return {
      completed,
      total,

      percentage:
        total === 0
          ? 0
          : Math.round(
              (
                completed /
                total
              ) *
                100
            ),
    };
  };

/* =========================================
   CHAPTER COMPLETION
========================================= */

export const isChapterCompleted =
  (
    topics = [],
    revisions = []
  ) => {
    if (
      topics.length === 0
    ) {
      return false;
    }

    return topics.every(
      (topic) => {
        const topicRevisions =
          revisions.filter(
            (
              revision
            ) =>
              revision.topicId ===
              topic.id
          );

        return (
          topicRevisions.length >
            0 &&
          topicRevisions.every(
            (
              revision
            ) =>
              revision.actualDate
          )
        );
      }
    );
  };

/* =========================================
   SHORT NOTES
========================================= */

export const getShortNotesStatusColor =
  (
    status
  ) => {
    switch (status) {
      case "completed":
        return "green";

      case "ongoing":
        return "yellow";

      default:
        return "grey";
    }
  };

/* =========================================
   HOME PRIORITY
========================================= */

export const sortRevisionsForHome =
  (items = []) => {
    return [
      ...items,
    ].sort((a, b) => {
      if (
        a.revisionNumber !==
        b.revisionNumber
      ) {
        return (
          a.revisionNumber -
          b.revisionNumber
        );
      }

      return 0;
    });
  };

/* =========================================
   AUTO TAGS
========================================= */

export const shouldBeWeak =
  ({
    weakScore = 0,
    recentRecall = [],
    threshold = 0.15,
  }) => {
    if (
      recentRecall.length <
      2
    ) {
      return false;
    }

    const lastTwoOkay =
      recentRecall
        .slice(-2)
        .every(
          (
            quality
          ) =>
            quality ===
            "okay"
        );

    return (
      weakScore >
        threshold &&
      lastTwoOkay
    );
  };

export const shouldBeStrong =
  ({
    weakScore = 0,
    recentRecall = [],
    threshold = 0.05,
  }) => {
    if (
      recentRecall.length <
      2
    ) {
      return false;
    }

    const lastTwoGood =
      recentRecall
        .slice(-2)
        .every(
          (
            quality
          ) =>
            quality ===
            "good"
        );

    return (
      weakScore <
        threshold &&
      lastTwoGood
    );
  };
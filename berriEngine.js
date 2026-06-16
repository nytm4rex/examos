// engines/calendarEngine.js

import {
  getToday,
  getMonthYear,
  isSameDate,
} from "../utils/dateUtils";

/* =========================================
   TOPIC CALENDAR
========================================= */

export const getRevisionsForDate =
  (
    revisions = [],
    date
  ) => {
    return revisions.filter(
      (revision) =>
        revision.expectedDate === date
    );
  };

export const getCompletedRevisionsForDate =
  (
    revisions = [],
    date
  ) => {
    return revisions.filter(
      (revision) =>
        revision.actualDate &&
        revision.actualDate === date
    );
  };

/* =========================================
   TOPIC GRID
========================================= */

export const buildRevisionGrid =
  (revisions = []) => {
    return revisions.map(
      (revision) => ({
        revisionNumber:
          revision.revisionNumber,

        expectedDate:
          revision.expectedDate,

        actualDate:
          revision.actualDate,

        completed:
          Boolean(
            revision.actualDate
          ),

        recallQuality:
          revision.recallQuality,
      })
    );
  };

/* =========================================
   CHAPTER CALENDAR
========================================= */

export const getChapterCalendarData =
  (
    topics = [],
    revisions = []
  ) => {
    return topics.map(
      (topic) => ({
        topicId: topic.id,

        topicName:
          topic.name,

        revisions:
          revisions.filter(
            (revision) =>
              revision.topicId ===
              topic.id
          ),
      })
    );
  };

/* =========================================
   CALENDAR ADD REVISION
========================================= */

export const createManualRevision =
  ({
    topicId,
    revisionId,
    revisionNumber,
    date,
  }) => {
    return {
      id: revisionId,

      topicId,

      revisionNumber,

      expectedDate: date,

      actualDate: null,

      recallQuality: null,
    };
  };

/* =========================================
   TIMELINE THREADS
========================================= */

export const createTimelineThread =
  ({
    chapterId,
    chapterName,
    subjectId,
    startDate,
    expectedEndDate,
  }) => {
    return {
      chapterId,

      chapterName,

      subjectId,

      startDate,

      expectedEndDate,

      actualEndDate: null,

      state: "ongoing",

      holdReason: null,
    };
  };

/* =========================================
   HOLD THREAD
========================================= */

export const holdTimelineThread =
  (
    thread,
    holdReason
  ) => {
    return {
      ...thread,

      state: "hold",

      holdReason,
    };
  };

/* =========================================
   COMPLETE THREAD
========================================= */

export const completeTimelineThread =
  (
    thread,
    actualEndDate
  ) => {
    return {
      ...thread,

      state: "completed",

      actualEndDate,
    };
  };

/* =========================================
   RESUME THREAD
========================================= */

export const resumeTimelineThread =
  (thread) => {
    return {
      ...thread,

      state: "ongoing",

      holdReason: null,
    };
  };

/* =========================================
   TIMELINE CONFLICTS
========================================= */

export const findTimelineConflicts =
  (threads = []) => {
    const conflicts = [];

    for (
      let i = 0;
      i < threads.length;
      i++
    ) {
      for (
        let j = i + 1;
        j < threads.length;
        j++
      ) {
        const first =
          threads[i];

        const second =
          threads[j];

        if (
          first.subjectId !==
          second.subjectId
        ) {
          continue;
        }

        const overlap =
          first.startDate <=
            second.expectedEndDate &&
          second.startDate <=
            first.expectedEndDate;

        if (overlap) {
          conflicts.push({
            first:
              first.chapterName,

            second:
              second.chapterName,
          });
        }
      }
    }

    return conflicts;
  };

/* =========================================
   MCQ HEATMAP
========================================= */

export const getHeatmapCount =
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

export const getMonthlyMCQTotal =
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

/* =========================================
   MONTH LABEL
========================================= */

export const getCalendarTitle =
  (date) => {
    return getMonthYear(date);
  };
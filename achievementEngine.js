// engines/crunchmodeEngine.js

import { getToday } from "../utils/dateUtils";

/* =========================================
   ELIGIBILITY
========================================= */

export const canActivateCrunchMode =
  (
    syllabusTopics = [],
    revisions = []
  ) => {
    if (
      syllabusTopics.length === 0
    ) {
      return false;
    }

    return syllabusTopics.every(
      (topic) => {
        const topicRevisions =
          revisions.filter(
            (revision) =>
              revision.topicId ===
              topic.id
          );

        const rev2 =
          topicRevisions.find(
            (revision) =>
              revision.revisionNumber ===
              2
          );

        return (
          rev2 &&
          rev2.actualDate
        );
      }
    );
  };

/* =========================================
   ACTIVATE
========================================= */

export const activateCrunchMode =
  (test) => {
    return {
      testId: test.id,

      activatedAt:
        getToday(),

      endDate:
        test.date,

      active: true,
    };
  };

/* =========================================
   DEACTIVATE
========================================= */

export const deactivateCrunchMode =
  (crunchMode) => {
    return {
      ...crunchMode,

      active: false,

      completedAt:
        getToday(),
    };
  };

/* =========================================
   AUTO END
========================================= */

export const shouldAutoEndCrunchMode =
  (
    crunchMode,
    today = getToday()
  ) => {
    if (!crunchMode?.active) {
      return false;
    }

    return today >= crunchMode.endDate;
  };

/* =========================================
   REVISION PRIORITY
========================================= */

export const sortCrunchRevisions =
  (revisions = []) => {
    const priority = {
      2: 1,
      3: 2,
      4: 3,
    };

    return [...revisions].sort(
      (a, b) => {
        return (
          (priority[
            a.revisionNumber
          ] || 99) -
          (priority[
            b.revisionNumber
          ] || 99)
        );
      }
    );
  };

/* =========================================
   PENDING REVISIONS
========================================= */

export const getCrunchPendingRevisions =
  (revisions = []) => {
    return revisions.filter(
      (revision) =>
        !revision.actualDate &&
        revision.revisionNumber >=
          2
    );
  };

/* =========================================
   DAILY LOAD
========================================= */

export const getCrunchDailyLoad =
  (
    pendingCount,
    daysLeft
  ) => {
    if (daysLeft <= 0) {
      return pendingCount;
    }

    return Math.ceil(
      pendingCount /
        daysLeft
    );
  };

/* =========================================
   WORKLOAD COLOR
========================================= */

export const getCrunchLoadStatus =
  (dailyLoad) => {
    if (dailyLoad <= 7) {
      return "green";
    }

    if (dailyLoad <= 14) {
      return "yellow";
    }

    return "red";
  };

/* =========================================
   TIMELINE THREAD
========================================= */

export const createCrunchTimelineThread =
  (test) => {
    return {
      testId: test.id,

      testName: `${test.type}${test.number}`,

      startDate:
        getToday(),

      endDate: test.date,

      lane: "crunch",

      color: "#FF7C00",
    };
  };
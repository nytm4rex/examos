// engines/lectureEngine.js

import {
  getToday,
  calculateExpectedLectureEndDate,
} from "../utils/dateUtils";

import {
  durationToMinutes,
} from "../utils/formatUtils";

/* =========================================
   ACTIVE SESSION
========================================= */

export const startLectureSession =
  (lectureId) => {
    return {
      lectureId,

      sessionStartTime:
        new Date().toISOString(),

      isPaused: false,
    };
  };

/* =========================================
   PAUSE SESSION
========================================= */

export const pauseLectureSession =
  (
    activeLecture,
    sessionId
  ) => {
    const endTime =
      new Date().toISOString();

    const start =
      new Date(
        activeLecture.sessionStartTime
      );

    const end =
      new Date(endTime);

    const durationMinutes =
      Math.floor(
        (end - start) /
          60000
      );

    return {
      session: {
        id: sessionId,

        lectureId:
          activeLecture.lectureId,

        startTime:
          activeLecture.sessionStartTime,

        endTime,

        durationMinutes,
      },

      activeLecture: {
        ...activeLecture,

        isPaused: true,
      },
    };
  };

/* =========================================
   RESUME SESSION
========================================= */

export const resumeLectureSession =
  (
    activeLecture
  ) => {
    return {
      ...activeLecture,

      sessionStartTime:
        new Date().toISOString(),

      isPaused: false,
    };
  };

/* =========================================
   TOTAL TIME
========================================= */

export const getTotalLectureMinutes =
  (sessions = []) => {
    return sessions.reduce(
      (
        total,
        session
      ) =>
        total +
        (session.durationMinutes ||
          0),
      0
    );
  };

/* =========================================
   COMPLETE LECTURE
========================================= */

export const completeLecture =
  (
    lecture,
    sessions = []
  ) => {
    const actualMinutes =
      getTotalLectureMinutes(
        sessions
      );

    return {
      ...lecture,

      completed: true,

      completedDate:
        getToday(),

      actualMinutes,
    };
  };

/* =========================================
   DURATION CHECK
========================================= */

export const isLectureWithinExpectedTime =
  (
    lecture,
    actualMinutes
  ) => {
    const expected =
      durationToMinutes(
        lecture.duration
      );

    return (
      actualMinutes <=
      expected
    );
  };

/* =========================================
   LECTURE TIMELINE
========================================= */

export const getLectureTimeline =
  (lectures = []) => {
    const completed =
      lectures.filter(
        (
          lecture
        ) =>
          lecture.completed
      ).length;

    return {
      completed,

      total:
        lectures.length,

      percentage:
        lectures.length ===
        0
          ? 0
          : Math.round(
              (
                completed /
                lectures.length
              ) *
                100
            ),
    };
  };

/* =========================================
   EXPECTED END DATE
========================================= */

export const getExpectedLectureEndDate =
  (
    startDate,
    totalLectures
  ) => {
    return calculateExpectedLectureEndDate(
      startDate,
      totalLectures
    );
  };

/* =========================================
   ON TIME BONUS
========================================= */

export const completedWithinExpectedDate =
  (
    completedDate,
    expectedDate
  ) => {
    return (
      new Date(
        completedDate
      ) <=
      new Date(
        expectedDate
      )
    );
  };
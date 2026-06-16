// utils/dateUtils.js

import dayjs from "./dayjsConfig";

/* =========================================
   TODAY
========================================= */

export const getToday = () => {
  return dayjs().format("YYYY-MM-DD");
};

export const getNowISO = () => {
  return dayjs().toISOString();
};

/* =========================================
   DATE FORMATS
========================================= */

export const formatDate = (
  date
) => {
  if (!date) return "-";

  return dayjs(date).format(
    "DD MMM YYYY"
  );
};

export const formatShortDate = (
  date
) => {
  if (!date) return "-";

  return dayjs(date).format(
    "DD MMM"
  );
};

export const formatDateTime = (
  date
) => {
  if (!date) return "-";

  return dayjs(date).format(
    "DD MMM YYYY HH:mm"
  );
};

export const formatTime = (
  date
) => {
  if (!date) return "-";

  return dayjs(date).format(
    "HH:mm"
  );
};

/* =========================================
   REVISION SCHEDULING
========================================= */

export const addDays = (
  date,
  days
) => {
  return dayjs(date)
    .add(days, "day")
    .format("YYYY-MM-DD");
};

export const subtractDays = (
  date,
  days
) => {
  return dayjs(date)
    .subtract(days, "day")
    .format("YYYY-MM-DD");
};

export const createRevisionDate = (
  startDate,
  interval
) => {
  return dayjs(startDate)
    .add(interval, "day")
    .format("YYYY-MM-DD");
};

/* =========================================
   DIFFERENCES
========================================= */

export const getDaysDifference = (
  startDate,
  endDate
) => {
  return dayjs(endDate).diff(
    dayjs(startDate),
    "day"
  );
};

export const daysSince = (
  date
) => {
  if (!date) return null;

  return dayjs().diff(
    dayjs(date),
    "day"
  );
};

export const daysUntil = (
  date
) => {
  return dayjs(date).diff(
    dayjs(),
    "day"
  );
};

/* =========================================
   LAST REVISION BADGE
========================================= */

export const getLastRevisionDays = (
  date
) => {
  if (!date) return null;

  return dayjs().diff(
    dayjs(date),
    "day"
  );
};

/* =========================================
   COMPARISONS
========================================= */

export const isPastDate = (
  date
) => {
  return dayjs(date).isBefore(
    dayjs(),
    "day"
  );
};

export const isFutureDate = (
  date
) => {
  return dayjs(date).isAfter(
    dayjs(),
    "day"
  );
};

export const isToday = (
  date
) => {
  return dayjs(date).isToday();
};

export const isSameDate = (
  firstDate,
  secondDate
) => {
  return dayjs(firstDate).isSame(
    dayjs(secondDate),
    "day"
  );
};

/* =========================================
   REVISION STATUS
========================================= */

export const isRevisionCompleted =
  (revision) => {
    return Boolean(
      revision?.actualDate
    );
  };

export const isRevisionMissed = (
  revision
) => {
  if (!revision) return false;

  return (
    !revision.actualDate &&
    dayjs(
      revision.expectedDate
    ).isBefore(
      dayjs(),
      "day"
    )
  );
};

export const isRevisionDueToday =
  (revision) => {
    if (!revision) return false;

    return (
      !revision.actualDate &&
      dayjs(
        revision.expectedDate
      ).isSame(
        dayjs(),
        "day"
      )
    );
  };

/* =========================================
   WEEK HELPERS
========================================= */

export const getCurrentWeek =
  () => {
    return dayjs().week();
  };

export const getWeekNumber = (
  date
) => {
    return dayjs(date).week();
  };

export const getWeekStart = (
  date
) => {
    return dayjs(date)
      .startOf("week")
      .format("YYYY-MM-DD");
  };

export const getWeekEnd = (
  date
) => {
    return dayjs(date)
      .endOf("week")
      .format("YYYY-MM-DD");
  };

/* =========================================
   MONTH HELPERS
========================================= */

export const getCurrentMonth =
  () => {
    return dayjs().month();
  };

export const getMonthName = (
  date
) => {
    return dayjs(date).format(
      "MMMM"
    );
  };

export const getMonthYear = (
  date
) => {
    return dayjs(date).format(
      "MMMM YYYY"
    );
  };

/* =========================================
   TESTS
========================================= */

export const getDaysToTest = (
  testDate
) => {
  return dayjs(testDate).diff(
    dayjs(),
    "day"
  );
};

/* =========================================
   LECTURES
========================================= */

export const calculateExpectedLectureEndDate =
  (
    startDate,
    lectureCount
  ) => {
    return dayjs(startDate)
      .add(
        Math.max(
          lectureCount - 1,
          0
        ),
        "day"
      )
      .format("YYYY-MM-DD");
  };

/* =========================================
   EXPORTS
========================================= */

export default {
  getToday,
  getNowISO,

  formatDate,
  formatShortDate,
  formatDateTime,
  formatTime,

  addDays,
  subtractDays,
  createRevisionDate,

  getDaysDifference,
  daysSince,
  daysUntil,

  getLastRevisionDays,

  isPastDate,
  isFutureDate,
  isToday,
  isSameDate,

  isRevisionCompleted,
  isRevisionMissed,
  isRevisionDueToday,

  getCurrentWeek,
  getWeekNumber,
  getWeekStart,
  getWeekEnd,

  getCurrentMonth,
  getMonthName,
  getMonthYear,

  getDaysToTest,

  calculateExpectedLectureEndDate,
};
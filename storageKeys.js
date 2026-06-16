// utils/formatUtils.js

/* =========================================
   NUMBERS
========================================= */

export const formatNumber = (
  value = 0
) => {
  return Number(value).toLocaleString();
};

export const formatCompactNumber = (
  value = 0
) => {
  const number = Number(value);

  if (number >= 1_000_000_000) {
    return (
      (number / 1_000_000_000).toFixed(1) +
      "B"
    );
  }

  if (number >= 1_000_000) {
    return (
      (number / 1_000_000).toFixed(1) +
      "M"
    );
  }

  if (number >= 1_000) {
    return (
      (number / 1_000).toFixed(1) +
      "K"
    );
  }

  return String(number);
};

/* =========================================
   PERCENTAGES
========================================= */

export const formatPercentage = (
  completed = 0,
  total = 0
) => {
  if (!total) return "0%";

  const percentage =
    (completed / total) * 100;

  return `${Math.round(
    percentage
  )}%`;
};

export const calculatePercentage = (
  completed = 0,
  total = 0
) => {
  if (!total) return 0;

  return Math.round(
    (completed / total) * 100
  );
};

/* =========================================
   MCQ COUNTS
========================================= */

export const formatMCQProgress = (
  solved = 0,
  total = 0
) => {
  return `${solved}/${total}`;
};

/* =========================================
   REVISION COUNTS
========================================= */

export const formatRevisionCount = (
  revisionNumber = 0
) => {
  return `Rev ${revisionNumber}`;
};

/* =========================================
   TIME
========================================= */

export const minutesToDuration = (
  minutes = 0
) => {
  const hrs = Math.floor(
    minutes / 60
  );

  const mins = minutes % 60;

  return `${hrs}:${String(mins).padStart(
    2,
    "0"
  )}`;
};

export const durationToMinutes = (
  duration = "0:00"
) => {
  const [hrs, mins] =
    duration.split(":");

  return (
    Number(hrs) * 60 +
    Number(mins)
  );
};

export const formatMinutes = (
  minutes = 0
) => {
  const hrs = Math.floor(
    minutes / 60
  );

  const mins = minutes % 60;

  if (hrs === 0) {
    return `${mins}m`;
  }

  return `${hrs}h ${mins}m`;
};

/* =========================================
   LECTURE SESSIONS
========================================= */

export const formatSessionRange = (
  fromQuestion,
  toQuestion
) => {
  return `${fromQuestion}-${toQuestion}`;
};

/* =========================================
   TESTS
========================================= */

export const formatScore = (
  score = 0,
  maxScore = 720
) => {
  return `${score}/${maxScore}`;
};

export const formatMarksChange = (
  current = 0,
  previous = 0
) => {
  const diff =
    current - previous;

  if (diff > 0) {
    return `+${diff}`;
  }

  return `${diff}`;
};

/* =========================================
   DAYS
========================================= */

export const formatDaysRemaining = (
  days = 0
) => {
  if (days === 0)
    return "Today";

  if (days === 1)
    return "1 day";

  return `${days} days`;
};

/* =========================================
   STREAKS
========================================= */

export const formatStreak = (
  streak = 0
) => {
  if (streak === 1) {
    return "1 day";
  }

  return `${streak} days`;
};

/* =========================================
   BERRI
========================================= */

export const formatBerri = (
  amount = 0
) => {
  return `${formatNumber(
    amount
  )} B`;
};

export const formatBounty = (
  amount = 0
) => {
  return `${formatCompactNumber(
    amount
  )} B`;
};

/* =========================================
   STRINGS
========================================= */

export const capitalize = (
  text = ""
) => {
  if (!text.length) return "";

  return (
    text.charAt(0).toUpperCase() +
    text.slice(1)
  );
};

export const truncateText = (
  text = "",
  limit = 50
) => {
  if (text.length <= limit)
    return text;

  return (
    text.slice(0, limit) + "..."
  );
};
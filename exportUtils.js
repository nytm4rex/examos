// utils/idUtils.js

/* =========================================
   INTERNAL
========================================= */

const randomPart = () => {
  return Math.random()
    .toString(36)
    .substring(2, 10);
};

const timestampPart = () => {
  return Date.now().toString(36);
};

/* =========================================
   GENERIC
========================================= */

export const generateId = (prefix = "id") => {
  return `${prefix}_${timestampPart()}_${randomPart()}`;
};

/* =========================================
   REVISION DOMAIN
========================================= */

export const generateChapterId = () =>
  generateId("chapter");

export const generateTopicId = () =>
  generateId("topic");

export const generateRevisionId = () =>
  generateId("revision");

/* =========================================
   LECTURES
========================================= */

export const generateLectureId = () =>
  generateId("lecture");

export const generateLectureSessionId = () =>
  generateId("lecture_session");

/* =========================================
   MCQ DOMAIN
========================================= */

export const generateMCQReferenceId = () =>
  generateId("mcq_ref");

export const generateMCQAttemptId = () =>
  generateId("mcq_attempt");

export const generateMCQSessionId = () =>
  generateId("mcq_session");

export const generateMCQBookmarkId = () =>
  generateId("mcq_bookmark");

/* =========================================
   TEST DOMAIN
========================================= */

export const generateTestId = () =>
  generateId("test");

export const generateTestBookmarkId = () =>
  generateId("test_bookmark");

export const generateTestResultId = () =>
  generateId("test_result");

/* =========================================
   USER DOMAIN
========================================= */

export const generateAchievementId = () =>
  generateId("achievement");

export const generateShopTransactionId = () =>
  generateId("shop");

/* =========================================
   EXPORTS
========================================= */

export default {
  generateId,

  generateChapterId,
  generateTopicId,
  generateRevisionId,

  generateLectureId,
  generateLectureSessionId,

  generateMCQReferenceId,
  generateMCQAttemptId,
  generateMCQSessionId,
  generateMCQBookmarkId,

  generateTestId,
  generateTestBookmarkId,
  generateTestResultId,

  generateAchievementId,
  generateShopTransactionId,
};
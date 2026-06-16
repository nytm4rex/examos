// storage/RevisionStorage.js

import AsyncStorage from "@react-native-async-storage/async-storage";
import STORAGE_KEYS from "./storageKeys";

/* =========================================
   SUBJECTS
========================================= */

export const getSubjects = async () => {
  try {
    const data = await AsyncStorage.getItem(
      STORAGE_KEYS.REVISION_SUBJECTS
    );

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("getSubjects:", error);
    return [];
  }
};

export const saveSubjects = async (subjects) => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.REVISION_SUBJECTS,
      JSON.stringify(subjects)
    );

    return true;
  } catch (error) {
    console.error("saveSubjects:", error);
    return false;
  }
};

/* =========================================
   CHAPTERS
========================================= */

/*
Chapter Structure

{
  id,
  subjectId,
  name,

  tags: [],

  shortNotesStatus: "na",

  topics: [
    {
      id,
      name,

      tags: [],

      linkedLectureIds: [],

      revisions: [
        {
          id,
          revisionNumber,

          expectedDate,

          actualDate,

          recallQuality
        }
      ]
    }
  ]
}
*/

export const getChapters = async () => {
  try {
    const data = await AsyncStorage.getItem(
      STORAGE_KEYS.REVISION_CHAPTERS
    );

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("getChapters:", error);
    return [];
  }
};

export const saveChapters = async (chapters) => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.REVISION_CHAPTERS,
      JSON.stringify(chapters)
    );

    return true;
  } catch (error) {
    console.error("saveChapters:", error);
    return false;
  }
};

/* =========================================
   REVISION CALENDAR
========================================= */

export const getRevisionCalendar = async () => {
  try {
    const data = await AsyncStorage.getItem(
      STORAGE_KEYS.REVISION_CALENDAR
    );

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(
      "getRevisionCalendar:",
      error
    );

    return [];
  }
};

export const saveRevisionCalendar = async (
  calendarData
) => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.REVISION_CALENDAR,
      JSON.stringify(calendarData)
    );

    return true;
  } catch (error) {
    console.error(
      "saveRevisionCalendar:",
      error
    );

    return false;
  }
};

/* =========================================
   RESET
========================================= */

export const clearRevisionData =
  async () => {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.REVISION_SUBJECTS,
        STORAGE_KEYS.REVISION_CHAPTERS,
        STORAGE_KEYS.REVISION_CALENDAR,
      ]);

      return true;
    } catch (error) {
      console.error(
        "clearRevisionData:",
        error
      );

      return false;
    }
  };
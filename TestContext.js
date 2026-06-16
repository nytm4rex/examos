// storage/MCQStorage.js

import AsyncStorage from "@react-native-async-storage/async-storage";
import STORAGE_KEYS from "./storageKeys";

/* =========================================
   MCQ CHAPTERS
========================================= */

export const getMCQChapters = async () => {
  try {
    const data = await AsyncStorage.getItem(
      STORAGE_KEYS.MCQ_CHAPTERS
    );

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("getMCQChapters:", error);
    return [];
  }
};

export const saveMCQChapters = async (
  chapters
) => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.MCQ_CHAPTERS,
      JSON.stringify(chapters)
    );

    return true;
  } catch (error) {
    console.error("saveMCQChapters:", error);
    return false;
  }
};

/* =========================================
   MCQ REFERENCES
========================================= */

export const getMCQReferences =
  async () => {
    try {
      const data = await AsyncStorage.getItem(
        STORAGE_KEYS.MCQ_REFERENCES
      );

      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error(
        "getMCQReferences:",
        error
      );

      return [];
    }
  };

export const saveMCQReferences =
  async (references) => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.MCQ_REFERENCES,
        JSON.stringify(references)
      );

      return true;
    } catch (error) {
      console.error(
        "saveMCQReferences:",
        error
      );

      return false;
    }
  };

/* =========================================
   MCQ BOOKMARKS
========================================= */

export const getMCQBookmarks =
  async () => {
    try {
      const data = await AsyncStorage.getItem(
        STORAGE_KEYS.MCQ_BOOKMARKS
      );

      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error(
        "getMCQBookmarks:",
        error
      );

      return [];
    }
  };

export const saveMCQBookmarks =
  async (bookmarks) => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.MCQ_BOOKMARKS,
        JSON.stringify(bookmarks)
      );

      return true;
    } catch (error) {
      console.error(
        "saveMCQBookmarks:",
        error
      );

      return false;
    }
  };

/* =========================================
   MCQ CALENDAR
========================================= */

export const getMCQCalendar =
  async () => {
    try {
      const data = await AsyncStorage.getItem(
        STORAGE_KEYS.MCQ_CALENDAR
      );

      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error(
        "getMCQCalendar:",
        error
      );

      return [];
    }
  };

export const saveMCQCalendar =
  async (calendarData) => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.MCQ_CALENDAR,
        JSON.stringify(calendarData)
      );

      return true;
    } catch (error) {
      console.error(
        "saveMCQCalendar:",
        error
      );

      return false;
    }
  };

/* =========================================
   MCQ STATS CACHE
========================================= */

export const getMCQStatsCache =
  async () => {
    try {
      const data = await AsyncStorage.getItem(
        STORAGE_KEYS.MCQ_STATS_CACHE
      );

      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(
        "getMCQStatsCache:",
        error
      );

      return null;
    }
  };

export const saveMCQStatsCache =
  async (stats) => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.MCQ_STATS_CACHE,
        JSON.stringify(stats)
      );

      return true;
    } catch (error) {
      console.error(
        "saveMCQStatsCache:",
        error
      );

      return false;
    }
  };

export const clearMCQStatsCache =
  async () => {
    try {
      await AsyncStorage.removeItem(
        STORAGE_KEYS.MCQ_STATS_CACHE
      );

      return true;
    } catch (error) {
      console.error(
        "clearMCQStatsCache:",
        error
      );

      return false;
    }
  };

/* =========================================
   RESET MCQ DOMAIN
========================================= */

export const clearMCQData =
  async () => {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.MCQ_CHAPTERS,
        STORAGE_KEYS.MCQ_REFERENCES,
        STORAGE_KEYS.MCQ_BOOKMARKS,
        STORAGE_KEYS.MCQ_CALENDAR,
        STORAGE_KEYS.MCQ_STATS_CACHE,
      ]);

      return true;
    } catch (error) {
      console.error(
        "clearMCQData:",
        error
      );

      return false;
    }
  };
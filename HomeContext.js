// storage/TestStorage.js

import AsyncStorage from "@react-native-async-storage/async-storage";
import STORAGE_KEYS from "./storageKeys";

/* =========================================
   TESTS
========================================= */

export const getTests = async () => {
  try {
    const data = await AsyncStorage.getItem(
      STORAGE_KEYS.TESTS
    );

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("getTests:", error);
    return [];
  }
};

export const saveTests = async (tests) => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.TESTS,
      JSON.stringify(tests)
    );

    return true;
  } catch (error) {
    console.error("saveTests:", error);
    return false;
  }
};

/* =========================================
   TEST BOOKMARKS
========================================= */

export const getTestBookmarks =
  async () => {
    try {
      const data = await AsyncStorage.getItem(
        STORAGE_KEYS.TEST_BOOKMARKS
      );

      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error(
        "getTestBookmarks:",
        error
      );

      return [];
    }
  };

export const saveTestBookmarks =
  async (bookmarks) => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.TEST_BOOKMARKS,
        JSON.stringify(bookmarks)
      );

      return true;
    } catch (error) {
      console.error(
        "saveTestBookmarks:",
        error
      );

      return false;
    }
  };

/* =========================================
   TEST RESULTS
========================================= */

export const getTestResults =
  async () => {
    try {
      const data = await AsyncStorage.getItem(
        STORAGE_KEYS.TEST_RESULTS
      );

      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error(
        "getTestResults:",
        error
      );

      return [];
    }
  };

export const saveTestResults =
  async (results) => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.TEST_RESULTS,
        JSON.stringify(results)
      );

      return true;
    } catch (error) {
      console.error(
        "saveTestResults:",
        error
      );

      return false;
    }
  };

/* =========================================
   CRUNCH MODE HISTORY
========================================= */

export const getCrunchModeHistory =
  async () => {
    try {
      const data = await AsyncStorage.getItem(
        STORAGE_KEYS.CRUNCH_MODE_HISTORY
      );

      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error(
        "getCrunchModeHistory:",
        error
      );

      return [];
    }
  };

export const saveCrunchModeHistory =
  async (history) => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.CRUNCH_MODE_HISTORY,
        JSON.stringify(history)
      );

      return true;
    } catch (error) {
      console.error(
        "saveCrunchModeHistory:",
        error
      );

      return false;
    }
  };

/* =========================================
   FST PREP HISTORY
========================================= */

export const getFSTPrepHistory =
  async () => {
    try {
      const data = await AsyncStorage.getItem(
        STORAGE_KEYS.FST_PREP_HISTORY
      );

      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error(
        "getFSTPrepHistory:",
        error
      );

      return [];
    }
  };

export const saveFSTPrepHistory =
  async (history) => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.FST_PREP_HISTORY,
        JSON.stringify(history)
      );

      return true;
    } catch (error) {
      console.error(
        "saveFSTPrepHistory:",
        error
      );

      return false;
    }
  };

/* =========================================
   RESET TEST DOMAIN
========================================= */

export const clearTestData =
  async () => {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.TESTS,
        STORAGE_KEYS.TEST_BOOKMARKS,
        STORAGE_KEYS.TEST_RESULTS,
        STORAGE_KEYS.CRUNCH_MODE_HISTORY,
        STORAGE_KEYS.FST_PREP_HISTORY,
      ]);

      return true;
    } catch (error) {
      console.error(
        "clearTestData:",
        error
      );

      return false;
    }
  };
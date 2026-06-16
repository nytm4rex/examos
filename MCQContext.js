// storage/LectureStorage.js

import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_KEYS } from "./storageKeys";

/* =========================================
   LECTURES
========================================= */

export const getLectures = async () => {
  try {
    const data = await AsyncStorage.getItem(
      STORAGE_KEYS.LECTURES
    );

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("getLectures:", error);
    return [];
  }
};

export const saveLectures = async (lectures) => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.LECTURES,
      JSON.stringify(lectures)
    );
    return true;
  } catch (error) {
    console.error("saveLectures:", error);
    return false;
  }
};

/* =========================================
   LECTURE SESSIONS
========================================= */

export const getLectureSessions =
  async () => {
    try {
      const data = await AsyncStorage.getItem(
        STORAGE_KEYS.LECTURE_SESSIONS
      );

      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error(
        "getLectureSessions:",
        error
      );

      return [];
    }
  };

export const saveLectureSessions =
  async (sessions) => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.LECTURE_SESSIONS,
        JSON.stringify(sessions)
      );
      return true;
    } catch (error) {
      console.error(
        "saveLectureSessions:",
        error
      );
      return false;
    }
  };

/* =========================================
   ACTIVE LECTURE TIMER
========================================= */

export const getActiveLecture =
  async () => {
    try {
      const data = await AsyncStorage.getItem(
        STORAGE_KEYS.ACTIVE_LECTURE
      );

      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(
        "getActiveLecture:",
        error
      );

      return null;
    }
  };

export const saveActiveLecture =
  async (activeLecture) => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.ACTIVE_LECTURE,
        JSON.stringify(activeLecture)
      );
      return true;
    } catch (error) {
      console.error(
        "saveActiveLecture:",
        error
      );
      return false;
    }
  };

export const clearActiveLecture =
  async () => {
    try {
      await AsyncStorage.removeItem(
        STORAGE_KEYS.ACTIVE_LECTURE
      );
      return true;
    } catch (error) {
      console.error(
        "clearActiveLecture:",
        error
      );
      return false;
    }
  };

/* =========================================
   RESET
========================================= */

export const clearLectureData =
  async () => {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.LECTURES,
        STORAGE_KEYS.LECTURE_SESSIONS,
        STORAGE_KEYS.ACTIVE_LECTURE,
      ]);
      return true;
    } catch (error) {
      console.error(
        "clearLectureData:",
        error
      );
      return false;
    }
  };
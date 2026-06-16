// storage/UserStorage.js

import AsyncStorage from "@react-native-async-storage/async-storage";
import STORAGE_KEYS from "./storageKeys";

/* =========================================
   SETTINGS
========================================= */

export const getSettings = async () => {
  try {
    const data = await AsyncStorage.getItem(
      STORAGE_KEYS.USER_SETTINGS
    );

    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("getSettings:", error);
    return null;
  }
};

export const saveSettings = async (settings) => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.USER_SETTINGS,
      JSON.stringify(settings)
    );

    return true;
  } catch (error) {
    console.error("saveSettings:", error);
    return false;
  }
};

/* =========================================
   STREAK
========================================= */

export const getStreak = async () => {
  try {
    const data = await AsyncStorage.getItem(
      STORAGE_KEYS.USER_STREAK
    );

    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("getStreak:", error);
    return null;
  }
};

export const saveStreak = async (streak) => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.USER_STREAK,
      JSON.stringify(streak)
    );

    return true;
  } catch (error) {
    console.error("saveStreak:", error);
    return false;
  }
};

/* =========================================
   BERRI
========================================= */

export const getBerri = async () => {
  try {
    const data = await AsyncStorage.getItem(
      STORAGE_KEYS.USER_BERRI
    );

    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("getBerri:", error);
    return null;
  }
};

export const saveBerri = async (berri) => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.USER_BERRI,
      JSON.stringify(berri)
    );

    return true;
  } catch (error) {
    console.error("saveBerri:", error);
    return false;
  }
};

/* =========================================
   ACHIEVEMENTS
========================================= */

export const getAchievements = async () => {
  try {
    const data = await AsyncStorage.getItem(
      STORAGE_KEYS.USER_ACHIEVEMENTS
    );

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("getAchievements:", error);
    return [];
  }
};

export const saveAchievements = async (
  achievements
) => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.USER_ACHIEVEMENTS,
      JSON.stringify(achievements)
    );

    return true;
  } catch (error) {
    console.error("saveAchievements:", error);
    return false;
  }
};

/* =========================================
   SHOP
========================================= */

export const getShopData = async () => {
  try {
    const data = await AsyncStorage.getItem(
      STORAGE_KEYS.USER_SHOP
    );

    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("getShopData:", error);
    return null;
  }
};

export const saveShopData = async (
  shopData
) => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.USER_SHOP,
      JSON.stringify(shopData)
    );

    return true;
  } catch (error) {
    console.error("saveShopData:", error);
    return false;
  }
};

/* =========================================
   APPEARANCE
========================================= */

export const getAppearance = async () => {
  try {
    const data = await AsyncStorage.getItem(
      STORAGE_KEYS.USER_APPEARANCE
    );

    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("getAppearance:", error);
    return null;
  }
};

export const saveAppearance = async (
  appearance
) => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.USER_APPEARANCE,
      JSON.stringify(appearance)
    );

    return true;
  } catch (error) {
    console.error("saveAppearance:", error);
    return false;
  }
};

/* =========================================
   HOME STATE
========================================= */

export const getHomeState = async () => {
  try {
    const data = await AsyncStorage.getItem(
      STORAGE_KEYS.HOME_STATE
    );

    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("getHomeState:", error);
    return null;
  }
};

export const saveHomeState = async (
  homeState
) => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.HOME_STATE,
      JSON.stringify(homeState)
    );

    return true;
  } catch (error) {
    console.error("saveHomeState:", error);
    return false;
  }
};

/* =========================================
   RESET USER DATA
========================================= */

export const clearUserData = async () => {
  try {
    await AsyncStorage.multiRemove([
      STORAGE_KEYS.USER_SETTINGS,
      STORAGE_KEYS.USER_STREAK,
      STORAGE_KEYS.USER_BERRI,
      STORAGE_KEYS.USER_ACHIEVEMENTS,
      STORAGE_KEYS.USER_SHOP,
      STORAGE_KEYS.USER_APPEARANCE,
      STORAGE_KEYS.HOME_STATE,
    ]);

    return true;
  } catch (error) {
    console.error(
      "clearUserData:",
      error
    );

    return false;
  }
};
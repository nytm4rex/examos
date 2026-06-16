// utils/exportUtils.js

import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_KEYS } from "../storage/storageKeys";

import { getToday } from "./dateUtils";

/* =========================================
   ALL STORAGE KEYS
========================================= */

const EXPORT_KEYS = Object.values(
  STORAGE_KEYS
);

/* =========================================
   BUILD BACKUP OBJECT
========================================= */

export const buildBackupObject =
  async () => {
    const backup = {
      exportedAt: new Date().toISOString(),
      version: "1.0",
      data: {},
    };

    for (const key of EXPORT_KEYS) {
      const value =
        await AsyncStorage.getItem(
          key
        );

      backup.data[key] = value
        ? JSON.parse(value)
        : null;
    }

    return backup;
  };

/* =========================================
   EXPORT TO FILE
========================================= */

export const exportBackup =
  async () => {
    try {
      const backup =
        await buildBackupObject();

      const fileName = `ExamOS_Backup_${getToday()}.json`;

      const fileUri =
        FileSystem.documentDirectory +
        fileName;

      await FileSystem.writeAsStringAsync(
        fileUri,
        JSON.stringify(
          backup,
          null,
          2
        )
      );

      const available =
        await Sharing.isAvailableAsync();

      if (available) {
        await Sharing.shareAsync(
          fileUri
        );
      }

      return {
        success: true,
        fileUri,
      };
    } catch (error) {
      console.log(
        "Export Error:",
        error
      );

      return {
        success: false,
        error:
          error?.message ||
          "Export failed",
      };
    }
  };

/* =========================================
   IMPORT BACKUP
========================================= */

export const importBackup =
  async (backupObject) => {
    try {
      if (
        !backupObject ||
        !backupObject.data
      ) {
        throw new Error(
          "Invalid backup file"
        );
      }

      for (const key of EXPORT_KEYS) {
        const value =
          backupObject.data[key];

        if (
          value !== undefined &&
          value !== null
        ) {
          await AsyncStorage.setItem(
            key,
            JSON.stringify(value)
          );
        }
      }

      return {
        success: true,
      };
    } catch (error) {
      console.log(
        "Import Error:",
        error
      );

      return {
        success: false,
        error:
          error?.message ||
          "Import failed",
      };
    }
  };

/* =========================================
   CLEAR ALL APP DATA
========================================= */

export const clearAllData =
  async () => {
    try {
      await AsyncStorage.multiRemove(
        EXPORT_KEYS
      );

      return true;
    } catch (error) {
      console.log(
        "Clear Data Error:",
        error
      );

      return false;
    }
  };

/* =========================================
   BACKUP VALIDATION
========================================= */

export const isValidBackup =
  (backupObject) => {
    if (!backupObject) {
      return false;
    }

    if (!backupObject.data) {
      return false;
    }

    if (!backupObject.version) {
      return false;
    }

    return true;
  };

/* =========================================
   BACKUP INFO
========================================= */

export const getBackupSummary =
  (backupObject) => {
    if (!backupObject) {
      return null;
    }

    return {
      version:
        backupObject.version,
      exportedAt:
        backupObject.exportedAt,
      keys: Object.keys(
        backupObject.data || {}
      ).length,
    };
  };
// context/SettingsContext.js

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import * as UserStorage from "../storage/UserStorage";

const SettingsContext =
  createContext();

export const useSettings =
  () =>
    useContext(
      SettingsContext
    );

export const SettingsProvider =
  ({ children }) => {
    const [
      settings,
      setSettings,
    ] = useState(null);

    const [loading, setLoading] =
      useState(true);

    useEffect(() => {
      loadSettings();
    }, []);

    const loadSettings =
      async () => {
        try {
          setLoading(true);

          const loaded =
            await UserStorage.loadSettings();

          setSettings(
            loaded
          );
        } catch (error) {
          console.log(
            "SettingsContext load error",
            error
          );
        } finally {
          setLoading(false);
        }
      };

    const saveSettings =
      async (
        newSettings
      ) => {
        setSettings(
          newSettings
        );

        await UserStorage.saveSettings(
          newSettings
        );
      };

    /* =========================
       REVISION INTERVALS
    ========================= */

    const updateRevisionIntervals =
      async (
        intervals
      ) => {
        const updated = {
          ...settings,

          revisionIntervals:
            intervals,
        };

        await saveSettings(
          updated
        );
      };

    /* =========================
       DAILY MCQ TARGET
    ========================= */

    const updateDailyMCQTarget =
      async (
        target
      ) => {
        const updated = {
          ...settings,

          dailyMCQTarget:
            target,
        };

        await saveSettings(
          updated
        );
      };

    /* =========================
       LEAGUES
    ========================= */

    const toggleLeagues =
      async () => {
        const updated = {
          ...settings,

          leaguesEnabled:
            !settings.leaguesEnabled,
        };

        await saveSettings(
          updated
        );
      };

    /* =========================
       BERRI
    ========================= */

    const toggleBerri =
      async () => {
        const updated = {
          ...settings,

          berriEnabled:
            !settings.berriEnabled,
        };

        await saveSettings(
          updated
        );
      };

    /* =========================
       APPEARANCE
    ========================= */

    const updateAppearance =
      async (
        appearance
      ) => {
        const updated = {
          ...settings,

          appearance,
        };

        await saveSettings(
          updated
        );
      };

    /* =========================
       EXPORT DATE
    ========================= */

    const updateLastExportDate =
      async (
        date
      ) => {
        const updated = {
          ...settings,

          lastExportDate:
            date,
        };

        await saveSettings(
          updated
        );
      };

    /* =========================
       RESET
    ========================= */

    const resetSettings =
      async () => {
        await UserStorage.resetSettings();

        await loadSettings();
      };

    return (
      <SettingsContext.Provider
        value={{
          loading,

          settings,

          loadSettings,
          saveSettings,

          updateRevisionIntervals,

          updateDailyMCQTarget,

          toggleLeagues,
          toggleBerri,

          updateAppearance,

          updateLastExportDate,

          resetSettings,
        }}
      >
        {children}
      </SettingsContext.Provider>
    );
  };
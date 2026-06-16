// context/LectureContext.js

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import * as LectureStorage from "../storage/LectureStorage";

const LectureContext =
  createContext();

export const useLecture =
  () =>
    useContext(
      LectureContext
    );

export const LectureProvider =
  ({ children }) => {
    const [lectures, setLectures] =
      useState([]);

    const [
      activeLecture,
      setActiveLecture,
    ] = useState(null);

    const [loading, setLoading] =
      useState(true);

    useEffect(() => {
      loadData();
    }, []);

    const loadData =
      async () => {
        try {
          setLoading(true);

          const loadedLectures =
            await LectureStorage.loadLectures();

          const loadedActiveLecture =
            await LectureStorage.loadActiveLecture();

          setLectures(
            loadedLectures
          );

          setActiveLecture(
            loadedActiveLecture
          );
        } catch (error) {
          console.log(
            "LectureContext load error",
            error
          );
        } finally {
          setLoading(false);
        }
      };

    /* ==========================
       LECTURES
    ========================== */

    const saveLectures =
      async (
        newLectures
      ) => {
        setLectures(
          newLectures
        );

        await LectureStorage.saveLectures(
          newLectures
        );
      };

    /* ==========================
       ACTIVE
    ========================== */

    const saveActiveLecture =
      async (
        lecture
      ) => {
        setActiveLecture(
          lecture
        );

        await LectureStorage.saveActiveLecture(
          lecture
        );
      };

    const clearActiveLecture =
      async () => {
        setActiveLecture(
          null
        );

        await LectureStorage.clearActiveLecture();
      };

    /* ==========================
       SESSIONS
    ========================== */

    const addSession =
      async (
        lectureId,
        session
      ) => {
        const sessions =
          await LectureStorage.loadSessions(
            lectureId
          );

        const updated =
          [
            ...sessions,
            session,
          ];

        await LectureStorage.saveSessions(
          lectureId,
          updated
        );
      };

    const getSessions =
      async (
        lectureId
      ) => {
        return await LectureStorage.loadSessions(
          lectureId
        );
      };

    /* ==========================
       RESET
    ========================== */

    const resetLectureData =
      async () => {
        await LectureStorage.clearLectureDomain();

        setLectures([]);

        setActiveLecture(
          null
        );
      };

    return (
      <LectureContext.Provider
        value={{
          loading,

          lectures,
          activeLecture,

          loadData,

          saveLectures,

          saveActiveLecture,
          clearActiveLecture,

          addSession,
          getSessions,

          resetLectureData,
        }}
      >
        {children}
      </LectureContext.Provider>
    );
  };
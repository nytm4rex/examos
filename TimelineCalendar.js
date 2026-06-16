// context/MCQContext.js

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import * as MCQStorage from "../storage/MCQStorage";

const MCQContext =
  createContext();

export const useMCQ =
  () => useContext(MCQContext);

export const MCQProvider =
  ({ children }) => {
    const [
      chapters,
      setChapters,
    ] = useState([]);

    const [
      references,
      setReferences,
    ] = useState([]);

    const [
      solveAttempts,
      setSolveAttempts,
    ] = useState([]);

    const [
      bookmarks,
      setBookmarks,
    ] = useState([]);

    const [loading, setLoading] =
      useState(true);

    useEffect(() => {
      loadData();
    }, []);

    const loadData =
      async () => {
        try {
          setLoading(true);

          const loadedChapters =
            await MCQStorage.loadChapters();

          const loadedReferences =
            await MCQStorage.loadReferences();

          const loadedAttempts =
            await MCQStorage.loadSolveAttempts();

          const loadedBookmarks =
            await MCQStorage.loadBookmarks();

          setChapters(
            loadedChapters
          );

          setReferences(
            loadedReferences
          );

          setSolveAttempts(
            loadedAttempts
          );

          setBookmarks(
            loadedBookmarks
          );
        } catch (error) {
          console.log(
            "MCQContext load error",
            error
          );
        } finally {
          setLoading(false);
        }
      };

    /* =========================
       CHAPTERS
    ========================= */

    const saveChapters =
      async (
        newChapters
      ) => {
        setChapters(
          newChapters
        );

        await MCQStorage.saveChapters(
          newChapters
        );
      };

    /* =========================
       REFERENCES
    ========================= */

    const saveReferences =
      async (
        newReferences
      ) => {
        setReferences(
          newReferences
        );

        await MCQStorage.saveReferences(
          newReferences
        );
      };

    /* =========================
       ATTEMPTS
    ========================= */

    const saveSolveAttempts =
      async (
        newAttempts
      ) => {
        setSolveAttempts(
          newAttempts
        );

        await MCQStorage.saveSolveAttempts(
          newAttempts
        );
      };

    /* =========================
       BOOKMARKS
    ========================= */

    const saveBookmarks =
      async (
        newBookmarks
      ) => {
        setBookmarks(
          newBookmarks
        );

        await MCQStorage.saveBookmarks(
          newBookmarks
        );
      };

    /* =========================
       SESSIONS
    ========================= */

    const addSession =
      async (
        attemptId,
        session
      ) => {
        const sessions =
          await MCQStorage.loadSessions(
            attemptId
          );

        const updated =
          [
            ...sessions,
            session,
          ];

        await MCQStorage.saveSessions(
          attemptId,
          updated
        );
      };

    const getSessions =
      async (
        attemptId
      ) => {
        return await MCQStorage.loadSessions(
          attemptId
        );
      };

    /* =========================
       RESET
    ========================= */

    const resetMCQData =
      async () => {
        await MCQStorage.clearMCQDomain();

        setChapters([]);

        setReferences([]);

        setSolveAttempts([]);

        setBookmarks([]);
      };

    return (
      <MCQContext.Provider
        value={{
          loading,

          chapters,
          references,
          solveAttempts,
          bookmarks,

          loadData,

          saveChapters,
          saveReferences,
          saveSolveAttempts,
          saveBookmarks,

          addSession,
          getSessions,

          resetMCQData,
        }}
      >
        {children}
      </MCQContext.Provider>
    );
  };
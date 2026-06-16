// context/TestContext.js

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import * as TestStorage from "../storage/TestStorage";

const TestContext =
  createContext();

export const useTest =
  () => useContext(TestContext);

export const TestProvider =
  ({ children }) => {
    const [tests, setTests] =
      useState([]);

    const [
      bookmarks,
      setBookmarks,
    ] = useState([]);

    const [
      results,
      setResults,
    ] = useState([]);

    const [
      fstHistory,
      setFstHistory,
    ] = useState([]);

    const [
      crunchHistory,
      setCrunchHistory,
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

          const loadedTests =
            await TestStorage.loadTests();

          const loadedBookmarks =
            await TestStorage.loadBookmarks();

          const loadedResults =
            await TestStorage.loadResults();

          const loadedFST =
            await TestStorage.loadFSTPrepHistory();

          const loadedCrunch =
            await TestStorage.loadCrunchModeHistory();

          setTests(
            loadedTests
          );

          setBookmarks(
            loadedBookmarks
          );

          setResults(
            loadedResults
          );

          setFstHistory(
            loadedFST
          );

          setCrunchHistory(
            loadedCrunch
          );
        } catch (error) {
          console.log(
            "TestContext load error",
            error
          );
        } finally {
          setLoading(false);
        }
      };

    /* =========================
       TESTS
    ========================= */

    const saveTests =
      async (
        newTests
      ) => {
        setTests(newTests);

        await TestStorage.saveTests(
          newTests
        );
      };

    /* =========================
       RESULTS
    ========================= */

    const saveResults =
      async (
        newResults
      ) => {
        setResults(
          newResults
        );

        await TestStorage.saveResults(
          newResults
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

        await TestStorage.saveBookmarks(
          newBookmarks
        );
      };

    /* =========================
       FST HISTORY
    ========================= */

    const saveFSTHistory =
      async (
        history
      ) => {
        setFstHistory(
          history
        );

        await TestStorage.saveFSTPrepHistory(
          history
        );
      };

    /* =========================
       CRUNCH HISTORY
    ========================= */

    const saveCrunchHistory =
      async (
        history
      ) => {
        setCrunchHistory(
          history
        );

        await TestStorage.saveCrunchModeHistory(
          history
        );
      };

    /* =========================
       RESET
    ========================= */

    const resetTestData =
      async () => {
        await TestStorage.clearTestDomain();

        setTests([]);

        setBookmarks([]);

        setResults([]);

        setFstHistory([]);

        setCrunchHistory(
          []
        );
      };

    return (
      <TestContext.Provider
        value={{
          loading,

          tests,
          bookmarks,
          results,

          fstHistory,
          crunchHistory,

          loadData,

          saveTests,
          saveResults,
          saveBookmarks,

          saveFSTHistory,
          saveCrunchHistory,

          resetTestData,
        }}
      >
        {children}
      </TestContext.Provider>
    );
  };
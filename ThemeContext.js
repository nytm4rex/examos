// context/RevisionContext.js

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import * as RevisionStorage from "../storage/RevisionStorage";

const RevisionContext =
  createContext();

export const useRevision =
  () =>
    useContext(
      RevisionContext
    );

export const RevisionProvider =
  ({ children }) => {
    const [subjects, setSubjects] =
      useState([]);

    const [chapters, setChapters] =
      useState([]);

    const [topics, setTopics] =
      useState([]);

    const [revisions, setRevisions] =
      useState([]);

    const [
      topicLectureLinks,
      setTopicLectureLinks,
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

          const loadedSubjects =
            await RevisionStorage.loadSubjects();

          const loadedChapters =
            await RevisionStorage.loadChapters();

          const loadedTopics =
            await RevisionStorage.loadTopics();

          const loadedRevisions =
            await RevisionStorage.loadRevisions();

          const loadedLinks =
            await RevisionStorage.loadTopicLectureLinks();

          setSubjects(
            loadedSubjects
          );

          setChapters(
            loadedChapters
          );

          setTopics(
            loadedTopics
          );

          setRevisions(
            loadedRevisions
          );

          setTopicLectureLinks(
            loadedLinks
          );
        } catch (error) {
          console.log(
            "RevisionContext load error",
            error
          );
        } finally {
          setLoading(false);
        }
      };

    /* ==========================
       SUBJECTS
    ========================== */

    const saveSubjects =
      async (
        newSubjects
      ) => {
        setSubjects(
          newSubjects
        );

        await RevisionStorage.saveSubjects(
          newSubjects
        );
      };

    /* ==========================
       CHAPTERS
    ========================== */

    const saveChapters =
      async (
        newChapters
      ) => {
        setChapters(
          newChapters
        );

        await RevisionStorage.saveChapters(
          newChapters
        );
      };

    /* ==========================
       TOPICS
    ========================== */

    const saveTopics =
      async (
        newTopics
      ) => {
        setTopics(
          newTopics
        );

        await RevisionStorage.saveTopics(
          newTopics
        );
      };

    /* ==========================
       REVISIONS
    ========================== */

    const saveRevisions =
      async (
        newRevisions
      ) => {
        setRevisions(
          newRevisions
        );

        await RevisionStorage.saveRevisions(
          newRevisions
        );
      };

    /* ==========================
       LINKS
    ========================== */

    const saveTopicLectureLinks =
      async (
        newLinks
      ) => {
        setTopicLectureLinks(
          newLinks
        );

        await RevisionStorage.saveTopicLectureLinks(
          newLinks
        );
      };

    /* ==========================
       RESET
    ========================== */

    const resetRevisionData =
      async () => {
        await RevisionStorage.clearRevisionDomain();

        setSubjects([]);

        setChapters([]);

        setTopics([]);

        setRevisions([]);

        setTopicLectureLinks(
          []
        );
      };

    return (
      <RevisionContext.Provider
        value={{
          loading,

          subjects,
          chapters,
          topics,
          revisions,
          topicLectureLinks,

          loadData,

          saveSubjects,
          saveChapters,
          saveTopics,
          saveRevisions,
          saveTopicLectureLinks,

          resetRevisionData,
        }}
      >
        {children}
      </RevisionContext.Provider>
    );
  };
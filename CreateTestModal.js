// screens/test/TestDetailsScreen.js

import React, {
  useState,
} from "react";

import {
  ScrollView,
} from "react-native";

import {
  useNavigation,
} from "@react-navigation/native";

import InfoCard from "../../components/cards/InfoCard";

import SectionHeader from "../../components/common/SectionHeader";

import FloatingButton from "../../components/common/FloatingButton";

import ScoreEntryModal from "../../components/modals/ScoreEntryModal";
import TestBookmarkModal from "../../components/modals/TestBookmarkModal";

import { useTest } from "../../context/TestContext";
import { useRevision } from "../../context/RevisionContext";

import {
  calculateTestResult,
} from "../../engines/testEngine";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function TestDetailsScreen({
  route,
}) {
  const navigation =
    useNavigation();

  const { testId } =
    route.params;

  const {
    tests,
    bookmarks,

    saveResult,
    addBookmark,
  } = useTest();

  const {
    chapters,
    topics,
  } = useRevision();

  const [
    scoreVisible,
    setScoreVisible,
  ] = useState(false);

  const [
    bookmarkVisible,
    setBookmarkVisible,
  ] = useState(false);

  const test =
    tests.find(
      (test) =>
        test.id === testId
    );

  if (!test) {
    return null;
  }

  const testBookmarks =
    bookmarks.filter(
      (bookmark) =>
        bookmark.testId ===
        testId
    );

  return (
    <ScrollView
      style={
        GLOBAL_STYLES.screen
      }
    >
      <InfoCard
        title="Test"
        value={`${test.type} ${test.number}`}
      />

      <InfoCard
        title="Date"
        value={
          test.testDate
        }
      />

      <InfoCard
        title="Status"
        value={
          test.status
        }
      />

      {test.status ===
        "finished" && (
        <>
          <InfoCard
            title="Score"
            value={
              test.totalScore
            }
          />

          <InfoCard
            title="Physics"
            value={
              test.physicsScore ||
              0
            }
          />

          <InfoCard
            title="Chemistry"
            value={
              test.chemistryScore ||
              0
            }
          />

          <InfoCard
            title="Biology"
            value={
              test.biologyScore ||
              0
            }
          />
        </>
      )}

      <SectionHeader
        title="Bookmarks"
      />

      {testBookmarks.map(
        (bookmark) => (
          <InfoCard
            key={bookmark.id}
            title={`Q${bookmark.questionNumber}`}
            value={
              bookmark.category
            }
            onPress={() =>
              navigation.navigate(
                "TestBookmarkDetails",
                {
                  bookmarkId:
                    bookmark.id,
                }
              )
            }
          />
        )
      )}

      {test.status !==
        "finished" && (
        <InfoCard
          title="Enter Score"
          value="Open"
          icon="create"
          onPress={() =>
            setScoreVisible(
              true
            )
          }
        />
      )}

      <FloatingButton
        icon="bookmark"
        onPress={() =>
          setBookmarkVisible(
            true
          )
        }
      />

      <ScoreEntryModal
        visible={
          scoreVisible
        }
        onClose={() =>
          setScoreVisible(
            false
          )
        }
        onSave={(rawData) => {
          const result =
            calculateTestResult(
              rawData
            );

          saveResult(
            testId,
            result
          );

          setScoreVisible(
            false
          );
        }}
      />

      <TestBookmarkModal
        visible={
          bookmarkVisible
        }
        subjects={[
          {
            id: "physics",
            shortName: "P",
          },
          {
            id: "pc",
            shortName: "PC",
          },
          {
            id: "ioc",
            shortName: "IOC",
          },
          {
            id: "oc",
            shortName: "OC",
          },
          {
            id: "biology",
            shortName: "B",
          },
        ]}
        chapters={chapters}
        topics={topics}
        onClose={() =>
          setBookmarkVisible(
            false
          )
        }
        onSave={(data) => {
          addBookmark({
            testId,
            ...data,
          });

          setBookmarkVisible(
            false
          );
        }}
      />
    </ScrollView>
  );
}
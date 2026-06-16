// screens/test/TestsScreen.js

import React, {
  useMemo,
  useState,
} from "react";

import {
  View,
  FlatList,
} from "react-native";

import {
  useNavigation,
} from "@react-navigation/native";

import SearchBar from "../../components/common/SearchBar";
import FloatingButton from "../../components/common/FloatingButton";
import EmptyState from "../../components/common/EmptyState";

import TestCard from "../../components/cards/TestCard";

import CreateTestModal from "../../components/modals/CreateTestModal";

import { useTest } from "../../context/TestContext";

import {
  createTest,
} from "../../engines/testEngine";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function TestsScreen() {
  const navigation =
    useNavigation();

  const {
    tests,
    chapters,

    addTest,
  } = useTest();

  const [search, setSearch] =
    useState("");

  const [
    createVisible,
    setCreateVisible,
  ] = useState(false);

  const filteredTests =
    useMemo(() => {
      return tests.filter(
        (test) =>
          `${test.type} ${test.number}`
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [tests, search]);

  return (
    <View
      style={
        GLOBAL_STYLES.screen
      }
    >
      <SearchBar
        value={search}
        onChangeText={
          setSearch
        }
        placeholder="Search Test"
      />

      <FlatList
        data={filteredTests}
        keyExtractor={(
          item
        ) => item.id}
        renderItem={({
          item,
        }) => (
          <TestCard
            testType={
              item.type
            }
            testNumber={
              item.number
            }
            testDate={
              item.testDate
            }
            isFinished={
              item.status ===
              "finished"
            }
            score={
              item.totalScore
            }
            scoreChange={
              item.scoreChange
            }
            crunchMode={
              item.crunchMode
            }
            onPress={() =>
              navigation.navigate(
                "TestDetails",
                {
                  testId:
                    item.id,
                }
              )
            }
          />
        )}
        ListEmptyComponent={
          <EmptyState
            title="No Tests"
            subtitle="Create your first test."
          />
        }
      />

      <FloatingButton
        icon="add"
        onPress={() =>
          setCreateVisible(
            true
          )
        }
      />

      <CreateTestModal
        visible={
          createVisible
        }
        chapters={
          chapters || []
        }
        onClose={() =>
          setCreateVisible(
            false
          )
        }
        onSave={(data) => {
          addTest(
            createTest(data)
          );

          setCreateVisible(
            false
          );
        }}
      />
    </View>
  );
}
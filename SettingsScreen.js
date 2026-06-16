// screens/mcq/MCQReferencesScreen.js

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
import EmptyState from "../../components/common/EmptyState";

import MCQReferenceCard from "../../components/cards/MCQReferenceCard";

import MCQSessionModal from "../../components/modals/MCQSessionModal";

import { useMCQ } from "../../context/MCQContext";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function MCQReferencesScreen({
  route,
}) {
  const navigation =
    useNavigation();

  const { chapterId } =
    route.params;

  const {
    references,

    saveSession,
  } = useMCQ();

  const [search, setSearch] =
    useState("");

  const [
    selectedReference,
    setSelectedReference,
  ] = useState(null);

  const [
    modalVisible,
    setModalVisible,
  ] = useState(false);

  const filteredReferences =
    useMemo(() => {
      return references
        .filter(
          (ref) =>
            ref.chapterId ===
            chapterId
        )
        .filter(
          (ref) =>
            ref.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )
        );
    }, [
      references,
      chapterId,
      search,
    ]);

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
        placeholder="Search Reference"
      />

      <FlatList
        data={
          filteredReferences
        }
        keyExtractor={(
          item
        ) => item.id}
        renderItem={({
          item,
        }) => (
          <MCQReferenceCard
            referenceName={
              item.name
            }
            solved={
              item.solvedMcqs ||
              0
            }
            total={
              item.totalMcqs ||
              0
            }
            attemptNumber={
              item.attemptNumber ||
              1
            }
            completedAttempt={
              item.completedAttempt
            }
            onSaveSession={() => {
              setSelectedReference(
                item
              );

              setModalVisible(
                true
              );
            }}
            onPress={() =>
              navigation.navigate(
                "MCQRefDetails",
                {
                  referenceId:
                    item.id,
                }
              )
            }
          />
        )}
        ListEmptyComponent={
          <EmptyState
            title="No References"
          />
        }
      />

      <MCQSessionModal
        visible={modalVisible}
        maxMCQs={
          selectedReference?.totalMcqs ||
          0
        }
        onClose={() =>
          setModalVisible(
            false
          )
        }
        onSave={(data) => {
          saveSession(
            selectedReference.id,
            data
          );

          setModalVisible(
            false
          );
        }}
      />
    </View>
  );
}
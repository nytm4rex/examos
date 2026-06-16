// screens/mcq/MCQRefDetailsScreen.js

import React, {
  useState,
} from "react";

import {
  ScrollView,
  FlatList,
} from "react-native";

import InfoCard from "../../components/cards/InfoCard";

import SectionHeader from "../../components/common/SectionHeader";

import FloatingButton from "../../components/common/FloatingButton";

import MCQBookmarkModal from "../../components/modals/MCQBookmarkModal";

import { useMCQ } from "../../context/MCQContext";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function MCQRefDetailsScreen({
  route,
}) {
  const {
    referenceId,
  } = route.params;

  const {
    references,
    bookmarks,

    addBookmark,
  } = useMCQ();

  const [
    bookmarkVisible,
    setBookmarkVisible,
  ] = useState(false);

  const reference =
    references.find(
      (ref) =>
        ref.id ===
        referenceId
    );

  const referenceBookmarks =
    bookmarks.filter(
      (bookmark) =>
        bookmark.referenceId ===
        referenceId
    );

  if (!reference)
    return null;

  return (
    <ScrollView
      style={
        GLOBAL_STYLES.screen
      }
    >
      <InfoCard
        title="Reference"
        value={reference.name}
      />

      <InfoCard
        title="MCQs"
        value={`${reference.solvedMcqs}/${reference.totalMcqs}`}
      />

      <InfoCard
        title="Attempt"
        value={`${reference.attemptNumber}x`}
      />

      <SectionHeader
        title="Bookmarks"
      />

      <FlatList
        scrollEnabled={
          false
        }
        data={
          referenceBookmarks
        }
        keyExtractor={(
          item
        ) => item.id}
        renderItem={({
          item,
        }) => (
          <InfoCard
            title={`Q${item.questionNumber}`}
            value={
              item.category
            }
          />
        )}
      />

      <FloatingButton
        icon="add"
        onPress={() =>
          setBookmarkVisible(
            true
          )
        }
      />

      <MCQBookmarkModal
        visible={
          bookmarkVisible
        }
        totalQuestions={
          reference.totalMcqs
        }
        onClose={() =>
          setBookmarkVisible(
            false
          )
        }
        onSave={(data) => {
          addBookmark({
            referenceId,
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
// screens/mcq/MCQBookmarkDetailsScreen.js

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

import ConfirmModal from "../../components/common/ConfirmModal";

import { useMCQ } from "../../context/MCQContext";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function MCQBookmarkDetailsScreen({
  route,
}) {
  const navigation =
    useNavigation();

  const { bookmarkId } =
    route.params;

  const {
    bookmarks,
    removeBookmark,
  } = useMCQ();

  const [
    deleteVisible,
    setDeleteVisible,
  ] = useState(false);

  const bookmark =
    bookmarks.find(
      (bookmark) =>
        bookmark.id ===
        bookmarkId
    );

  if (!bookmark) {
    return null;
  }

  return (
    <ScrollView
      style={
        GLOBAL_STYLES.screen
      }
    >
      <InfoCard
        title="Question"
        value={`Q${bookmark.questionNumber}`}
      />

      <InfoCard
        title="Category"
        value={bookmark.category}
      />

      <InfoCard
        title="Chapter"
        value={
          bookmark.chapterName ||
          "-"
        }
      />

      <InfoCard
        title="Topic"
        value={
          bookmark.topicName ||
          "-"
        }
      />

      <InfoCard
        title="Attempts"
        value={
          bookmark.attempts ||
          0
        }
      />

      <InfoCard
        title="Delete Bookmark"
        value="Delete"
        icon="trash"
        onPress={() =>
          setDeleteVisible(
            true
          )
        }
      />

      <ConfirmModal
        visible={
          deleteVisible
        }
        title="Delete Bookmark"
        message="Delete this bookmark?"
        danger
        confirmText="Delete"
        onCancel={() =>
          setDeleteVisible(
            false
          )
        }
        onConfirm={() => {
          removeBookmark(
            bookmarkId
          );

          navigation.goBack();
        }}
      />
    </ScrollView>
  );
}
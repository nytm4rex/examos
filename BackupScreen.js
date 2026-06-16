// screens/mcq/MCQChaptersScreen.js

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

import ChapterCard from "../../components/cards/ChapterCard";

import { useMCQ } from "../../context/MCQContext";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function MCQChaptersScreen({
  route,
}) {
  const navigation =
    useNavigation();

  const { subjectId } =
    route.params;

  const {
    chapters,
    references,
    bookmarks,
  } = useMCQ();

  const [search, setSearch] =
    useState("");

  const filteredChapters =
    useMemo(() => {
      return chapters
        .filter(
          (chapter) =>
            chapter.subjectId ===
            subjectId
        )
        .filter(
          (chapter) =>
            chapter.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )
        );
    }, [
      chapters,
      search,
      subjectId,
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
        placeholder="Search Chapter"
      />

      <FlatList
        data={
          filteredChapters
        }
        keyExtractor={(
          item
        ) => item.id}
        renderItem={({
          item,
        }) => {
          const chapterRefs =
            references.filter(
              (ref) =>
                ref.chapterId ===
                item.id
            );

          const solved =
            chapterRefs.reduce(
              (
                total,
                ref
              ) =>
                total +
                (ref.solvedMcqs ||
                  0),
              0
            );

          const totalMcqs =
            chapterRefs.reduce(
              (
                total,
                ref
              ) =>
                total +
                (ref.totalMcqs ||
                  0),
              0
            );

          const chapterBookmarks =
            bookmarks.filter(
              (bookmark) =>
                bookmark.chapterId ===
                item.id
            );

          return (
            <ChapterCard
              chapterName={
                item.name
              }
              completed={
                solved
              }
              total={
                totalMcqs
              }
              progressLabel="MCQs"
              bookmarkCount={
                chapterBookmarks.length
              }
              onPress={() =>
                navigation.navigate(
                  "MCQReferences",
                  {
                    chapterId:
                      item.id,
                  }
                )
              }
            />
          );
        }}
        ListEmptyComponent={
          <EmptyState
            title="No Chapters"
          />
        }
      />
    </View>
  );
}
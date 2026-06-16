// screens/revision/ChaptersScreen.js

import React, {
  useMemo,
  useState,
} from "react";

import {
  View,
  FlatList,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import SearchBar from "../../components/common/SearchBar";
import ChapterCard from "../../components/cards/ChapterCard";
import EmptyState from "../../components/common/EmptyState";

import { useRevision } from "../../context/RevisionContext";
import { useLecture } from "../../context/LectureContext";

import {
  getChapterRevisionStats,
} from "../../engines/revisionEngine";

import {
  GLOBAL_STYLES,
} from "../../styles/globalStyles";

export default function ChaptersScreen({
  route,
}) {
  const navigation =
    useNavigation();

  const {
    subjectId,
  } = route.params;

  const {
    chapters,
    topics,
    revisions,
  } = useRevision();

  const { lectures } =
    useLecture();

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
      subjectId,
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
          const stats =
            getChapterRevisionStats(
              item.id,
              topics,
              revisions
            );

          const chapterLectures =
            lectures.filter(
              (lecture) =>
                lecture.chapterId ===
                item.id
            );

          return (
            <ChapterCard
              chapterName={
                item.name
              }
              tags={
                item.tags || []
              }
              completed={
                stats.completed
              }
              total={
                stats.total
              }
              progressLabel="Topics"
              statusLabel={
                stats.lastRevisionLabel
              }
              statusType={
                stats.statusType
              }
              shortNotesStatus={
                item.shortNotesStatus
              }
              lectureEnabled
              onLecturePress={() =>
                navigation.navigate(
                  "Lectures",
                  {
                    chapterId:
                      item.id,
                  }
                )
              }
              onPress={() =>
                navigation.navigate(
                  "Topics",
                  {
                    chapterId:
                      item.id,
                    chapterName:
                      item.name,
                  }
                )
              }
            />
          );
        }}
        ListEmptyComponent={
          <EmptyState
            title="No Chapters Found"
          />
        }
        showsVerticalScrollIndicator={
          false
        }
      />
    </View>
  );
}
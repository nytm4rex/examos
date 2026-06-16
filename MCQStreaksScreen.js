// screens/revision/SubjectsScreen.js

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
import SubjectCard from "../../components/cards/SubjectCard";
import EmptyState from "../../components/common/EmptyState";

import { useRevision } from "../../context/RevisionContext";

import { CONSTANTS_DATA } from "../../data/constantsData";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function SubjectsScreen() {
  const navigation =
    useNavigation();

  const {
    chapters,
  } = useRevision();

  const [search, setSearch] =
    useState("");

  const subjectData =
    useMemo(() => {
      return CONSTANTS_DATA.SUBJECTS.filter(
        (subject) =>
          subject.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      ).map((subject) => {
        const subjectChapters =
          chapters.filter(
            (chapter) =>
              chapter.subjectId ===
              subject.id
          );

        const completed =
          subjectChapters.filter(
            (chapter) =>
              chapter.completed
          ).length;

        return {
          ...subject,

          total:
            subjectChapters.length,

          completed,
        };
      });
    }, [chapters, search]);

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
        placeholder="Search Subject"
      />

      <FlatList
        data={subjectData}
        keyExtractor={(
          item
        ) => item.id}
        renderItem={({
          item,
        }) => (
          <SubjectCard
            subjectName={
              item.name
            }
            icon={item.icon}
            completed={
              item.completed
            }
            total={item.total}
            progressLabel="Chapters"
            onPress={() =>
              navigation.navigate(
                "Chapters",
                {
                  subjectId:
                    item.id,
                  subjectName:
                    item.name,
                }
              )
            }
          />
        )}
        ListEmptyComponent={
          <EmptyState
            title="No Subjects Found"
          />
        }
        showsVerticalScrollIndicator={
          false
        }
      />
    </View>
  );
}
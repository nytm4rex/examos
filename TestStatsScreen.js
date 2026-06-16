// screens/revision/LectureScreen.js

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
import FloatingButton from "../../components/common/FloatingButton";
import EmptyState from "../../components/common/EmptyState";

import LectureCard from "../../components/cards/LectureCard";

import AddModal from "../../components/modals/AddModal";

import { useLecture } from "../../context/LectureContext";

import {
  createLecture,
} from "../../engines/lectureEngine";

import {
  GLOBAL_STYLES,
} from "../../styles/globalStyles";

export default function LectureScreen({
  route,
}) {
  const navigation =
    useNavigation();

  const { chapterId } =
    route.params;

  const {
    lectures,

    activeLecture,

    addLecture,

    startLecture,

    pauseLecture,

    resumeLecture,
  } = useLecture();

  const [search, setSearch] =
    useState("");

  const [
    addVisible,
    setAddVisible,
  ] = useState(false);

  const filteredLectures =
    useMemo(() => {
      return lectures
        .filter(
          (lecture) =>
            lecture.chapterId ===
            chapterId
        )
        .filter(
          (lecture) =>
            lecture.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )
        );
    }, [
      lectures,
      chapterId,
      search,
    ]);

  const getStatus =
    (lectureId) => {
      if (
        !activeLecture
      )
        return "idle";

      if (
        activeLecture.lectureId !==
        lectureId
      )
        return "idle";

      return activeLecture.isPaused
        ? "paused"
        : "playing";
    };

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
        placeholder="Search Lecture"
      />

      <FlatList
        data={
          filteredLectures
        }
        keyExtractor={(
          item
        ) => item.id}
        renderItem={({
          item,
        }) => (
          <LectureCard
            lectureName={
              item.name
            }
            duration={
              item.duration
            }
            actualTime={`${item.actualMinutes}m`}
            tag={item.tag}
            status={getStatus(
              item.id
            )}
            onPlay={() =>
              startLecture(
                item.id
              )
            }
            onPause={() =>
              pauseLecture()
            }
            onResume={() =>
              resumeLecture()
            }
            onPress={() =>
              navigation.navigate(
                "LectureDetails",
                {
                  lectureId:
                    item.id,
                }
              )
            }
          />
        )}
        ListEmptyComponent={
          <EmptyState
            title="No Lectures"
            subtitle="Add your first lecture."
          />
        }
      />

      <FloatingButton
        icon="add"
        onPress={() =>
          setAddVisible(true)
        }
      />

      <AddModal
        visible={addVisible}
        title="Add Lecture"
        fields={[
          {
            key: "name",
            label:
              "Lecture Name",
            type: "text",
          },

          {
            key: "duration",
            label:
              "Duration (1:59)",
            type: "text",
          },

          {
            key: "tag",
            label: "Tag",
            type:
              "singleSelect",
            options: [
              "Concept Heavy",
              "Theory",
              "Numericals",
              "Mixed",
            ],
          },
        ]}
        onClose={() =>
          setAddVisible(false)
        }
        onSave={(data) => {
          addLecture(
            createLecture({
              chapterId,
              ...data,
            })
          );

          setAddVisible(
            false
          );
        }}
      />
    </View>
  );
}
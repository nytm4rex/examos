// screens/revision/TopicsScreen.js

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

import RevisionCard from "../../components/cards/RevisionCard";

import AddModal from "../../components/modals/AddModal";
import RecallQualityModal from "../../components/modals/RecallQualityModal";

import { useRevision } from "../../context/RevisionContext";

import {
  createTopic,
  createRevision,
} from "../../engines/revisionEngine";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function TopicsScreen({
  route,
}) {
  const navigation =
    useNavigation();

  const { chapterId } =
    route.params;

  const {
    topics,
    revisions,

    addTopic,
    addRevision,
  } = useRevision();

  const [search, setSearch] =
    useState("");

  const [
    addVisible,
    setAddVisible,
  ] = useState(false);

  const [
    selectedTopic,
    setSelectedTopic,
  ] = useState(null);

  const [
    recallVisible,
    setRecallVisible,
  ] = useState(false);

  const filteredTopics =
    useMemo(() => {
      return topics
        .filter(
          (topic) =>
            topic.chapterId ===
            chapterId
        )
        .filter(
          (topic) =>
            topic.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )
        );
    }, [
      topics,
      chapterId,
      search,
    ]);

  const handleRevision =
    (topic) => {
      setSelectedTopic(
        topic
      );

      setRecallVisible(
        true
      );
    };

  const submitRevision =
    (quality) => {
      addRevision(
        createRevision({
          topicId:
            selectedTopic.id,

          recallQuality:
            quality,
        })
      );

      setRecallVisible(
        false
      );
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
        placeholder="Search Topic"
      />

      <FlatList
        data={
          filteredTopics
        }
        keyExtractor={(
          item
        ) => item.id}
        renderItem={({
          item,
        }) => {
          const topicRevisions =
            revisions.filter(
              (revision) =>
                revision.topicId ===
                item.id
            );

          const revisionCount =
            topicRevisions.length;

          return (
            <RevisionCard
              topicName={
                item.name
              }
              tags={
                item.tags || []
              }
              revisionLabel={`Rev ${revisionCount}`}
              revisionCompleted={
                revisionCount
              }
              revisionTotal={4}
              lastRevisionLabel={
                item.lastRevisionLabel ||
                "-"
              }
              onPlayPress={() =>
                handleRevision(
                  item
                )
              }
              onPress={() =>
                navigation.navigate(
                  "TopicDetails",
                  {
                    topicId:
                      item.id,
                  }
                )
              }
            />
          );
        }}
        ListEmptyComponent={
          <EmptyState
            title="No Topics Yet"
            subtitle="Create your first topic."
          />
        }
        showsVerticalScrollIndicator={
          false
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
        title="Add Topic"
        fields={[
          {
            key: "name",
            label:
              "Topic Name",
            type: "text",
          },
        ]}
        onClose={() =>
          setAddVisible(false)
        }
        onSave={(data) => {
          addTopic(
            createTopic({
              chapterId,
              ...data,
            })
          );

          setAddVisible(
            false
          );
        }}
      />

      <RecallQualityModal
        visible={
          recallVisible
        }
        onGood={() =>
          submitRevision(
            "good"
          )
        }
        onOkay={() =>
          submitRevision(
            "okay"
          )
        }
        onClose={() =>
          setRecallVisible(
            false
          )
        }
      />
    </View>
  );
}
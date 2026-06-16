// screens/revision/TopicDetailsScreen.js

import React, {
  useMemo,
  useState,
} from "react";

import {
  View,
  Text,
  FlatList,
  Alert,
} from "react-native";

import SectionHeader from "../../components/common/SectionHeader";
import ConfirmModal from "../../components/common/ConfirmModal";

import InfoCard from "../../components/cards/InfoCard";
import LectureCard from "../../components/cards/LectureCard";

import LinkLectureModal from "../../components/modals/LinkLectureModal";

import { useRevision } from "../../context/RevisionContext";
import { useLecture } from "../../context/LectureContext";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function TopicDetailsScreen({
  route,
  navigation,
}) {
  const { topicId } =
    route.params;

  const {
    topics,
    revisions,

    topicLectureLinks,

    removeTopic,

    saveTopicLectureLinks,
  } = useRevision();

  const { lectures } =
    useLecture();

  const [
    linkVisible,
    setLinkVisible,
  ] = useState(false);

  const [
    deleteVisible,
    setDeleteVisible,
  ] = useState(false);

  const topic =
    topics.find(
      (t) =>
        t.id === topicId
    );

  const topicRevisions =
    useMemo(
      () =>
        revisions.filter(
          (revision) =>
            revision.topicId ===
            topicId
        ),
      [
        revisions,
        topicId,
      ]
    );

  const linkedIds =
    topicLectureLinks[
      topicId
    ] || [];

  const linkedLectures =
    lectures.filter(
      (lecture) =>
        linkedIds.includes(
          lecture.id
        )
    );

  if (!topic) {
    return null;
  }

  return (
    <View
      style={
        GLOBAL_STYLES.screen
      }
    >
      <InfoCard
        title="Topic"
        value={topic.name}
      />

      <InfoCard
        title="Total Revisions"
        value={
          topicRevisions.length
        }
      />

      <SectionHeader
        title="Linked Lectures"
      />

      <FlatList
        data={
          linkedLectures
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
            tag={item.tag}
            status="idle"
          />
        )}
        ListEmptyComponent={
          <Text
            style={{
              color:
                "white",
            }}
          >
            No linked lectures.
          </Text>
        }
      />

      <SectionHeader
        title="Revision History"
      />

      <FlatList
        data={
          topicRevisions
        }
        keyExtractor={(
          item
        ) => item.id}
        renderItem={({
          item,
        }) => (
          <InfoCard
            title={`Rev ${item.revisionNumber}`}
            value={
              item.recallQuality
            }
            subtitle={
              item.date
            }
          />
        )}
      />

      <InfoCard
        title="Link Lectures"
        value="Manage"
        icon="link"
        onPress={() =>
          setLinkVisible(true)
        }
      />

      <InfoCard
        title="Delete Topic"
        value="Delete"
        icon="trash"
        onPress={() =>
          setDeleteVisible(
            true
          )
        }
      />

      <LinkLectureModal
        visible={
          linkVisible
        }
        lectures={lectures}
        linkedLectureIds={
          linkedIds
        }
        onClose={() =>
          setLinkVisible(
            false
          )
        }
        onSave={(
          selectedIds
        ) => {
          saveTopicLectureLinks(
            topicId,
            selectedIds
          );

          setLinkVisible(
            false
          );
        }}
      />

      <ConfirmModal
        visible={
          deleteVisible
        }
        title="Delete Topic"
        message="This topic and all revision history will be deleted."
        confirmText="Delete"
        danger
        onCancel={() =>
          setDeleteVisible(
            false
          )
        }
        onConfirm={() => {
          removeTopic(
            topicId
          );

          navigation.goBack();
        }}
      />
    </View>
  );
}
// screens/revision/LectureDetailsScreen.js

import React, {
  useMemo,
  useState,
} from "react";

import {
  ScrollView,
} from "react-native";

import {
  useNavigation,
} from "@react-navigation/native";

import InfoCard from "../../components/cards/InfoCard";

import SectionHeader from "../../components/common/SectionHeader";

import ConfirmModal from "../../components/common/ConfirmModal";

import { useLecture } from "../../context/LectureContext";

import {
  GLOBAL_STYLES,
} from "../../styles/globalStyles";

export default function LectureDetailsScreen({
  route,
}) {
  const navigation =
    useNavigation();

  const { lectureId } =
    route.params;

  const {
    lectures,
    sessions,

    completeLecture,

    removeLecture,
  } = useLecture();

  const [
    deleteStep1,
    setDeleteStep1,
  ] = useState(false);

  const [
    deleteStep2,
    setDeleteStep2,
  ] = useState(false);

  const lecture =
    lectures.find(
      (lecture) =>
        lecture.id ===
        lectureId
    );

  const lectureSessions =
    useMemo(
      () =>
        sessions.filter(
          (session) =>
            session.lectureId ===
            lectureId
        ),
      [
        sessions,
        lectureId,
      ]
    );

  if (!lecture)
    return null;

  return (
    <ScrollView
      style={
        GLOBAL_STYLES.screen
      }
    >
      <InfoCard
        title="Lecture"
        value={lecture.name}
      />

      <InfoCard
        title="Duration"
        value={
          lecture.duration
        }
      />

      <InfoCard
        title="Actual Time"
        value={`${lecture.actualMinutes}m`}
      />

      <InfoCard
        title="Tag"
        value={lecture.tag}
      />

      <InfoCard
        title="Status"
        value={
          lecture.completed
            ? "Completed"
            : "Pending"
        }
      />

      <InfoCard
        title="Complete Lecture"
        value="Complete"
        icon="checkmark"
        onPress={() =>
          completeLecture(
            lectureId
          )
        }
      />

      <SectionHeader
        title="Sessions"
      />

      {lectureSessions.map(
        (session) => (
          <InfoCard
            key={session.id}
            title={`${session.durationMinutes} min`}
            subtitle={
              session.startTime
            }
            value=""
          />
        )
      )}

      <InfoCard
        title="Delete Lecture"
        value="Delete"
        icon="trash"
        onPress={() =>
          setDeleteStep1(
            true
          )
        }
      />

      {/* First Confirmation */}

      <ConfirmModal
        visible={
          deleteStep1
        }
        title="Delete Lecture"
        message="Are you sure you want to delete this lecture?"
        danger
        confirmText="Continue"
        onCancel={() =>
          setDeleteStep1(
            false
          )
        }
        onConfirm={() => {
          setDeleteStep1(
            false
          );

          setDeleteStep2(
            true
          );
        }}
      />

      {/* Second Confirmation */}

      <ConfirmModal
        visible={
          deleteStep2
        }
        title="Final Warning"
        message="This action cannot be undone."
        danger
        confirmText="Delete"
        onCancel={() =>
          setDeleteStep2(
            false
          )
        }
        onConfirm={() => {
          removeLecture(
            lectureId
          );

          navigation.goBack();
        }}
      />
    </ScrollView>
  );
}
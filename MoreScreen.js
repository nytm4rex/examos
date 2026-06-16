// screens/revision/RevisionCalendarScreen.js

import React, {
  useMemo,
} from "react";

import {
  ScrollView,
  View,
} from "react-native";

import TimelineCalendar from "../../components/calendar/TimelineCalendar";
import RevisionGrid from "../../components/calendar/RevisionGrid";

import SectionHeader from "../../components/common/SectionHeader";
import EmptyState from "../../components/common/EmptyState";

import { useRevision } from "../../context/RevisionContext";
import { useLecture } from "../../context/LectureContext";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function RevisionCalendarScreen() {
  const {
    chapters,
    topics,
    revisions,
  } = useRevision();

  const {
    lectures,
  } = useLecture();

  const timelineEvents =
    useMemo(() => {
      const events = [];

      chapters.forEach(
        (chapter) => {
          events.push({
            id: `${chapter.id}_created`,
            title: `${chapter.name} Created`,
            date:
              chapter.createdAt,
          });
        }
      );

      lectures.forEach(
        (lecture) => {
          if (
            lecture.completedDate
          ) {
            events.push({
              id: `${lecture.id}_completed`,
              title: `${lecture.name} Completed`,
              date:
                lecture.completedDate,
            });
          }
        }
      );

      revisions.forEach(
        (revision) => {
          events.push({
            id: revision.id,
            title: `Rev ${revision.revisionNumber}`,
            date:
              revision.revisionDate,
          });
        }
      );

      return events.sort(
        (a, b) =>
          new Date(a.date) -
          new Date(b.date)
      );
    }, [
      chapters,
      lectures,
      revisions,
    ]);

  const gridData =
    useMemo(() => {
      return topics.map(
        (topic) => ({
          id: topic.id,

          name:
            topic.name,

          revisions:
            revisions.filter(
              (
                revision
              ) =>
                revision.topicId ===
                topic.id
            ),
        })
      );
    }, [
      topics,
      revisions,
    ]);

  return (
    <ScrollView
      style={
        GLOBAL_STYLES.screen
      }
    >
      <SectionHeader
        title="Timeline"
      />

      {timelineEvents.length >
      0 ? (
        <TimelineCalendar
          events={
            timelineEvents
          }
        />
      ) : (
        <EmptyState
          title="No Timeline Data"
        />
      )}

      <View
        style={{
          marginTop: 30,
        }}
      >
        <SectionHeader
          title="Revision Grid"
        />

        {gridData.length >
        0 ? (
          <RevisionGrid
            topics={
              gridData
            }
          />
        ) : (
          <EmptyState
            title="No Topics Found"
          />
        )}
      </View>
    </ScrollView>
  );
}
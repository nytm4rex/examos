// screens/mcq/MCQStatsScreen.js

import React, {
  useMemo,
} from "react";

import {
  ScrollView,
} from "react-native";

import InfoCard from "../../components/cards/InfoCard";
import SectionHeader from "../../components/common/SectionHeader";

import { useMCQ } from "../../context/MCQContext";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function MCQStatsScreen() {
  const {
    references,
    sessions,
    bookmarks,
  } = useMCQ();

  const stats =
    useMemo(() => {
      const totalSolved =
        references.reduce(
          (sum, ref) =>
            sum +
            (ref.solvedMcqs || 0),
          0
        );

      const totalMcqs =
        references.reduce(
          (sum, ref) =>
            sum +
            (ref.totalMcqs || 0),
          0
        );

      const bestSession =
        sessions.reduce(
          (best, current) =>
            (current.count || 0) >
            (best.count || 0)
              ? current
              : best,
          {}
        );

      return {
        totalSolved,
        totalMcqs,

        totalReferences:
          references.length,

        totalBookmarks:
          bookmarks.length,

        totalSessions:
          sessions.length,

        averagePerSession:
          sessions.length
            ? Math.round(
                totalSolved /
                  sessions.length
              )
            : 0,

        bestSession:
          bestSession.count || 0,
      };
    }, [
      references,
      sessions,
      bookmarks,
    ]);

  return (
    <ScrollView
      style={
        GLOBAL_STYLES.screen
      }
    >
      <SectionHeader
        title="Overall"
      />

      <InfoCard
        title="Solved"
        value={`${stats.totalSolved}/${stats.totalMcqs}`}
      />

      <InfoCard
        title="References"
        value={
          stats.totalReferences
        }
      />

      <InfoCard
        title="Bookmarks"
        value={
          stats.totalBookmarks
        }
      />

      <SectionHeader
        title="Sessions"
      />

      <InfoCard
        title="Sessions Logged"
        value={
          stats.totalSessions
        }
      />

      <InfoCard
        title="Average / Session"
        value={
          stats.averagePerSession
        }
      />

      <InfoCard
        title="Best Session"
        value={
          stats.bestSession
        }
      />

      <SectionHeader
        title="Completion"
      />

      <InfoCard
        title="Completion %"
        value={
          stats.totalMcqs
            ? `${Math.round(
                (stats.totalSolved /
                  stats.totalMcqs) *
                  100
              )}%`
            : "0%"
        }
      />
    </ScrollView>
  );
}
// screens/mcq/MCQCalendarScreen.js

import React, {
  useMemo,
} from "react";

import {
  ScrollView,
} from "react-native";

import MCQHeatmapCalendar from "../../components/calendar/MCQHeatmapCalendar";
import WeeklyHeatmap from "../../components/calendar/WeeklyHeatmap";

import SectionHeader from "../../components/common/SectionHeader";

import InfoCard from "../../components/cards/InfoCard";

import { useMCQ } from "../../context/MCQContext";

import {
  buildMCQHeatmapData,
  buildWeeklyHeatmapData,
} from "../../engines/calendarEngine";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function MCQCalendarScreen() {
  const {
    sessions,
  } = useMCQ();

  const yearlyHeatmap =
    useMemo(
      () =>
        buildMCQHeatmapData(
          sessions
        ),
      [sessions]
    );

  const weeklyHeatmap =
    useMemo(
      () =>
        buildWeeklyHeatmapData(
          sessions
        ),
      [sessions]
    );

  const totalSolved =
    sessions.reduce(
      (
        total,
        session
      ) =>
        total +
        (session.count ||
          0),
      0
    );

  const totalSessions =
    sessions.length;

  return (
    <ScrollView
      style={
        GLOBAL_STYLES.screen
      }
    >
      <SectionHeader
        title="Year Heatmap"
      />

      <MCQHeatmapCalendar
        data={
          yearlyHeatmap
        }
      />

      <SectionHeader
        title="Weekly Heatmap"
      />

      <WeeklyHeatmap
        weekData={
          weeklyHeatmap
        }
      />

      <SectionHeader
        title="Statistics"
      />

      <InfoCard
        title="Total MCQs"
        value={totalSolved}
      />

      <InfoCard
        title="Sessions"
        value={totalSessions}
      />

      <InfoCard
        title="Average / Session"
        value={
          totalSessions > 0
            ? Math.round(
                totalSolved /
                  totalSessions
              )
            : 0
        }
      />
    </ScrollView>
  );
}
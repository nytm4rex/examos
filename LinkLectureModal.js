// screens/test/TestStatsScreen.js

import React, {
  useMemo,
} from "react";

import {
  ScrollView,
} from "react-native";

import InfoCard from "../../components/cards/InfoCard";
import SectionHeader from "../../components/common/SectionHeader";

import { useTest } from "../../context/TestContext";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function TestStatsScreen() {
  const { tests } =
    useTest();

  const stats =
    useMemo(() => {
      const finished =
        tests.filter(
          (test) =>
            test.status ===
            "finished"
        );

      const bestScore =
        finished.length
          ? Math.max(
              ...finished.map(
                (t) =>
                  t.totalScore ||
                  0
              )
            )
          : 0;

      const averageScore =
        finished.length
          ? Math.round(
              finished.reduce(
                (
                  total,
                  test
                ) =>
                  total +
                  (test.totalScore ||
                    0),
                0
              ) /
                finished.length
            )
          : 0;

      return {
        totalTests:
          tests.length,

        finishedTests:
          finished.length,

        averageScore,

        bestScore,
      };
    }, [tests]);

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
        title="Tests"
        value={
          stats.totalTests
        }
      />

      <InfoCard
        title="Finished"
        value={
          stats.finishedTests
        }
      />

      <InfoCard
        title="Average Score"
        value={
          stats.averageScore
        }
      />

      <InfoCard
        title="Best Score"
        value={
          stats.bestScore
        }
      />
    </ScrollView>
  );
}
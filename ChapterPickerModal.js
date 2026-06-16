// screens/test/FSTPrepScreen.js

import React, {
  useMemo,
} from "react";

import {
  ScrollView,
} from "react-native";

import SectionHeader from "../../components/common/SectionHeader";

import ReadinessCard from "../../components/cards/ReadinessCard";
import InfoCard from "../../components/cards/InfoCard";

import { useTest } from "../../context/TestContext";

import {
  buildFSTReadiness,
} from "../../engines/fstEngine";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function FSTPrepScreen() {
  const {
    bookmarks,
  } = useTest();

  const readiness =
    useMemo(
      () =>
        buildFSTReadiness(
          bookmarks
        ),
      [bookmarks]
    );

  return (
    <ScrollView
      style={
        GLOBAL_STYLES.screen
      }
    >
      <SectionHeader
        title="Readiness"
      />

      <ReadinessCard
        title="Physics"
        percentage={
          readiness.physics
        }
      />

      <ReadinessCard
        title="Chemistry"
        percentage={
          readiness.chemistry
        }
      />

      <ReadinessCard
        title="Biology"
        percentage={
          readiness.biology
        }
      />

      <SectionHeader
        title="Question Analysis"
      />

      <InfoCard
        title="Weak Questions"
        value={
          readiness.weakQuestions
        }
      />

      <InfoCard
        title="Repeated Mistakes"
        value={
          readiness.repeatedMistakes
        }
      />

      <InfoCard
        title="Repeated Unattempted"
        value={
          readiness.repeatedUnattempted
        }
      />

      <InfoCard
        title="Repeated Correct"
        value={
          readiness.repeatedCorrect
        }
      />

      <InfoCard
        title="Overall Readiness"
        value={`${readiness.overall}%`}
      />
    </ScrollView>
  );
}
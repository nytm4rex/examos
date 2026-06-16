// context/AppProvider.js

import React from "react";

import {
  RevisionProvider,
} from "./RevisionContext";

import {
  LectureProvider,
} from "./LectureContext";

import {
  MCQProvider,
} from "./MCQContext";

import {
  TestProvider,
} from "./TestContext";

import {
  HomeProvider,
} from "./HomeContext";

import {
  SettingsProvider,
} from "./SettingsContext";

import {
  ThemeProvider,
} from "./ThemeContext";

export default function AppProvider({
  children,
}) {
  return (
    <SettingsProvider>
      <ThemeProvider>

        <RevisionProvider>

          <LectureProvider>

            <MCQProvider>

              <TestProvider>

                <HomeProvider>

                  {children}

                </HomeProvider>

              </TestProvider>

            </MCQProvider>

          </LectureProvider>

        </RevisionProvider>

      </ThemeProvider>
    </SettingsProvider>
  );
}
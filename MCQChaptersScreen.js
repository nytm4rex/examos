// navigation/MCQStack.js

import React from "react";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import MCQSubjectsScreen from "../screens/mcq/MCQSubjectsScreen";
import MCQChaptersScreen from "../screens/mcq/MCQChaptersScreen";
import MCQReferencesScreen from "../screens/mcq/MCQReferencesScreen";
import MCQRefDetailsScreen from "../screens/mcq/MCQRefDetailsScreen";
import MCQBookmarkDetailsScreen from "../screens/mcq/MCQBookmarkDetailsScreen";
import MCQCalendarScreen from "../screens/mcq/MCQCalendarScreen";
import MCQStatsScreen from "../screens/mcq/MCQStatsScreen";
import MCQStreaksScreen from "../screens/mcq/MCQStreaksScreen";

const Stack =
  createNativeStackNavigator();

export default function MCQStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="MCQSubjects"
        component={
          MCQSubjectsScreen
        }
      />

      <Stack.Screen
        name="MCQChapters"
        component={
          MCQChaptersScreen
        }
      />

      <Stack.Screen
        name="MCQReferences"
        component={
          MCQReferencesScreen
        }
      />

      <Stack.Screen
        name="MCQReferenceDetails"
        component={
          MCQRefDetailsScreen
        }
      />

      <Stack.Screen
        name="MCQBookmarkDetails"
        component={
          MCQBookmarkDetailsScreen
        }
      />

      <Stack.Screen
        name="MCQCalendar"
        component={
          MCQCalendarScreen
        }
      />

      <Stack.Screen
        name="MCQStats"
        component={
          MCQStatsScreen
        }
      />

      <Stack.Screen
        name="MCQStreaks"
        component={
          MCQStreaksScreen
        }
      />
    </Stack.Navigator>
  );
}
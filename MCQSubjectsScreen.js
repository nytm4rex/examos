// navigation/RevisionStack.js

import React from "react";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import SubjectsScreen from "../screens/revision/SubjectsScreen";
import ChaptersScreen from "../screens/revision/ChaptersScreen";
import TopicsScreen from "../screens/revision/TopicsScreen";
import TopicDetailsScreen from "../screens/revision/TopicDetailsScreen";
import LectureScreen from "../screens/revision/LectureScreen";
import LectureDetailsScreen from "../screens/revision/LectureDetailsScreen";
import RevisionCalendarScreen from "../screens/revision/RevisionCalendarScreen";

const Stack =
  createNativeStackNavigator();

export default function RevisionStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Subjects"
        component={
          SubjectsScreen
        }
      />

      <Stack.Screen
        name="Chapters"
        component={
          ChaptersScreen
        }
      />

      <Stack.Screen
        name="Topics"
        component={
          TopicsScreen
        }
      />

      <Stack.Screen
        name="TopicDetails"
        component={
          TopicDetailsScreen
        }
      />

      <Stack.Screen
        name="Lectures"
        component={
          LectureScreen
        }
      />

      <Stack.Screen
        name="LectureDetails"
        component={
          LectureDetailsScreen
        }
      />

      <Stack.Screen
        name="RevisionCalendar"
        component={
          RevisionCalendarScreen
        }
      />
    </Stack.Navigator>
  );
}
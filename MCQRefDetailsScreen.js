// navigation/TestStack.js

import React from "react";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import TestsScreen from "../screens/test/TestsScreen";
import TestDetailsScreen from "../screens/test/TestDetailsScreen";
import TestBookmarkDetailsScreen from "../screens/test/TestBookmarkDetailsScreen";
import TestStatsScreen from "../screens/test/TestStatsScreen";
import FSTPrepScreen from "../screens/test/FSTPrepScreen";

const Stack =
  createNativeStackNavigator();

export default function TestStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Tests"
        component={
          TestsScreen
        }
      />

      <Stack.Screen
        name="TestDetails"
        component={
          TestDetailsScreen
        }
      />

      <Stack.Screen
        name="TestBookmarkDetails"
        component={
          TestBookmarkDetailsScreen
        }
      />

      <Stack.Screen
        name="TestStats"
        component={
          TestStatsScreen
        }
      />

      <Stack.Screen
        name="FSTPrep"
        component={
          FSTPrepScreen
        }
      />
    </Stack.Navigator>
  );
}
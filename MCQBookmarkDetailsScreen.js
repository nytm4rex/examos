// navigation/MoreStack.js

import React from "react";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import MoreScreen from "../screens/more/MoreScreen";

import ShopScreen from "../screens/more/ShopScreen";

import BerriInfoScreen from "../screens/more/BerriInfoScreen";

import BackupScreen from "../screens/more/BackupScreen";

import SettingsScreen from "../screens/more/SettingsScreen";

import AppearanceScreen from "../screens/more/AppearanceScreen";

import AchievementsScreen from "../screens/more/AchievementsScreen";

const Stack =
  createNativeStackNavigator();

export default function MoreStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="More"
        component={
          MoreScreen
        }
      />

      <Stack.Screen
        name="Shop"
        component={
          ShopScreen
        }
      />

      <Stack.Screen
        name="BerriInfo"
        component={
          BerriInfoScreen
        }
      />

      <Stack.Screen
        name="Backup"
        component={
          BackupScreen
        }
      />

      <Stack.Screen
        name="Settings"
        component={
          SettingsScreen
        }
      />

      <Stack.Screen
        name="Appearance"
        component={
          AppearanceScreen
        }
      />

      <Stack.Screen
        name="Achievements"
        component={
          AchievementsScreen
        }
      />
    </Stack.Navigator>
  );
}
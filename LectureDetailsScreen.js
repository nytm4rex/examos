// navigation/BottomTabs.js

import React from "react";

import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import RevisionStack from "./RevisionStack";
import MCQStack from "./MCQStack";
import HomeStack from "./HomeStack";
import TestStack from "./TestStack";
import MoreStack from "./MoreStack";

import { COLORS } from "../styles/colors";

const Tab =
  createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor:
            COLORS.background,

          borderTopColor:
            COLORS.cardBackground,

          height: 64,
        },

        tabBarActiveTintColor:
          COLORS.white,

        tabBarInactiveTintColor:
          COLORS.secondaryText,
      }}
    >
      <Tab.Screen
        name="RevisionTab"
        component={RevisionStack}
        options={{
          tabBarIcon: ({
            color,
            size,
          }) => (
            <Ionicons
              name="book-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="MCQTab"
        component={MCQStack}
        options={{
          tabBarIcon: ({
            color,
            size,
          }) => (
            <Ionicons
              name="help-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: ({
            color,
            size,
          }) => (
            <Ionicons
              name="home"
              size={size + 4}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="TestTab"
        component={TestStack}
        options={{
          tabBarIcon: ({
            color,
            size,
          }) => (
            <Ionicons
              name="clipboard-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="MoreTab"
        component={MoreStack}
        options={{
          tabBarIcon: ({
            color,
            size,
          }) => (
            <Ionicons
              name="menu"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
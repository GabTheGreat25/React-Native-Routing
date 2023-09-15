import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../../src/components/BottomTab/home";
import Profile from "../../../src/components/BottomTab/profile";
import Stack from "../../../src/components/Stack";

const StackTab = createStackNavigator();

export default function () {
  return (
    <StackTab.Navigator>
      <StackTab.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <StackTab.Screen name="Profile" component={Profile} />
      <StackTab.Screen name="Stack" component={Stack} />
    </StackTab.Navigator>
  );
}

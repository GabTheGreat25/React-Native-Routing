import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Home, Profile, Stack } from "./src/components";

const Tab = createMaterialBottomTabNavigator();
const StackTab = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackTabNavigator} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function StackTabNavigator() {
  return (
    <StackTab.Navigator>
      <StackTab.Screen name="HomeScreen" component={Home} />
      <StackTab.Screen name="Stack" component={Stack} />
    </StackTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

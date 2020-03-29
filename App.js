import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BattleScreen from "./screens/HomeTabNavigator/BattleScreen";
import CatScreen from "./screens/HomeTabNavigator/CatScreen";
import DogScreen from "./screens/HomeTabNavigator/DogScreen";

const BottomTab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Dog"
          component={CatScreen}
          options={{ title: "Dog" }}
        />
        <BottomTab.Screen
          name="BattleField"
          component={BattleScreen}
          options={{ title: "Battle Field" }}
        />
        <BottomTab.Screen
          name="Cat"
          component={CatScreen}
          options={{ title: "Cat" }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

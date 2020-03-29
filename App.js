import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BattleScreen from "./screens/HomeTabNavigator/BattleScreen";
import CatScreen from "./screens/HomeTabNavigator/CatScreen";
import DogScreen from "./screens/HomeTabNavigator/DogScreen";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const BottomTab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBarOptions={{
          activeTintColor: "black",
          labelPosition: "below-icon",
          keyboardHidesTabBar: "true",
          tabStyle: { padding: 3 },
          labelStyle: { fontWeight: "bold", fontSize: 12 },
        }}
      >
        <BottomTab.Screen
          name="Dog"
          component={DogScreen}
          options={{
            title: "Dog",
            tabBarIcon: () => (
              <MaterialCommunityIcons name="dog" size={30} color="#f3ad05" />
            ),
          }}
        />
        <BottomTab.Screen
          name="BattleField"
          component={BattleScreen}
          options={{
            focused: true,
            title: "BattleField",
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="battlenet"
                size={30}
                color="black"
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Cat"
          component={CatScreen}
          options={{
            title: "Cat",
            tabBarIcon: () => (
              <MaterialCommunityIcons name="cat" size={30} color="#07A4B3" />
            ),
          }}
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

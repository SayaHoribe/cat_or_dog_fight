import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
class CatScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Cat</Text>
      </View>
    );
  }
}

export default CatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

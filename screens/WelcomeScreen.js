import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "black" }}>Dog or Cat Fight</Text>
      </View>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

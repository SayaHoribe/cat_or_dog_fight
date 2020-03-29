import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Proptypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "react-native-vector-icons";
class BattleScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Battle</Text>
      </View>
    );
  }
}

export default BattleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

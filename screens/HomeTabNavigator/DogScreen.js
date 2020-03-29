import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Proptypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "react-native-vector-icons";
class DogScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Dog</Text>
      </View>
    );
  }
}
export default DogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Icon } from "react-native-vector-icons";
// class CatScreen extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>Cat</Text>
//       </View>
//     );
//   }
// }
//
// export default CatScreen;
export default function CatScreen() {
  return (
    <View>
      <Text>Cat</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

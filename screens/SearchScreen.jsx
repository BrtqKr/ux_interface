import React from "react";
import { View, StyleSheet, Text } from "react-native";
import NavBar from "../components/NavBar";
export default SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Text>SearchScreen</Text>
      <View style={styles.navContainer}>
        <NavBar navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center"
  },
  navContainer: {
    backgroundColor: "rgba(0,0,0,0)",
    justifyContent: "flex-end",
    zIndex: 100,
    position: "absolute",
    bottom: 0
  }
});

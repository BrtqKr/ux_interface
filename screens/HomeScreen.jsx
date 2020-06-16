import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
    height: "100%"
  }
});

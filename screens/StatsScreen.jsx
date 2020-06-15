import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default StatsScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>StatsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default SearchScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>SearchScreen</Text>
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

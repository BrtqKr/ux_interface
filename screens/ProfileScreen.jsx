import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default ProfileScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>ProfileScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

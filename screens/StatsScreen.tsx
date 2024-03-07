import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const StatsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Stats Screen</Text>
    </View>
  );
};

export default StatsScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';


const PracticeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Practice Screen</Text>
    </View>
  );
};

export default PracticeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
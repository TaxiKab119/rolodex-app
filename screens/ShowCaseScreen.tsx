
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';


const ShowCaseScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Showcase Screen</Text>
    </View>
  );
};

export default ShowCaseScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import theme, {darkTheme} from './constants/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PracticeScreen from './screens/PracticeScreen';
import ShowCaseScreen from './screens/ShowCaseScreen';
import StatsScreen from './screens/StatsScreen';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();


export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
      <NavigationContainer>
        <ThemeProvider theme={darkMode ? darkTheme : theme}>
          <BottomTab.Navigator initialRouteName={'PracticeScreen'}>
            <BottomTab.Screen name={'ShowCaseScreen'} component={ShowCaseScreen}/>
            <BottomTab.Screen name={'PracticeScreen'} component={PracticeScreen}/>
            <BottomTab.Screen name={'StatsScreen'} component={StatsScreen}/>
          </BottomTab.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

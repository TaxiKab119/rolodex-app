import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {GlobalStyles} from './constants/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PracticeScreen from './screens/PracticeScreen';
import ShowCaseScreen from './screens/ShowCaseScreen';
import StatsScreen from './screens/StatsScreen';
import ManageCustomer from './screens/ManageCustomer';
import IconButton from './components/ui/IconButton';
import {BottomTabParamList, RootStackParamList} from './types/navigationTypes';
import {Ionicons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomNavScreens() {
  const navigation = useNavigation();
  return (
    <BottomTab.Navigator
      initialRouteName={'PracticeScreen'}
      screenOptions={{
        headerStyle: {backgroundColor: GlobalStyles.colors.background},
        headerTintColor: GlobalStyles.colors.onBackground,
        tabBarStyle: {backgroundColor: GlobalStyles.colors.background},
        tabBarActiveTintColor: GlobalStyles.colors.primary,
        tabBarInactiveTintColor: GlobalStyles.colors.surfaceVariant
      }}
    >
      <BottomTab.Screen
        name={'ShowCaseScreen'}
        component={ShowCaseScreen}
        options={{
          headerTitleAlign: 'left',
          title: 'Customers',
          tabBarIcon: (({color, size}) => {
            return <Ionicons name={'person'} size={size} color={color}/>
          }),
          headerRight: () => (
            <IconButton
              name={'person-add'}
              size={24}
              color={GlobalStyles.colors.onBackground}
              onPress={() => navigation.navigate('ManageCustomer')}
            />
          )
        }}
      />
      <BottomTab.Screen
        name={'PracticeScreen'}
        component={PracticeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Practice',
          tabBarIcon: (({color, size}) => {
              return <Ionicons name={'barbell'} size={size} color={color}/>
            }
          ),
        }}
      />
      <BottomTab.Screen
        name={'StatsScreen'}
        component={StatsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Stats',
          tabBarIcon: (({color, size}) => {
              return <Ionicons name={'bar-chart'} size={size} color={color}/>
            }
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}


export default function App() {
  return (
    <>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto"/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen
            name={'BottomNavScreens'}
            component={BottomNavScreens}
          />
          <Stack.Screen
            name={'ManageCustomer'}
            //@ts-ignore - not sure how to fix this yet?
            component={ManageCustomer}
            options={{
              presentation: 'modal' // changes the effect when navigating to screen
            }}
          />
        </Stack.Navigator>
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

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  ManageCustomer: { customerId: string } | undefined;
  BottomNavScreens: undefined;
};

export type BottomTabParamList = {
  PracticeScreen: undefined;
  ShowCaseScreen: undefined;
  StatsScreen: undefined;
};

// NavigationProp for useNavigation() Hook as mentioned for best practices in documentation
export type AppNavigationProp = NativeStackNavigationProp<RootStackParamList> & BottomTabNavigationProp<BottomTabParamList>;

// Global navigation context type, allows default type for useNavigation()
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

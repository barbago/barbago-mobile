import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import { Colors } from '../constants';
import { useColorScheme } from '../hooks';
import { RootTabParamList } from './types';
import { HomePage, MessagePage, SearchPage } from '../screens';
import { useAuthService } from '../services';
import { SettingsNavigator } from './SettingsNavigator';
import { RootStackScreenProps } from './types';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function TabNavigator({
  navigation,
}: RootStackScreenProps<'Root'>) {
  const { user } = useAuthService();
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen name="Home" component={HomePage} />
      <BottomTab.Screen
        name="Search"
        component={SearchPage}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen name="Messages" component={MessagePage} />
      <BottomTab.Screen
        name="SettingsStack"
        component={SettingsNavigator}
        options={{ headerShown: false }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return (
    <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
  );
}

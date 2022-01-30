import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import { Colors } from '../constants';
import { useColorScheme } from '../hooks';
import { RootTabParamList } from './types';
import { HomePage, MessagePage, SearchPage } from '../screens';
import { useAuth } from '../hooks';
import { SettingsNavigator } from './SettingsNavigator';
import { RootStackScreenProps } from './types';

const Tab = createBottomTabNavigator<RootTabParamList>();

export function TabNavigator({
  navigation,
}: RootStackScreenProps<'Root'>) {
  const { user } = useAuth();
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tabIconSelected,
      }}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Messages" component={MessagePage} />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsNavigator}
        options={{ headerShown: false, title: 'Settings' }}
      />
    </Tab.Navigator>
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

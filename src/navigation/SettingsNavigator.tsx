import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootTabScreenProps, SettingsStackParamList } from './types';
import {
  ContactPage,
  NotificationsPage,
  SettingsPage,
} from '../screens';
import { useAuth } from '../hooks';

const Stack = createNativeStackNavigator<SettingsStackParamList>();

export function SettingsNavigator({
  navigation,
}: RootTabScreenProps<'SettingsStack'>) {
  const { user } = useAuth();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsPage}
        options={{ headerShown: false, title: 'Settings' }}
      />
      <Stack.Screen name="Contact Us" component={ContactPage} />
      <Stack.Screen
        name="Notifications"
        component={NotificationsPage}
      />
    </Stack.Navigator>
  );
}

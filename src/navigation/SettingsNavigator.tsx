import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootTabScreenProps, SettingsStackParamList } from './types';
import { SettingsPage } from '../screens';
import { useAuth } from '../hooks';
import { ContactPage } from '../screens/Settings/ContactPage';

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
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Contact Us" component={ContactPage} />
    </Stack.Navigator>
  );
}

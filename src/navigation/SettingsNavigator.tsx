import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootTabScreenProps, SettingsStackParamList } from './types';
import { SettingsPage } from '../screens';
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
        options={{ headerShown: false }}
      />
      {/* Web Screens should not be a screen */}
      {/* <Stack.Screen name="Contact Us" component={() => null} />
      <Stack.Screen name="Learn More" component={() => null} />
      <Stack.Screen name="Privacy Policy" component={() => null} />
      <Stack.Screen name="Terms of Service" component={() => null} /> */}
    </Stack.Navigator>
  );
}

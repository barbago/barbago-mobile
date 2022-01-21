import React from 'react';
import { View, Text, Screen } from '../../components';
import { SettingsStackScreenProps } from '../../navigation';

export const SettingsPage = ({
  navigation,
}: SettingsStackScreenProps<'Settings'>) => {
  return (
    <Screen edges={["top"]}>
      <Text>Settings Page</Text>
    </Screen>
  );
};


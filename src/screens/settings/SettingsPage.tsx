import React from 'react';
import { View, Text } from '../../components';
import { SettingsStackScreenProps } from '../../navigation';

export const SettingsPage = ({
  navigation,
}: SettingsStackScreenProps<'Settings'>) => {
  return (
    <View>
      <Text>Settings Page</Text>
    </View>
  );
};

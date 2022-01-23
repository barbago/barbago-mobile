import React from 'react';
import { Screen, Text, View } from '../../components';
import { RootTabScreenProps } from '../../navigation/types';
import { useAuth } from '../../hooks';

export const MessagePage: React.FC<
  RootTabScreenProps<'Messages'>
> = ({ navigation, children }) => {
  const { user } = useAuth();
  return (
    <Screen>
      <Text>Message Page</Text>
    </Screen>
  );
};

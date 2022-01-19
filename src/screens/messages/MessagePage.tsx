import React from 'react';
import { Screen, Text, View } from '../../components';
import { RootTabScreenProps } from '../../navigation/types';
import { useAuthService } from '../../services';

export const MessagePage: React.FC<
  RootTabScreenProps<'Messages'>
> = ({ navigation, children }) => {
  const { user } = useAuthService();
  return (
    <Screen>
      <Text>Message Page</Text>
    </Screen>
  );
};


import React from 'react';
import { Card } from 'react-native-paper';
import { Screen, Text, View } from '../../components';
import { RootTabScreenProps } from '../../navigation/types';
import { useAuth } from '../../hooks';

export const MessagePage: React.FC<
  RootTabScreenProps<'Messages'>
> = ({ navigation, children }) => {
  const { user } = useAuth();
  return (
    <Screen>
      <Card>
        <Card.Title
          title="Aaaaah"
          subtitle="bbbbbb"
          // children={[]}
        />
      </Card>
      <Text>Message Page</Text>
    </Screen>
  );
};

import React from 'react';
import { Card, List } from 'react-native-paper';
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
        <Card.Title title="aaaaaa" subtitle="bbbbbb" />
      </Card>
      <List.Section>
        <List.Item
          title="aaa"
          left={(props) => <List.Icon {...props} icon="folder" />}
        />
      </List.Section>
      <Text>Message Page</Text>
    </Screen>
  );
};

/**
 * What is the messaging API going to look like?
 *
 */

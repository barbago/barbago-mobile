import React, { useState } from 'react';
import { Linking } from 'react-native';
import { Button, Card, List, TextInput } from 'react-native-paper';
import { Screen } from '../../components';
export const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Screen>
      <Card>
        <List.Item
          title="support@barbagoapp.com"
          left={(props) => <List.Icon icon="email" {...props} />}
          onPress={() =>
            Linking.openURL('mailto:support@barbago.com')
          }
        />
        <List.Item
          title="+1-234-567-8901"
          left={(props) => <List.Icon icon="phone" {...props} />}
          onPress={() => Linking.openURL('sms:+12345678901')}
          // todo: open accordion and select tel: or sms:
        />
      </Card>
      <Card style={{ marginTop: 20 }}>
        <Card.Title title="Send us a message!" />
        <Card.Content>
          <TextInput
            label="Email Address"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            label="Message"
            value={message}
            onChangeText={(message) => setMessage(message)}
            multiline
            numberOfLines={6}
          />
        </Card.Content>
        <Card.Actions>
          <Button icon="">Send Message</Button>
        </Card.Actions>
      </Card>
    </Screen>
  );
};

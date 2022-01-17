import React from 'react';
import { View, Text } from '../../components';
import { RootTabScreenProps } from '../../navigation';
import { GoogleAuth, NoAuth, SignOut } from '../../components';

export const HomePage = ({
  navigation,
}: RootTabScreenProps<'Home'>) => {
  return (
    <View>
      <Text>Home Page</Text>
      <GoogleAuth />
      <NoAuth />
      <SignOut />
    </View>
  );
};

import React from 'react';
import { View, Text, Screen } from '../../components';
import { RootTabScreenProps } from '../../navigation/types';

export const SearchPage: React.FC<RootTabScreenProps<'Search'>> = ({
  children,
  navigation,
}) => {
  return (
    <Screen>
      <Text>Search Page</Text>
    </Screen>
  );
};

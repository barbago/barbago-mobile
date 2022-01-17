import React from 'react';
import { View, Text } from '../../components';
import { RootTabScreenProps } from '../../navigation/types';

export const SearchPage: React.FC<RootTabScreenProps<'Search'>> = ({
  children,
  navigation,
}) => {
  return (
    <View>
      <Text>Search Page</Text>
    </View>
  );
};

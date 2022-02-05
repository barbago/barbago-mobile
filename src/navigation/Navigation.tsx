import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ColorSchemeName } from 'react-native';
import { dark, light } from '../constants';

import { linking } from './LinkingConfiguration';
import { RootNavigator } from './RootNavigator';

export function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={linking}
      theme={colorScheme === 'dark' ? dark : light}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

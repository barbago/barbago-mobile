import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ColorSchemeName } from 'react-native';
import { dark, light } from '../constants';

import LinkingConfiguration from './LinkingConfiguration';
import { RootNavigator } from './RootNavigator';

export function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? dark : light}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

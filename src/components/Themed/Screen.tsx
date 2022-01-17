import React from 'react';
import { SafeAreaView as SafeArea } from 'react-native';

import { useThemeColor } from '../../hooks';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ScreenProps = ThemeProps & SafeArea['props'];

export function Screen(props: ScreenProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );

  return (
    <SafeArea style={[{ backgroundColor }, style]} {...otherProps} />
  );
}

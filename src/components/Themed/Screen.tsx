import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  NativeSafeAreaViewProps as SafeAreaProps,
  SafeAreaView,
} from 'react-native-safe-area-context';

import { useThemeColor } from '../../hooks';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ScreenProps = ThemeProps & SafeAreaProps;

export function Screen({
  style,
  lightColor,
  darkColor,
  children,
  ...rest
}: ScreenProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );
  const defaultStyle = {
    width: '100%',
    height: '100%',
    backgroundColor,
    // padding: 16,
  };

  return (
    <SafeAreaView edges={[]} style={[defaultStyle, style]} {...rest}>
      {children}
      <StatusBar />
    </SafeAreaView>
  );
}

// RNGestureHandlerModule.attachGestureHandler got 3 arguments, expected 2

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthProvider } from './Auth.provider';
import { ThemeProvider } from './Theme.provider';

export const ContextProvider: React.FC = ({ children }) => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <ThemeProvider>
      <SafeAreaProvider>
        <AuthProvider>{children}</AuthProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  </GestureHandlerRootView>
);

export * from './Auth.provider';

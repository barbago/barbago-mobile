import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthServiceProvider } from './auth.service';

export const ContextProvider: React.FC = ({ children }) => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaProvider>
      <AuthServiceProvider>{children}</AuthServiceProvider>
    </SafeAreaProvider>
  </GestureHandlerRootView>
);

export * from './auth.service';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthServiceProvider } from './auth.service';

export const ContextProvider: React.FC = ({ children }) => (
  <SafeAreaProvider>
    <AuthServiceProvider>{children}</AuthServiceProvider>
  </SafeAreaProvider>
);

export * from './auth.service';

import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { useColorScheme } from './src/hooks';
import { Navigation } from './src/navigation';
import { ContextProvider } from './src/services';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <ContextProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </ContextProvider>
  );
}

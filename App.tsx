import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { useCachedResources, useColorScheme } from './src/hooks';
import Navigation from './src/navigation';
import { ContextProvider } from './src/services';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ContextProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </ContextProvider>
    );
  }
}

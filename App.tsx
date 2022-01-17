import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { useCachedResources, useColorScheme } from './src/hooks';
import { Navigation } from './src/navigation';
import { ContextProvider } from './src/services';

export default function App() {
  const resourcesLoaded = useCachedResources();
  const colorScheme = useColorScheme();

  if (!resourcesLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ContextProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </ContextProvider>
    );
  }
}

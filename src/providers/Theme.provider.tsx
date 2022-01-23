import React from 'react';
import {
  DefaultTheme,
  Provider as PaperProvider,
  DarkTheme,
} from 'react-native-paper';

import { useColorScheme } from '../hooks';

export const ThemeProvider: React.FC = ({ children }) => {
  const scheme = useColorScheme();

  /*
https://buttercms.com/blog/implement-dark-mode-react-native
const darkTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1A1A1A",
    accent: "#FAFAFA"
  },
};

const lightTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FAFAFA",
    accent: "#1A1A1A",
  },
};
*/

  return (
    <PaperProvider
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {children}
    </PaperProvider>
  );
};

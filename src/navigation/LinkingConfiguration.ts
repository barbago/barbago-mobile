/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from './types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Welcome: {
        screens: {
          Welcome: 'welcome',
        },
      },
      Root: {
        screens: {
          Home: {
            screens: {
              Home: 'home',
            },
          },
          Search: {
            screens: {
              Search: 'search',
            },
          },
          Messages: {
            screens: {
              Messages: 'messages',
            },
          },
          SettingsStack: {
            initialRouteName: 'Settings',
            screens: {
              Settings: 'settings',
              Account: 'account',
              'Contact Us': 'contact-us',
              Notifications: 'notifications',
              'Payment Details': 'payment-details',
              Preferences: 'preferences',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

export default linking;

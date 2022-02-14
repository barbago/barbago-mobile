import { createSlice } from '@reduxjs/toolkit';

import {
  doSetNotificationMethod,
  doToggleDarkMode,
  doToggleNotifications,
} from './actions';

export interface SettingsState {
  dark: boolean;
  notifsEnabled: boolean;
}

const initialState: SettingsState = {
  dark: true,
  notifsEnabled: true,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(doSetNotificationMethod, (state, action) => {})
      .addCase(doToggleDarkMode, (state, action) => {
        state.dark = !state.dark;
      })
      .addCase(doToggleNotifications, (state, action) => {
        state.notifsEnabled = !state.notifsEnabled;
      })
      .addDefaultCase((state, _action) => state);
  },
});

export const { reducer: settingsReducer } = settingsSlice;

// TODO:
// Read Redux docs UI and Async sections
// https://redux.js.org/tutorials/fundamentals/part-5-ui-react

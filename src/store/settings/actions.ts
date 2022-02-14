import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const doSetNotificationMethod = createAction(
  'settings/setNotificationMethod',
);

export const doToggleDarkMode = createAction('settings/toggleDarkMode');

export const doToggleNotifications = createAction(
  'settings/toggleNotifications',
);

export const fetchSettings = createAsyncThunk(
  'settings/fetchSettings',
  async (a, b) => {},
);

import { createAction } from '@reduxjs/toolkit';

export const doSignIn = createAction('auth/signIn');

export const doSignOut = createAction('auth/signOut');

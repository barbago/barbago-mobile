import { createSlice } from '@reduxjs/toolkit';
import { doSignIn, doSignOut } from './actions';

export interface AuthState {
  user: any;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doSignIn, (state, action) => {});
    builder.addCase(doSignOut, (state, action) => {
      state.user = null;
    });
    builder.addDefaultCase((state, _action) => state);
  },
});

export const { reducer: authReducer } = authSlice;

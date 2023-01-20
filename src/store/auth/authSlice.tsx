import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type AuthSliceType = {
  token: string;
  isAuth: boolean;
};

const initialAuthState: AuthSliceType = {
  token: '',
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuth = true;
      state.token = action.payload;
    },

    logout: (state) => {
      state.isAuth = false;
      state.token = '';
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

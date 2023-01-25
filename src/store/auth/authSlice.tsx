import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';

type AuthSliceType = {
  token: string;
  isAuth: boolean;
  user: {
    userId: string;
    iat: number;
    login: string;
  } | null;
};

const initialAuthState: AuthSliceType = {
  token: localStorage.getItem('token') ?? '',
  isAuth: !!localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user') || '{}'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuth = true;
      state.token = action.payload;
      const user = jwt_decode(action.payload);

      localStorage.setItem('token', action.payload);
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout: (state) => {
      state.isAuth = false;
      state.token = '';
      state.user = null;

      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

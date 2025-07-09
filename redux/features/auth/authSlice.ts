import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

//====================== User interface=================
export interface User {
  _id: string;
  name: string;
  phone: string;
  email: string;
  image?: string;
  role: string;
}

//======================== Auth state interface====================
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

// =============================Initial state===========================
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// ============================auth Slice========================
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart(state) {
      state.loading = true;
      state.error = null;
    },
    // =================Login / Set user only===================
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    //================= On auth failure=================
    authFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
      state.isAuthenticated = false;
    },
    //================= Logout=========================
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { authStart, setUser, authFailure, logout } = authSlice.actions;

// ========================Selectors===========================
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAuthError = (state: RootState) => state.auth.error;

// Reducer export
export default authSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// Define the shape of the signup data
interface SignupData {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Define the shape of the initial state
interface AuthState {
  signupData: SignupData;
  loading: boolean;
  token: string | null;             // Token can be a string or null
}

// Define the initial state with TypeScript
const initialState: AuthState = {
  signupData: {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  loading: false,
  token: typeof window !== 'undefined' && Cookies.get('refresh_token')
    ? Cookies.get('refresh_token') as string
    : null,
};

// Create the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignupData(state, action: PayloadAction<SignupData>) {
      state.signupData = action.payload; // Update signupData
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload; // Update loading state
    },
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload; // Update token state
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});

// Export actions and reducer
export const { setSignupData, setLoading, setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;

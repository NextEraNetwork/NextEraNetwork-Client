import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./studentSlices/authSlice";
import profileSlice from "./studentSlices/profileSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice,
  },
});

// Define RootState and AppDispatch types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

'use client';
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./studentSlices/authSlice";
import profileSlice from "./studentSlices/profileSlice"
import optionSlice from "./studentSlices/optionSlice";
import questionSlice from "./studentSlices/questionSlice";
import opportunitySlice from "./studentSlices/opportunitySlice";
import experienceSlice from "./studentSlices/experienceSlice";
import discussionSlice from "./studentSlices/discussionSlice";
import allUserSlice from "./studentSlices/allUserSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice,
    options : optionSlice,
    question : questionSlice,
    opportunity : opportunitySlice,
    discussion:discussionSlice,
    experience: experienceSlice,
    allUser:allUserSlice
  },
});

// Define RootState and AppDispatch types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

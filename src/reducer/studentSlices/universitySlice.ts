// universitySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface University {
    value: string;
    label: string;
}

interface UniversityState {
    universities: University[];
}

const initialState: UniversityState = {
    universities: [],
};

const universitySlice = createSlice({
    name: 'universities',
    initialState,
    reducers: {
        setUniversities(state, action: PayloadAction<University[]>) {
            state.universities = action.payload;
        },
    },
});

export const { setUniversities } = universitySlice.actions;
export default universitySlice.reducer;

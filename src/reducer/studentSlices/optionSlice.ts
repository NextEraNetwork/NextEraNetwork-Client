// universitySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OptionType {
    value: string;
    label: string;
}

interface OptionState {
    universities: OptionType[];
    colleges: OptionType[];
    department: OptionType[];
    courses: OptionType[];
    branches: OptionType[];
}

const initialState: OptionState = {
    universities: [],
    colleges: [],
    department:[],
    courses:[],
    branches:[],
};

const optionSlice = createSlice({
    name: 'universities',
    initialState,
    reducers: {
        setUniversities(state, action: PayloadAction<OptionType[]>) {
            state.universities = action.payload;
        },

        setColleges(state, action:PayloadAction<OptionType[]>){
            state.colleges = action.payload
        },

        setDepartments(state, action:PayloadAction<OptionType[]>){
            state.department = action.payload
        },

        setCourses(state, action:PayloadAction<OptionType[]>){
            state.courses = action.payload
        },

        setBranch(state, action:PayloadAction<OptionType[]>){
            state.branches = action.payload
        }
    },
});

export const { setUniversities, setColleges, setDepartments,setCourses, setBranch } = optionSlice.actions;
export default optionSlice.reducer;

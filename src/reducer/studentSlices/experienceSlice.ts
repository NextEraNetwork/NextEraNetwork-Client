import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExperienceData {
    title: string;
    experienceType: string;
    companyName?: string;
    position?: string;
    location?: string;
    content: string;
    keyTakeaways: string;
    tips?: string;
}

interface ExperienceState {
    experienceList: ExperienceData[],
    experienceDetail :ExperienceData,
    loading:boolean
}

const initialState : ExperienceState={
    experienceList :[
        {
            title: "",
            experienceType: "",
            companyName: "",
            position: "",
            location: "",
            content: "",
            keyTakeaways: "",
            tips: ""
        }
    ],

    experienceDetail:{
        title: "",
        experienceType: "",
        companyName: "",
        position: "",
        location: "",
        content: "",
        keyTakeaways: "",
        tips: ""
    },
    loading:false
}


const experienceSlice =createSlice({
    name: "experience",
    initialState,
    reducers:{
        setExperiencelist(state, action: PayloadAction<ExperienceData[]>){
            state.experienceList = action.payload;
        },
        setExperience(state, action: PayloadAction<ExperienceData>){
            state.experienceDetail = action.payload;
        },
        setLoading(state, action : PayloadAction<boolean>){
            state.loading = action.payload;
        }
    }
});

export const { setExperiencelist, setExperience, setLoading } = experienceSlice.actions;
export default experienceSlice.reducer;
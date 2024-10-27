import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OpportunityData{
    id:string;
    profile: string;       
    company: string;
    branch: string;
    positionType: string;
    yearOfExperience: number;
    opportunityLink: string;
    applicationDeadline: string;
    createdAt: string;
    description: string; 
}

interface OpportunityState{
    opportunityList: OpportunityData[],
    opportunityDetail : OpportunityData,
    loading:boolean
}

const initialState : OpportunityState={
    opportunityList:[
        {
            id:"",
            profile: "",     
            company: "",
            branch: "",
            positionType: "",
            yearOfExperience: 0,
            opportunityLink: "",
            applicationDeadline: "",
            createdAt: "",
            description: "", 
        }
    ],
    opportunityDetail :{
        id:"",
        profile: "",     
        company: "",
        branch: "",
        positionType: "",
        yearOfExperience: 0,
        opportunityLink: "",
        applicationDeadline: "",
        createdAt: "",
        description: "", 
    },
    loading:false
};

const opportunitySlice = createSlice({
    name: 'experience',
    initialState,
    reducers:{
        setOpportunityList(state, action :PayloadAction<OpportunityData[]>){
            state.opportunityList = action.payload;
        },
        setOpportunity(state, action: PayloadAction<OpportunityData>){
            state.opportunityDetail = action.payload;
        },
        setLoading(state, action : PayloadAction<boolean>){
            state.loading = action.payload;
        }
    }
});

export const { setOpportunityList, setOpportunity, setLoading } = opportunitySlice.actions;
export default opportunitySlice.reducer;
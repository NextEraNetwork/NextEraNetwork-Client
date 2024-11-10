import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OpportunityData {
    _id: string;
    profile_id: string;
    profile: string;
    company: string;
    branch: string;
    positionType: string;
    applicationLink: string
    experience: number;
    applicationDeadline: string;
    description: string;

}

interface OpportunityState {
    opportunityList: OpportunityData[],
    opportunityDetail: OpportunityData,
    loading: boolean
}

const initialState: OpportunityState = {
    opportunityList: [
        {
            _id: "",
            profile_id: "",
            profile: "",
            company: "",
            branch: "",
            positionType: "",
            experience: 0,
            applicationLink: "",
            applicationDeadline: "",
            description: "",
        }
    ],
    opportunityDetail: {
        _id: "",
        profile_id: "",
        profile: "",
        company: "",
        branch: "",
        positionType: "",
        experience: 0,
        applicationLink: "",
        applicationDeadline: "",
        description: "",
    },
    loading: false
};

const opportunitySlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
        setOpportunityList(state, action: PayloadAction<OpportunityData[]>) {
            state.opportunityList = action.payload;
        },
        setOpportunity(state, action: PayloadAction<OpportunityData>) {
            state.opportunityDetail = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        }
    }
});

export const { setOpportunityList, setOpportunity, setLoading } = opportunitySlice.actions;
export default opportunitySlice.reducer;
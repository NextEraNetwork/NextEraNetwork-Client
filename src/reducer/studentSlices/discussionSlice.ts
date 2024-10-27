import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DiscussionData {
    id: string;
    title: string;
    branch: string;
    description: string;
}

interface DiscussionState{
    discussionList: DiscussionData[],
    discussionDetail : DiscussionData,
    loading: boolean
}


const initialState : DiscussionState ={
    discussionDetail :{
        id:"",
        title:"",
        branch:"",
        description:""
    } ,
    discussionList:[
        {
            id:"",
            title:"",
            branch:"",
            description:""
        } 
    ],
    loading:false
}

const discussionSlice = createSlice({
    name: 'discussion',
    initialState,
    reducers:{
        setDiscussionList(state, action :PayloadAction<DiscussionData[]>){
            state.discussionList = action.payload;
        },
        setDiscussion(state, action: PayloadAction<DiscussionData>){
            state.discussionDetail = action.payload;
        },
        setLoading(state, action : PayloadAction<boolean>){
            state.loading = action.payload;
        }
    }
});

export const { setDiscussionList, setDiscussion, setLoading } = discussionSlice.actions;
export default discussionSlice.reducer;
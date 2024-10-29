import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AllUsersData {
    id: string;
    profileImage: string | null;
    fullName: string;
    passOutYear: number;
    selectedBranch: string;
    position: string;
    links: { type: string; url: string }[];
    username: string;
};

interface AllUserState {
    allUseresList: AllUsersData[],
    loading: boolean
}

const initialState: AllUserState = {
    allUseresList: [
        {
            id: "",
        profileImage: "",
        fullName: "",
        passOutYear: 0,
        selectedBranch: "",
        position: "",
        links: [],
        username: "",
        }
    ],
    loading:false
}

const allUserSlice = createSlice({
    name:'question',
    initialState,
    reducers:{
        setAllUsers(state, action :PayloadAction<AllUsersData[]>){
            state.allUseresList = action.payload;
        },
        
        setLoading(state, action : PayloadAction<boolean>){
            state.loading = action.payload
        }
    }
});


export const { setAllUsers, setLoading } = allUserSlice.actions;
export default allUserSlice.reducer;
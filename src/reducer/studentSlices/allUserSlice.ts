import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AllUsersData {
    _id: string,
    username: string,
    email: string,
    firstname: string,
    lastname: string,
    profileImage: string | null,
    middlename: string | null,
    profession: string,
    position: string,
    passoutYear: number,
    links: { type: string; url: string }[];
    branchName: string,
    coursesName: string
};

interface AllUserState {
    allUseresList: AllUsersData[],
    loading: boolean
}

const initialState: AllUserState = {
    allUseresList: [
        {
            _id: "",
            username: "",
            email: "",
            firstname: "",
            lastname: "",
            profileImage: "" ,
            middlename: "",
            profession: "",
            position: "",
            passoutYear: 0,
            links: [],
            branchName: "",
            coursesName: ""
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
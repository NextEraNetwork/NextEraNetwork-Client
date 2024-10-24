import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the ProfileData interface
interface ProfileData {
    username: string;
    firstName: string;
    middleName: string;
    lastName: string;
    fullName: string;
    profession: string;
    position: string;
    passOut_Year: string;
    profileImage: string;
    university: string;
    college: string;
    department: string;
    courses: string;
    branch: string;
}

// Define the overall state interface, including loading state
interface ProfileState {
    profileData: ProfileData;
    loading: boolean;
}

// Define the initial state with default values
const initialState: ProfileState = {
    profileData: {
        username:"",
        firstName: "",
        middleName: "",
        lastName: "",
        fullName: "",
        profession: "",
        position: "",
        passOut_Year: "",
        profileImage: "",
        university: "",
        college: "",
        department: "",
        courses: "",
        branch: "",
    },
    loading: false,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile(state, action: PayloadAction<ProfileData>) {
            const {
                username,
                firstName,
                middleName,
                lastName,
                profession,
                position,
                passOut_Year,
                profileImage,
                university,
                college,
                department,
                courses,
                branch,
            } = action.payload;

            // Update all profile fields in the profileData object
            state.profileData.username = username;
            state.profileData.firstName = firstName;
            state.profileData.middleName = middleName;
            state.profileData.lastName = lastName;
            state.profileData.profession = profession;
            state.profileData.position = position;
            state.profileData.passOut_Year = passOut_Year;
            state.profileData.profileImage = profileImage;
            state.profileData.university = university;
            state.profileData.college = college;
            state.profileData.department = department;
            state.profileData.courses = courses;
            state.profileData.branch = branch;

            // Combine names into a single fullName
            state.profileData.fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');
        },

        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    },
});

// Export the actions to use in your components
export const { setProfile, setLoading } = profileSlice.actions;

// Export the reducer to be used in the store
export default profileSlice.reducer;

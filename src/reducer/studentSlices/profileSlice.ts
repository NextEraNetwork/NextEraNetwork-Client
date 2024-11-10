import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UsersData, UserExperienceData, UserProjectData, UserEducationData, UserAchievementData, UserCertificationData } from "@/types/Profile";


// Define the overall state interface, including loading state
interface ProfileState {
    profileData: UsersData;
    profilDataByUsername: UsersData;
    experienceList: UserExperienceData[],
    projectList: UserProjectData[],
    educationList: UserEducationData[],
    achievementList: UserAchievementData[]
    certicationList: UserCertificationData[]
    loading: boolean;
}

// Define the initial state with default values
const initialState: ProfileState = {
    profileData: {
        _id: "",
        firstName: "",
        middleName: "",
        lastName: "",
        userName: "",
        email: "",
        abcID: "",
        about:"",
        branch: "",
        category: "",
        college: "",
        courses: "",
        coverImage: "",
        created_at: "",
        department: "",
        enrollmentID: [],
        enrollmentNumber: "",
        gender: "",
        hobbies: [],
        languages: [],
        links: [],
        profession: "",
        position: "",
        profileImage: "",
        passOut_Year: null,
        skills: [],
        state: "",
        university: "",
        updated_at: "",
    },
    profilDataByUsername: {
        _id: "",
        firstName: "",
        middleName: "",
        lastName: "",
        userName: "",
        email: "",
        abcID: "",
        about:"",
        branch: "",
        category: "",
        college: "",
        courses: "",
        coverImage: "",
        created_at: "",
        department: "",
        enrollmentID: [],
        enrollmentNumber: "",
        gender: "",
        hobbies: [],
        languages: [],
        links: [],
        profession: "",
        position: "",
        profileImage: "",
        passOut_Year: null,
        skills: [],
        state: "",
        university: "",
        updated_at: "",
    },
    experienceList: [
        {
            _id: "",
            jobTitle: "",
            experienceType: "",
            companyName: "",
            description: null,
            jobMode: "",
            location: "",
            start_date: "",
            end_date: "",
            continuing: false,
        },
    ],
    projectList: [
        {
            _id: "",
            projectName: "",
            description: "",
            technology: [],
            projectURL: "",
            start_date: "",
            end_date: "",
        }
    ],
    educationList: [
        {
            _id: "",
            insitutionName: "",
            degree: "",
            field_of_study: "",
            start_date: "",
            end_date: "",
            grade: null,
            description: "",
        }
    ],
    achievementList: [
        {
            _id: "",
            title: "",
            description: "",
            date_achieved: "",
            awardingOrganization: "",
        }
    ],
    certicationList: [
        {
            _id: "",
            certificationName: "",
            issuingOrganization: "",
            certificateURL: "",
            issue_date: "",
            expiry_date: "",
            description: "",
        }
    ],
    loading: false,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile(state, action: PayloadAction<UsersData>) {
            console.log("payload", action.payload);
            state.profileData = action.payload;
        },

        setProfileByUserName(state, action: PayloadAction<UsersData>) {
            console.log("payload", action.payload);
            state.profilDataByUsername = action.payload;
        },

        setUserExperience(state, action: PayloadAction<UserExperienceData[]>) {
            state.experienceList = action.payload;
        },

        setUserProject(state, action: PayloadAction<UserProjectData[]>) {
            state.projectList = action.payload;
        },

        setUserEducation(state, action: PayloadAction<UserEducationData[]>) {
            state.educationList = action.payload;
        },

        setUserAchievement(state, action: PayloadAction<UserAchievementData[]>) {
            state.achievementList = action.payload;
        },

        setUserCerticattion(state, action: PayloadAction<UserCertificationData[]>) {
            state.certicationList = action.payload;
        },

        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    },
});

// Export the actions to use in your components
export const { setProfile, setUserExperience, setUserProject, setUserEducation, setUserAchievement, setUserCerticattion,setProfileByUserName, setLoading } = profileSlice.actions;

// Export the reducer to be used in the store
export default profileSlice.reducer;

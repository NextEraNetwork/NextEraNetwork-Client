import { apiConnector } from "@/services/apiConnector";
import { profileEndpoints } from "@/services/api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { ProfileData, ProjectData, ExperienceData, EducationData, CertificationData, AchievementData } from "@/types/MultiForm";
import { setLoading, setProfile, setProfileByUserName, setUserAchievement, setUserCerticattion, setUserEducation, setUserExperience, setUserProject } from "@/reducer/studentSlices/profileSlice";
import { profileUpdateEndpoints } from "@/services/api";
import { AppDispatch } from "@/reducer/store";
import Cookies from 'js-cookie';

const {
    PUT_PROFILE_API,
    GET_PROFILE_API,
    GET_USER_EXPERIENCE,
    GET_USER_PROJECT,
    GET_USER_EDUCATION,
    GET_USER_ACHIEVEMENT,
    GET_USER_CERTIFICATE
} = profileEndpoints;

const {
    UPDATE_PROFILE_PICTURE_API,
    ADD_EXPERIENCE_API,
    ADD_EDUCATION_API,
    ADD_PROJECT_API,
    ADD_ACHIEVEMENT_API,
    ADD_CERTIFICATION_API,
    DELETE_USER_DETAILS_LIST
} = profileUpdateEndpoints;



export const createProfileUser = (formData: ProfileData) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    console.log("Profile data in createProfileUser ", formData)


    try {
        console.log("profile data", formData);
        const response = await apiConnector({
            method: 'POST',
            url: PUT_PROFILE_API,
            bodyData: formData,
            withCredentials: true
        })

        if (response.status === 200) {
            toast.success("Profile is Created successfully");
            const router = useRouter();
            router.push("/");
        }
    }
    catch (error) {
        console.error(error);
    } finally {
        dispatch(setLoading(false));
    }
}


// POST REQUEST
export const addUserExperience = (formData: ExperienceData, username: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    console.log("formData", formData);

    try {
        const response = await apiConnector({
            method: 'POST',
            url: ADD_EXPERIENCE_API,
            bodyData: formData,
            withCredentials: true
        });

        console.log("response", response);

        if (response.status === 200) {
            dispatch(getUserExperience(username));
            toast.success("Experience Updated Successfully.");
        }
    } catch (error: any) {

        console.log(error);
    } finally {
        dispatch(setLoading(false));
    }
}

export const addUserEducation = (formData: EducationData, username: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await apiConnector({
            method: 'POST',
            url: ADD_EDUCATION_API,
            bodyData: formData,
            withCredentials: true
        });

        if (response.status === 200) {
            dispatch(getUserEducation(username));
            toast.success("Education Updated Successfully.");
        }
    } catch (error: any) {

        console.log(error);
    } finally {
        dispatch(setLoading(false));
    }
}

export const addUserProjects = (formData: ProjectData, username: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await apiConnector({
            method: 'POST',
            url: ADD_PROJECT_API,
            bodyData: formData,
            withCredentials: true
        });

        if (response.status === 200) {
            dispatch(getUserProject(username));
            toast.success("Projects Updated Successfully.");
        }
    } catch (error: any) {

        console.log(error);
    } finally {
        dispatch(setLoading(false));
    }
}

export const addUserCertificates = (formData: CertificationData, username: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {

        console.log("addUserCertificates", ADD_CERTIFICATION_API);
        const response = await apiConnector({
            method: 'POST',
            url: ADD_CERTIFICATION_API,
            bodyData: formData,
            withCredentials: true
        });

        if (response.status === 200) {
            dispatch(getUserCertificate(username));
            toast.success("Certificates Updated Successfully.");
        }
    } catch (error: any) {

        console.log(error);
    } finally {
        dispatch(setLoading(false));
    }
}

export const addUserAchievement = (formData: AchievementData, username: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await apiConnector({
            method: 'POST',
            url: ADD_ACHIEVEMENT_API,
            bodyData: formData,
            withCredentials: true
        });

        if (response.status === 200) {
            dispatch(getUserAchievment(username)); dispatch(getUserAchievment(username));
            toast.success("Achievement Updated Successfully.");
        }
    } catch (error: any) {

        console.log(error);
    } finally {
        dispatch(setLoading(false));
    }
}

export const updateProfilePicture = (imageFile: File, token: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    const token = Cookies.get('access_token');
    console.log("toke for profile", token);

    try {
        const response = await apiConnector({
            method: 'PUT',
            url: UPDATE_PROFILE_PICTURE_API,
            bodyData: imageFile,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            toast.success("Profile Image Updated Successfully.");
        }
    }
    catch (error) {
        console.error(error);
    } finally {
        dispatch(setLoading(false));
    }
}




// GET REQUEST

export const getUserData = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await apiConnector({
            method: 'GET',
            url: GET_PROFILE_API,
            withCredentials: true
        });

        console.log("profiel data response", response);

        if (response.status === 200) {
            console.log("response.data.data", response.data.data)
            dispatch(setProfile(response.data.data[0]))
        }
    } catch (error: any) {
        if (error.code === "ERR_NETWORK") {
            toast.error("Server Error, try later");
        }
        console.log(error);
    } finally {
        dispatch(setLoading(false));
    }
}

export const getUserDataByUsername = (username: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await apiConnector({
            method: 'GET',
            url: GET_PROFILE_API + `/${username}`,
            bodyData: { username },
            withCredentials: true
        });

        console.log("profiel data response", response);

        if (response.status === 200) {
            console.log("response.data.data", response.data.data)
            dispatch(setProfileByUserName(response.data.data[0]))
        }
    } catch (error: any) {
        if (error.code === "ERR_NETWORK") {
            toast.error("Server Error, try later");
        }
        console.log(error);
    } finally {
        dispatch(setLoading(false));
    }
}

export const getUserEducation = (username: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await apiConnector({
            method: 'GET',
            url: GET_USER_EDUCATION + `/${username}`,
            withCredentials: true
        });

        // console.log("response", response);

        if (response.status === 200) {
            if (response.data.data.length > 0) {
                // console.log("response.data.data", response.data.data)
                dispatch(setUserEducation(response.data.data))
            }
            // toast.success("Education Fetched Successfully.");
        }
    } catch (error: any) {
        if (error.code === "ERR_NETWORK") {
            toast.error("Server Error, try later");
        }
        console.log(error);
    } finally {
        dispatch(setLoading(false));
    }
}

export const getUserExperience = (username: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await apiConnector({
            method: 'GET',
            url: GET_USER_EXPERIENCE + `/${username}`,
            bodyData: { username },
            withCredentials: true
        });

        // console.log("response", response);

        if (response.status === 200) {
            if (response.data.data.length > 0) {
                // console.log("response.data.data", response.data.data)
                dispatch(setUserExperience(response.data.data))
            }
            // toast.success("Experience Fetched Successfully.");
        }
    } catch (error: any) {
        if (error.code === "ERR_NETWORK") {
            toast.error("Server Error, try later");
        }
        console.log(error);
    } finally {
        dispatch(setLoading(false));
    }
}

export const getUserProject = (username: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await apiConnector({
            method: 'GET',
            url: GET_USER_PROJECT + `/${username}`,
            bodyData: { username },
            withCredentials: true
        });

        // console.log("response", response);

        if (response.status === 200) {
            if (response.data.data.length > 0) {
                // console.log("response.data.data", response.data.data)
                dispatch(setUserProject(response.data.data))
            }
            // toast.success("Project Fetched Successfully.");
        }
    } catch (error: any) {

        console.log(error);
    } finally {
        dispatch(setLoading(false));
    }
}

export const getUserAchievment = (username: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await apiConnector({
            method: 'GET',
            url: GET_USER_ACHIEVEMENT + `/${username}`,
            bodyData: { username },
            withCredentials: true
        });

        // console.log("response", response);

        if (response.status === 200) {
            if (response.data.data.length > 0) {
                // console.log("response.data.data", response.data.data)
                dispatch(setUserAchievement(response.data.data))
            }
            // toast.success("Project Fetched Successfully.");
        }
    } catch (error: any) {

        console.log(error);
    } finally {
        dispatch(setLoading(false));
    }
}

export const getUserCertificate = (username: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await apiConnector({
            method: 'GET',
            url: GET_USER_CERTIFICATE + `/${username}`,
            bodyData: { username },
            withCredentials: true
        });

        console.log("response", response);

        if (response.status === 200) {
            if (response.data.data.length > 0) {
                console.log("response.data.data", response.data.data)
                dispatch(setUserCerticattion(response.data.data))
            }
            // toast.success("Project Fetched Successfully.");
        }
    } catch (error: any) {
        toast.error("Network Error, try later");
        console.log(error);
    } finally {
        dispatch(setLoading(false));
    }
}




// DELETE REQUEST

export const deleteUserDetail = (key: string, id: string, username: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {

        const data = [id];
        const response = await apiConnector({
            method: 'DELETE',
            url: DELETE_USER_DETAILS_LIST,
            bodyData: {
                [key]: data,
            },
            withCredentials: true
        });

        console.log("response", response);

        if (response.status === 200) {
            if (key === 'experienceList') {
                dispatch(getUserExperience(username));
                toast.success(`Experience deleted Successfully.`)

            } else if (key === 'educationList') {
                dispatch(getUserEducation(username));
                toast.success(`Education deleted Successfully.`)
            }
            else if (key === 'projectList') {
                dispatch(getUserProject(username));
                toast.success(`Project deleted Successfully.`)
            }
            else if (key === 'certificationList') {
                dispatch(getUserCertificate(username));
                toast.success(`Certification deleted Successfully.`)
            }
            else if (key === 'achievementList') {
                dispatch(getUserAchievment(username));
                toast.success(`Achievement deleted Successfully.`)
            }
        }
    } catch (error: any) {
        toast.error("Network Error, try later");
    } finally {
        dispatch(setLoading(false));
    }
}
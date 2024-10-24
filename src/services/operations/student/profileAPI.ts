import { Dispatch, SetStateAction } from "react";
import { apiConnector } from "@/services/apiConnector";
import { profileEndpoints } from "@/services/api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { ProfileData } from "@/types/MultiForm";
import { setLoading } from "@/reducer/studentSlices/profileSlice";

// const token = localStorage.getItem("token");
const {
    PUT_PROFILE_API,
    UPDATE_PROFILE_API,
    UPDATE_PROFILE_PICTURE_API
} = profileEndpoints;


export const createProfileUser = (profileData: ProfileData, token:string ) => async (dispatch: any) => {
    dispatch(setLoading(true));

    try {
        console.log("profile data", profileData);
        const response = await apiConnector({
            method: 'PUT',
            url: PUT_PROFILE_API,
            bodyData: profileData,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        if (response.status === 200) {
            toast.success("Profile is updated");
        }
    }
    catch (error) {
        console.error(error);
    } finally {
        dispatch(setLoading(false));
    }
}

export const updateProfilePicture = (imageFile : File, token : string) =>async(dispatch:any)=>{
    dispatch(setLoading(true));

    try{
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
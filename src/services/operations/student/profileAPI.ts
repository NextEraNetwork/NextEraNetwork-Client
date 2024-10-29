import { apiConnector } from "@/services/apiConnector";
import { profileEndpoints } from "@/services/api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { ProfileData } from "@/types/MultiForm";
import { setLoading } from "@/reducer/studentSlices/profileSlice";
import { profileUpdateEndpoints } from "@/services/api";
import { AppDispatch } from "@/reducer/store";
import Cookies from 'js-cookie';

const {
    PUT_PROFILE_API,
} = profileEndpoints;

const{
    UPDATE_PROFILE_PICTURE_API
} = profileUpdateEndpoints;



export const createProfileUser = (formData: ProfileData) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    console.log("Profile data in createProfileUser ", formData)

    const token = Cookies.get('refresh_token');
    console.log("toke for profile", token);

    try {
        console.log("profile data", formData);
        const response = await apiConnector({
            method: 'PUT',
            url: PUT_PROFILE_API,
            bodyData: formData,
            headers: {
                Authorization: `Bearer ${"token"}`,
            },
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

export const updateProfilePicture = (imageFile : File, token : string) =>async(dispatch:AppDispatch)=>{
    dispatch(setLoading(true));

    const token = Cookies.get('access_token');
    console.log("toke for profile", token);

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
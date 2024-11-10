'use client';
import { apiConnector } from "../../apiConnector";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { ExperienceType } from "@/types/Experience";
import { experienceEndpoints } from "@/services/api";
import { AppDispatch } from "@/reducer/store";
import { setExperiencelist, setLoading } from "@/reducer/studentSlices/experienceSlice";

const {
    POST_EXPERIENCE_API,
    GET_ALL_EXPERIENCE_API
} = experienceEndpoints;

// let token = localStorage.getItem("token");

export const addExperience = (formData: ExperienceType ) => async(dispatch :AppDispatch)=>{
    dispatch(setLoading(true));
    try {
        const response = await apiConnector({
            method: 'POST',
            url: POST_EXPERIENCE_API,
            bodyData: formData,
            withCredentials:true
        });

        if (response.status === 200) {
            toast.success("Expeirience added successfully");
            const router = useRouter();
            router.back();
        }

    } catch (error) {
        toast.error("Network Error, Try again later");
        console.log("error", error);
        //   dispatch(setError(error.response?.data.message || 'Signup failed')); // Handle the error message
    } finally {
        dispatch(setLoading(false));
    }
}

export const getExperience = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    try {
        const response = await apiConnector({
            method: 'GET',
            url: GET_ALL_EXPERIENCE_API,
            withCredentials:true
        });

        console.log("question reponse", response.data.data[0])
        if (response.status === 200) {
            // toast.success("Question added successfully");
            dispatch(setExperiencelist(response.data.data));
        }

    } catch (error) {
        toast.error(`Network Error, Try again later ${error}`);
        //   dispatch(setError(error.response?.data.message || 'Signup failed')); // Handle the error message
    } finally {
        dispatch(setLoading(false));
    }
}

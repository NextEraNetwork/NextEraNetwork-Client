'use client';
import { apiConnector } from "../../apiConnector";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { discussionEndpoints } from '../../api';
import { AppDispatch } from "@/reducer/store";
import { setLoading } from "@/reducer/studentSlices/discussionSlice";

const {
    // GET_ALL_DISCUSSION_API,
    // GET_DISCUSSION_DETAIL_API,
    POST_DISCUSSION_API,
    // UPDATE_DISCUSSION_API,
    // DELETE_DISCUSSION_API,
    // POST_COMMENT_API,
    // POST_NESTED_COMMENT_API,
    // GET_COMMENT_API

} = discussionEndpoints;

// let token = localStorage.getItem("token");

interface DiscussionFormData {
    title: string;
    branch: string;
    description: string;
}

export const addDiscussion = (formData: DiscussionFormData) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await apiConnector({
            method: 'POST',
            url: POST_DISCUSSION_API,
            bodyData: formData,
            headers: {
                Authorization: `Bearer ${"token"}`,
            },
        });

        if (response.status === 200) {
            toast.success("Discussion added successfully");
            const router = useRouter();
            router.push("/discussions");
        }

    } catch (error) {
        toast.error("Network Error, Try again later ");
        console.log("error", error);
        //   dispatch(setError(error.response?.data.message || 'Signup failed')); // Handle the error message
    } finally {
        dispatch(setLoading(false));
    }
}

import { apiConnector } from "@/services/apiConnector";
import { toast } from "react-toastify";
import { setLoading } from "@/reducer/studentSlices/profileSlice";
import { AppDispatch } from "@/reducer/store";
import { allUsersEndpoints } from "@/services/api";
import { setAllUsers } from "@/reducer/studentSlices/allUserSlice";

const {
    GET_ALL_USER_API
} = allUsersEndpoints;

export const getAllUsers = ()=> async(dispatch:AppDispatch)=>{
    dispatch(setLoading(true));
    try{
        const response = await apiConnector({
            method: 'GET',
            url: GET_ALL_USER_API,
            withCredentials:true
        });

        console.log("network response", response);

        if (response.status === 200) {
            dispatch(setAllUsers(response.data));
            console.log("networks response", response.data);
            // toast.success("Alluser Fetched Successfully.");
        }
    }catch (error :any ) {
        console.log(error);
        toast.error("Network Error");
    } finally {
        dispatch(setLoading(false));
    }
}
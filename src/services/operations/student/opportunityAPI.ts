import { apiConnector } from "../../apiConnector";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { opportunityEndpoints } from '../../api';
import { AppDispatch} from '@/reducer/store';
import { setLoading } from "@/reducer/studentSlices/opportunitySlice";
const {
    POST_OPPORTUNITY_API

} = opportunityEndpoints;

// let token = localStorage.getItem("token");

interface OpportunityFormData {
    profile: string;
    company: string;
    description: string;
    experience: string;
    applicationLink: string;
    branch: string;
    positionType: string;
    applicationDeadline: string;
}

export const addOpportunity = (formData: OpportunityFormData) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await apiConnector({
            method: 'POST',
            url: POST_OPPORTUNITY_API,
            bodyData: formData,
            headers: {
                Authorization: `Bearer ${"token"}`,
            },
        });

        if (response.status === 200) {
            toast.success("Opportunity added successfully");
            const router = useRouter();
            router.push("/opportunities");
        }

    } catch (error) {
        toast.error("Network Error, Try again later");
        console.log("error", error);
        //   dispatch(setError(error.response?.data.message || 'Signup failed')); // Handle the error message
    } finally {
        dispatch(setLoading(false));
    }
}




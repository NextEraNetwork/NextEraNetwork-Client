import { apiConnector } from "../../apiConnector";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { opportunityEndpoints } from '../../api';
import { useSelector } from 'react-redux';
import { RootState } from '@/reducer/store';
const {
    POST_OPPORTUNITY_API

} = opportunityEndpoints;

const token = useSelector((state: RootState) => state.auth.token);

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

export const addOpportunity = (formData: OpportunityFormData) => async (dispatch: any) => {

    try {
        const response = await apiConnector({
            method: 'POST',
            url: POST_OPPORTUNITY_API,
            bodyData: formData,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            toast.success("Opportunity added successfully");
            const router = useRouter();
            router.push("/opportunities");
        }

    } catch (error) {
        toast.error("Network Error, Try again later");
        //   dispatch(setError(error.response?.data.message || 'Signup failed')); // Handle the error message
    } finally {
        // dispatch(setLoading(false));
    }
}




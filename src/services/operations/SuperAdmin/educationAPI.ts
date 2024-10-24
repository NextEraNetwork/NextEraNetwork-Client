import { apiConnector } from "../../apiConnector";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { superAdminEndpoints } from '../../api';
import { useSelector } from 'react-redux';
import { RootState } from '@/reducer/store';

const {
    POST_UNIVERSITY_API
} = superAdminEndpoints;

interface UniversityFormData {
    universityName: string;
    address: string;
    image: File | null;
  }

export const createUniversity = (formData: UniversityFormData) => async (dispatch: any) => {
    try {
        const response = await apiConnector({
            method: 'POST',
            url: POST_UNIVERSITY_API,
            bodyData: formData,
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        });

        if (response.status === 200) {
            toast.success("University added successfully");
            const router = useRouter();
            router.push("/discussions");
        }

    } catch (error) {
        toast.error("Network Error, Try again later");
        //   dispatch(setError(error.response?.data.message || 'Signup failed')); // Handle the error message
    } finally {
        // dispatch(setLoading(false));
    }
}

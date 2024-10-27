import { apiConnector } from "../../apiConnector";
import { toast } from 'react-toastify';
import { questionEndpoints } from '../../api';

const {
    POST_QUESTION_API

} = questionEndpoints;

let token  = localStorage.getItem("token");

interface QuestionFormData {
    branch: string;
    difficulty: string;
    description: string;
    companyName: string;
    questionTitle: string;
    questionLink: string;
}

export const addQuestion = (formData: QuestionFormData) => async (dispatch: any) => {

    try {
        const response = await apiConnector({
            method: 'POST',
            url: POST_QUESTION_API,
            bodyData: formData,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            toast.success("Question added successfully");
            // router.push("/questions");
        }
        else{
            // router.push("/questions/addQuestions");
        }

    } catch (error) {
        toast.error("Network Error, Try again later");
        //   dispatch(setError(error.response?.data.message || 'Signup failed')); // Handle the error message
    } finally {
        // dispatch(setLoading(false));
    }
}




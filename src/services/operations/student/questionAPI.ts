import { apiConnector } from "../../apiConnector";
import { toast } from 'react-toastify';
import { questionEndpoints } from '../../api';
import { AppDispatch } from "@/reducer/store";
import { setLoading, setQuestion, setQuestionList } from "@/reducer/studentSlices/questionSlice";

const {
    POST_QUESTION_API,
    GET_ALL_QUESTION_API

} = questionEndpoints;


interface QuestionFormData {
    branch: string;
    difficulty: string;
    description: string;
    companyName: string;
    questionTitle: string;
    questionLink: string;
}

export const addQuestion = (formData: QuestionFormData) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    try {
        const response = await apiConnector({
            method: 'POST',
            url: POST_QUESTION_API,
            bodyData: formData,
            withCredentials:true
        });

        if (response.status === 200) {
            toast.success("Question added successfully");
        }
        else{
            // router.push("/questions/addQuestions");
        }

    } catch (error) {
        toast.error(`Network Error, Try again later ${error}`);
        //   dispatch(setError(error.response?.data.message || 'Signup failed')); // Handle the error message
    } finally {
        dispatch(setLoading(false));
    }
}

export const getQuestion = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    try {
        const response = await apiConnector({
            method: 'GET',
            url: GET_ALL_QUESTION_API,
            withCredentials:true
        });

        console.log("question reponse", response.data.data[0])
        if (response.status === 200) {
            // toast.success("Question added successfully");
            dispatch(setQuestionList(response.data.data));
        }

    } catch (error) {
        toast.error(`Network Error, Try again later ${error}`);
        //   dispatch(setError(error.response?.data.message || 'Signup failed')); // Handle the error message
    } finally {
        dispatch(setLoading(false));
    }
}




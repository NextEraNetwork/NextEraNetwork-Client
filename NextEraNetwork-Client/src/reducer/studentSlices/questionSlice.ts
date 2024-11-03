import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionData {
    id: string,
    branch: string;
    difficulty: string;
    description: string;
    companyName: string;
    questionTitle: string;
    questionLink: string;
}

interface QuestionState {
    questionList: QuestionData[],
    questionDetail: QuestionData,
    loading: boolean
}

const initialState: QuestionState = {
    questionList: [
        {
            id: '',
            branch: '',
            difficulty: '',
            description: '',
            companyName: '',
            questionTitle: '',
            questionLink: '',
        }
    ],
    questionDetail : {
        id: '',
            branch: '',
            difficulty: '',
            description: '',
            companyName: '',
            questionTitle: '',
            questionLink: '',
    },
    loading:false
};

const questionSlice = createSlice({
    name:'question',
    initialState,
    reducers:{
        setQuestionList(state, action :PayloadAction<QuestionData[]>){
            state.questionList = action.payload;
        },
        setQuestion(state, action: PayloadAction<QuestionData>){
            state.questionDetail = action.payload;
        },
        setLoading(state, action : PayloadAction<boolean>){
            state.loading = action.payload
        }
    }
})

export const { setQuestionList, setQuestion, setLoading } = questionSlice.actions;
export default questionSlice.reducer;
import {
    GET_QUESTIONS_PENDING,
    GET_QUESTIONS_FULFILLED,
    GET_QUESTIONS_REJECTED,
    SET_QUESTION_INDEX,
    RESET_QUESTION_STATE,
    SAVE_ANSWER,
    SHOW_ERROR
} from "../actions/question";

const initialState = {
    questions: [],
    questionIndex: 0,
    loading: true,
    error: false,
    formData: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_QUESTIONS_FULFILLED:
            return {
                ...state,
                questions: action.payload,
                loading: false
            };
        case GET_QUESTIONS_PENDING:
            return {
                ...state,
                loading: true
            };
        case GET_QUESTIONS_REJECTED:
            return {
                ...state,
                loading: false,
                error: true
            };
        case SET_QUESTION_INDEX:
            return {
                ...state,
                questionIndex: state.questionIndex + action.payload
            };
        case RESET_QUESTION_STATE:
            return {
                ...initialState
            };
        case SAVE_ANSWER:
            let _formData = [...state.formData];
            _formData[state.questionIndex] = action.payload;

            return {
                ...state,
                formData: [..._formData]
            };
        case SHOW_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;

    }
}

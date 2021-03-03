import {GET_QUESTIONS_PENDING, GET_QUESTIONS_FULFILLED, GET_QUESTIONS_REJECTED} from "../actions/question";

const initialState = {
    questions: [],
    loading: true,
    error: false,
    question: {}
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
        default:
            return state;

    }
}

export const GET_QUESTIONS = "GET_QUESTIONS";
export const GET_QUESTIONS_PENDING = `${GET_QUESTIONS}_PENDING`;
export const GET_QUESTIONS_FULFILLED = `${GET_QUESTIONS}_FULFILLED`;
export const GET_QUESTIONS_REJECTED = `${GET_QUESTIONS}_REJECTED`;

export const SET_QUESTION_INDEX = "SET_QUESTION_INDEX";
export const RESET_QUESTION_STATE = "RESET_QUESTION_STATE";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const SHOW_ERROR = "SHOW_ERROR";

export function getQuestions(id) {

    let data;

    const _promise = new Promise(function (resolve) {
        setTimeout(() => {
            data = require(`../../data/${id}-questions.json`)
            resolve(data)
        }, 500)
    })
    return dispatch => {
        dispatch({
            type: GET_QUESTIONS,
            payload: _promise.then(data => {
                return data
            })
        })
    }

}

export function setQuestionIndex(value) {
    return dispatch => {
        dispatch({
            type: SET_QUESTION_INDEX,
            payload: value
        })
    }
}

export function resetQuestionState() {
    return dispatch => {
        dispatch({
            type: RESET_QUESTION_STATE
        })
    }
}

export function saveAnswer(answer) {
    return dispatch => {
        dispatch({
            type: SAVE_ANSWER,
            payload: answer
        })
    }
}

export function showError(message) {
    return dispatch => {
        dispatch({
            type: SHOW_ERROR,
            payload: message
        })
    }
}



export const GET_QUESTIONS = "GET_QUESTIONS";
export const GET_QUESTIONS_PENDING = `${GET_QUESTIONS}_PENDING`;
export const GET_QUESTIONS_FULFILLED = `${GET_QUESTIONS}_FULFILLED`;
export const GET_QUESTIONS_REJECTED = `${GET_QUESTIONS}_REJECTED`;

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
            payload: _promise.then(data => data)
        })
    }

}

export function getCurrentService() {

    let data;

    const _promise = new Promise(function (resolve) {
        setTimeout(() => {
            data = require('../../data/services.json')
            resolve(data)
        }, 500)
    })
    return dispatch => {
        dispatch({
            type: GET_QUESTIONS,
            payload: _promise.then(data => data)
        })
    }

}

import {getQuestions} from "./question";

export const GET_SERVICES = "GET_SERVICES";
export const GET_SERVICES_PENDING = `${GET_SERVICES}_PENDING`;
export const GET_SERVICES_FULFILLED = `${GET_SERVICES}_FULFILLED`;
export const GET_SERVICES_REJECTED = `${GET_SERVICES}_REJECTED`;

export const SET_CURRENT_SERVICE = 'SET_CURRENT_SERVICE';
export const SET_CURRENT_SERVICE_PENDING = `${SET_CURRENT_SERVICE}_PENDING`;
export const SET_CURRENT_SERVICE_FULFILLED = `${SET_CURRENT_SERVICE}_FULFILLED`;
export const SET_CURRENT_SERVICE_REJECTED = `${SET_CURRENT_SERVICE}_REJECTED`;

export function getServices() {

    let data;

    const _promise = new Promise(function (resolve) {
        setTimeout(() => {
            data = require('../../data/services.json')
            resolve(data)
        }, 500)
    })
    return dispatch => {
        dispatch({
            type: GET_SERVICES,
            payload: _promise.then(data => data)
        })
    }

}

export function setCurrentService(id) {

    let data;

    const _promise = new Promise(function (resolve) {
        setTimeout(() => {
            data = require('../../data/services.json')
            resolve(data)
        }, 500)
    })
    return dispatch => {
        dispatch({
            type: SET_CURRENT_SERVICE,
            payload: _promise.then(_data => {
                getQuestions(id)
                return _data.find(item => item.serviceId === parseInt(id))
            })
        })
    }

}

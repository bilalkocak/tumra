export const GET_SERVICES = "GET_SERVICES";
export const GET_SERVICES_PENDING = `${GET_SERVICES}_PENDING`;
export const GET_SERVICES_FULFILLED = `${GET_SERVICES}_FULFILLED`;
export const GET_SERVICES_REJECTED = `${GET_SERVICES}_REJECTED`;

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

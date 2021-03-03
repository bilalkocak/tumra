import {GET_SERVICES_FULFILLED, GET_SERVICES_PENDING, GET_SERVICES_REJECTED} from "../actions/service";

const initialState = {
    services: [],
    loading: true,
    error: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVICES_FULFILLED:
            return {
                ...state,
                services: action.payload,
                loading: false
            };
        case GET_SERVICES_PENDING:
            return {
                ...state,
                services: action.payload,
                loading: true
            };
        case GET_SERVICES_REJECTED:
            return {
                ...state,
                services: action.payload,
                loading: false,
                error: true
            };
        default:
            return state;

    }
}

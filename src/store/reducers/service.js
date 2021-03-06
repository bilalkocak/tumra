import {
    GET_SERVICES_FULFILLED,
    GET_SERVICES_PENDING,
    GET_SERVICES_REJECTED,
    SET_CURRENT_SERVICE_PENDING,
    SET_CURRENT_SERVICE_FULFILLED,
    SET_CURRENT_SERVICE_REJECTED
} from "../actions/service";

const initialState = {
    services: [],
    loading: true,
    error: false,
    service: {
        loading: true,
        error: true,
        currentService: {}
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVICES_FULFILLED:
            return {
                ...state,
                services: action.payload,
                loading: false,
                error: false
            };
        case GET_SERVICES_PENDING:
            return {
                ...state,
                loading: true
            };
        case GET_SERVICES_REJECTED:
            return {
                ...state,
                loading: false,
                error: true
            };
        case SET_CURRENT_SERVICE_FULFILLED:
            return {
                ...state,
                service: {
                    error: false,
                    currentService: action.payload,
                    loading: false
                }
            };
        case SET_CURRENT_SERVICE_PENDING:
            return {
                ...state,
                service: {
                    ...initialState.service,
                    loading: true
                }
            };
        case SET_CURRENT_SERVICE_REJECTED:
            return {
                ...state,
                service: {
                    loading: false,
                    currentService: initialState.service.currentService,
                    error: true
                }
            };
        default:
            return state;

    }
}

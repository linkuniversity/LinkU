import * as types from '../actiontypes/Login';

const loginInitialState = {
    username : 'undefined',
    password : 'undefined',
    fetching : false,
    payload : null,
    loggedIn : localStorage.hasOwnProperty('token') ? true : false
};

export default function login(state = loginInitialState, action){
    switch(action.type){
        case types.LOGIN:
            return {
                ...state,
                loggedIn : true
            };
        case types.LOGOUT:
            return {
                ...state,
                loggedIn : false
            };
        case types.REQUEST_LOGIN:
            return {
                ...state,
                username : action.username,
                password : action.password,
                fetching : true
            };
        case types.SUCCESS_LOGIN:
            return {
                ...state,
                fetching : false,
                payload : action.payload,
                loggedIn : true
            };
        case types.FAILURE_LOGIN:
            return {
                ...state,
                fetching : false,
                payload : action.payload,
                loggedIn : false
            };
        default:
            return state;
    }
}

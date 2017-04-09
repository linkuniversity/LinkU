import * as types from '../actiontypes/Login';

const loginInitialState = {
    id : 'undefined',
    password : 'undefined',
    fetching : false,
    payload : null,
    loggedIn : false
};

export default function login(state = loginInitialState, action){
    switch(action.type){
        case types.REQUEST_LOGIN:
            return {
                ...state,
                id : action.id,
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

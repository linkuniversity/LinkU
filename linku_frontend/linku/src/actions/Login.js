import * as types from '../actiontypes/Login';

export function login(){
    return {
        type : types.LOGIN
    };
}

export function logout(){
    localStorage.setItem('token',undefined);
    return {
        type : types.LOGOUT
    };
}
export function loginRequest(id, password){
    return {
        type : types.REQUEST_LOGIN,
        id,
        password
    };
}

export function loginSuccess(payload){
    localStorage.setItem('token', payload.data.token);
    return {
        type : types.SUCCESS_LOGIN,
        payload
    };
}

export function loginFailure(error){
    return {
        type : types.FAILURE_LOGIN,
        error
    };
}

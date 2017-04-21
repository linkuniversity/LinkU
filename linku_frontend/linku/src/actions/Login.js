import * as types from '../actiontypes/Login';

export function login(){
    return {
        type : types.LOGIN
    };
}

export function logout(){
    localStorage.setItem('token', undefined);
    localStorage.setItem('user_gender', undefined);
    return {
        type : types.LOGOUT
    };
}
export function loginRequest(username, password){
    return {
        type : types.REQUEST_LOGIN,
        username,
        password
    };
}

export function loginSuccess(payload, user_info){
    localStorage.setItem('token', payload.data.token);
    localStorage.setItem('user_gender', user_info.data.gender);
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

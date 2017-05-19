import * as types from '../actiontypes/Login';

export function login(){
    return {
        type : types.LOGIN
    };
}

export function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user_gender');
    localStorage.removeItem('participated_dates');
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

export function loginSuccess(payload, user_info, participated_dates){
    localStorage.setItem('token', payload.data.token);
    localStorage.setItem('user_gender', user_info.data.gender);
    localStorage.setItem('participated_dates', participated_dates.data);
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

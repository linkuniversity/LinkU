import * as types from '../actiontypes/Common';

export function alertLogin(){
    return {
        type: types.ALERT_LOGIN
    }
}

export function hideLoginAlert(){
    return {
        type: types.HIDE_LOGIN_ALERT
    }
}

export function alertSignup(){
    return {
        type: types.ALERT_SIGNUP
    }
}

import * as types from '../actiontypes/Common';

export function alertSignup(){
    return {
        type: types.ALERT_SIGNUP
    }
}

export function hideSignupAlert(){
    return {
        type: types.HIDE_SIGNUP_ALERT
    }
}

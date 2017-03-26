import * as types from '../actiontypes/Common';

export function alertLogin(){
    return {
        type: types.ALERT_LOGIN
    }
}

export function hideLoginAlert(){
    console.log("hide!!");
    return {
        type: types.HIDE_LOGIN_ALERT
    }
}

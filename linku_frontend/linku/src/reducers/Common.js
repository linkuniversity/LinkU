import * as types from '../actiontypes/Common';

const alertLoginInitialState = {
    loginModalIsVisible : false
}

export default function loginAlert(state = alertLoginInitialState, action){
    switch(action.type){
        case types.ALERT_LOGIN:
            return {
                ...state,
                loginModalIsVisible : true
            };
        case types.HIDE_LOGIN_ALERT:
            return {
                ...state,
                loginModalIsVisible : false
            };
        default:
            return state;
    }
}

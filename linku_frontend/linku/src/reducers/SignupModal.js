import * as types from '../actiontypes/Common';

const alertSignupInitialState = {
    signupModalIsVisible : false
}

export default function signupAlert(state = alertSignupInitialState, action){
    switch(action.type){
        case types.ALERT_SIGNUP:
            return {
                ...state,
                signupModalIsVisible : true
            };
        case types.HIDE_SIGNUP_ALERT:
            return {
                ...state,
                signupModalIsVisible : false
            };
        default:
            return state;
    }
}

import * as types from '../actiontypes/Common';

const alertSignupInitialState = {
    SignupModalIsVisible : false
}

export default function signupAlert(state = alertSignupInitialState, action){
    switch(action.type){
        case types.ALERT_SIGNUP:
            return {
                ...state,
                SignupModalIsVisible : true
            }
        default:
            return state;
    }
}

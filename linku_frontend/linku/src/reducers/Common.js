import * as types from '../actiontypes/Common';

const alertLoginInitialState = {
    isVisible : false
}
export default function login(state = alertLoginInitialState, action){
    switch(action.type){
        case types.ALERT_LOGIN:
            return {
                ...state,
                isVisible : true
            };
        case types.HIDE_LOGIN_ALERT:
            return {
                ...state,
                isVisible : false
            }
        default:
            return state;
    }
}

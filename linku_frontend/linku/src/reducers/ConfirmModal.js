import * as types from '../actiontypes/Common';

const alertConfirmInitialState = {
    confirmModalIsVisible : false,
    confirmMessage : undefined,
    buttonColor : "blue"
};

export default function confirmAlert(state = alertConfirmInitialState, action) {
    switch(action.type){
        case types.ALERT_CONFIRM:
            return {
                ...state,
                confirmModalIsVisible : true,
                confirmMessage : action.message,
                buttonColor : action.color
            };
        case types.HIDE_CONFIRM_ALERT:
            return {
                ...state,
                confirmModalIsVisible : false
            };
        default:
            return state;
    }
}

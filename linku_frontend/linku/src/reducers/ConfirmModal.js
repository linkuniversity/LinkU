import * as types from '../actiontypes/Common';

const alertConfirmInitialState = {
    confirmModalIsVisible : false,
    confirmMessage : undefined
};

export default function confirmAlert(state = alertConfirmInitialState, action) {
    switch(action.type){
        case types.ALERT_CONFIRM:
            return {
                ...state,
                confirmModalIsVisible : true,
                confirmMessage : action.message
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

import * as types from '../actiontypes/Common';

export function alertConfirm(message, color) {
    return {
        type: types.ALERT_CONFIRM,
        message,
        color
    };
}

export function hideConfirmAlert() {
    return {
        type: types.HIDE_CONFIRM_ALERT
    };
}

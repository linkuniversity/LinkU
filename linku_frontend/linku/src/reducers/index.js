import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import meetingCardInfos from './meeting';
import login from './Login';
import confirmAlert from './ConfirmModal';

export const reducers =  combineReducers({
    confirmAlert,
    login,
    meetingCardInfos,
    form: formReducer
});

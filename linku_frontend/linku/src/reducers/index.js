import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginAlert from './Common';
import meetingCardInfos from './meeting';
import login from './Login';
import confirmAlert from './ConfirmModal';
import statisticsInfos from './Statistics';

export const reducers =  combineReducers({
    confirmAlert,
    loginAlert,
    login,
    meetingCardInfos,
    statisticsInfos,
    form: formReducer
});

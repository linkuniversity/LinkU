import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginAlert from './Common';
import meetingCardInfos from './meeting';
import login from './Login';
import signupAlert from './SignupModal';
import confirmAlert from './ConfirmModal';
import statisticsInfos from './Statistics';

export const reducers =  combineReducers({
    confirmAlert,
    loginAlert,
    login,
    signupAlert,
    meetingCardInfos,
    statisticsInfos,
    form: formReducer
});

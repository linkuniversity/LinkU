import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import meetingCardInfos from './meeting';
import login from './Login';
import signupAlert from './SignupModal';
import confirmAlert from './ConfirmModal';
import statisticsInfos from './Statistics';

export const reducers =  combineReducers({
    confirmAlert,
    login,
    signupAlert,
    meetingCardInfos,
    statisticsInfos,
    form: formReducer
});

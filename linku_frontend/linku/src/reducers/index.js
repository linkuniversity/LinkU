import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginAlert from './Common';
import meetingCardInfos from './meeting';
import login from './Login';
import signupAlert from './SignupModal';
import statisticsInfos from './Statistics';

export const reducers =  combineReducers({
    statisticsInfos,
    loginAlert,
    login,
    signupAlert,
    meetingCardInfos,
    form: formReducer
});

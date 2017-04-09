import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginAlert from './Common';
import meetingCardInfos from './meeting';
import login from './Login';

export const reducers =  combineReducers({
    loginAlert,login,meetingCardInfos, form: formReducer
});

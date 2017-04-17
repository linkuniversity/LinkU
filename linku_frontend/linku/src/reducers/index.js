import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import meetingCardInfos from './meeting';
import login from './Login';
import signupAlert from './SignupModal'

export const reducers =  combineReducers({
    login,signupAlert,meetingCardInfos, form: formReducer
});

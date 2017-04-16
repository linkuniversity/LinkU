import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginAlert from './Common';
import meetingCardInfos from './meeting';
import login from './Login';
import signupAlert from './SignupModal';
import confirmAlert from './ConfirmModal';

export const reducers =  combineReducers({
    loginAlert,login,signupAlert,confirmAlert,meetingCardInfos, form: formReducer
});

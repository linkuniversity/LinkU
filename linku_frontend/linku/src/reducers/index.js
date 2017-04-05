import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import login from './Common';
import meetingCardInfos from './meeting';

export const reducers =  combineReducers({
    login, meetingCardInfos, form: formReducer
});

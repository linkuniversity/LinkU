import { combineReducers } from 'redux';

import login from './Common';
import meetingCardInfos from './meeting';

export const reducers =  combineReducers({
    login, meetingCardInfos
});

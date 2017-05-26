import { call, put, takeEvery, fork } from 'redux-saga/effects';
import * as service from '../services/meeting';
import * as actions from '../actions/meetingcard';

function* fetchMeetingCardInfos(action){
    try{
        yield put(actions.requestMeetingCardInfos());
        let meetings = [];
        meetings.push(yield [call(service.getPrearrangedMeetingInfos)]);
        yield put(actions.receiveMeetingCardInfos(meetings));
    }catch(e){
        console.log(e);
        yield put(actions.receiveMeetingCardInfosFailed());
    }
}

function* watchFetchMeetingCardInfos(){
    yield takeEvery('FETCH_MEETING_CARD_INFOS', fetchMeetingCardInfos);
}

export default function* meeting(){
    yield fork(watchFetchMeetingCardInfos);
}

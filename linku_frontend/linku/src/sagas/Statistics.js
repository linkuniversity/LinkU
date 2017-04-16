import { call, put, takeEvery, fork } from 'redux-saga/effects';
import * as service from '../services/Statistics';
import * as actions from '../actions/Statistics';

function* fetchStatisticsInfos(action){
    try{
        const [statistics] = yield [
            call(service.getStatisticsInfos)
        ];
        yield put(actions.StatisticsSuccess(statistics));
    }catch(e){
        yield put(actions.StatisticsFailure(e));
    }
}

function* watchFetchStatisticsInfos(){
    yield takeEvery('FETCH_STATISTICS_INFOS', fetchStatisticsInfos);
}

export default function* statistics(){
    yield fork(watchFetchStatisticsInfos);
}

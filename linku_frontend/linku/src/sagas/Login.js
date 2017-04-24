import { call, put, takeEvery, fork } from 'redux-saga/effects';
import * as service from '../services/Login';
import * as actions from '../actions/Login';
import {alertConfirm} from '../actions/Common'

function* requestLogin(action){
    try{
        const [response] = yield [
            call(service.login, action.username, action.password)
        ];
        const [user_response] = yield [
            call(service.user, response.data.token)
        ];
        const [participated_dates] = yield [
            call(service.participated_dates, response.data.token)
        ];
        yield put(actions.loginSuccess(response, user_response, participated_dates));
    }catch(e){
        yield put(actions.loginFailure(e));
        yield put(alertConfirm("이메일 혹은 비밀번호가 올바르지 않습니다.","red"));
    }

}

function* watchLogin(){
    yield takeEvery('REQUEST_LOGIN', requestLogin);
}

export default function* login(){
    yield fork(watchLogin);
}

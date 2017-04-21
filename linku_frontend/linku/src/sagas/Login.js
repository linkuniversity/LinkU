import { call, put, takeEvery, fork } from 'redux-saga/effects';
import * as service from '../services/Login';
import * as actions from '../actions/Login';
import {alertConfirm} from '../actions/Common'

function* requestLogin(action){
    try{
        const [response] = yield [
            call(service.login, action.username, action.password)
        ];
        yield put(actions.loginSuccess(response));
    }catch(e){
        console.log(e);
        yield put(actions.loginFailure(e));
        yield put(alertConfirm("이메일 혹은 비밀번호가 올바르지 않습니다.","red"));
    }
}

function* requestUser(action){
    try{
        const [response] = yield [
            call(service.user)
        ];
        localStorage.setItem('user_gender', response.data['gender']);
    }catch(e){
        console.log(e);
    }

}

function* watchLogin(){
    yield takeEvery('REQUEST_LOGIN', requestLogin);
    yield takeEvery('SUCCESS_LOGIN', requestUser);
}

export default function* login(){
    yield fork(watchLogin);
}

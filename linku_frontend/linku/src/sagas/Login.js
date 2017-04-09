import { call, put, takeEvery, fork } from 'redux-saga/effects';
import * as service from '../services/Login';
import * as actions from '../actions/Login';

function* requestLogin(action){
    try{
        const [response] = yield [
            call(service.login, action.id, action.password)
        ];
        yield put(actions.loginSuccess(response));
    }catch(e){
        console.log(e);
        yield put(actions.loginFailure(e));
    }
}

function* watchLogin(){
    yield takeEvery('REQUEST_LOGIN', requestLogin);
}

export default function* login(){
    yield fork(watchLogin);
}

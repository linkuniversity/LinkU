import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { reducers } from '../reducers';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import {createStore, applyMiddleware} from 'redux';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
    reducers,
    applyMiddleware(...middleware),
);

sagaMiddleware.run(rootSaga);

if (!global.window.localStorage) {
    global.window.localStorage = {
        getItem() { return '{}'; },
        setItem() {}
    };
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store = {store}>
            <App />
        </Provider>
        , div);
});

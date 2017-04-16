import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App';
import Login from './components/login/Login'
import rootSaga from './sagas';

import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
  reducers,
  applyMiddleware(...middleware),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store = {store} >
        <Router history = {browserHistory}>
            <Route path="/">
                <IndexRoute component={App}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

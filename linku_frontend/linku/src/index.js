import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Login from './components/login/Login'

import { createStore } from 'redux';
import { reducers } from './reducers';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const store = createStore(reducers);

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

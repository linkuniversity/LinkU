import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App';
import rootSaga from './sagas';

import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';

var ReactGA = require('react-ga');
ReactGA.initialize('UA-97944196-1');

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
  reducers,
  applyMiddleware(...middleware),
);


function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store} >
        <Router history={browserHistory} onUpdate={logPageView}>
            <Route path="/">
                <IndexRoute component={App}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

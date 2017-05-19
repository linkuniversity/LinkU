import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App';
import rootSaga from './sagas';

import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {browserHistory} from 'react-router';
import createSagaMiddleware from 'redux-saga';
import LinkUHeader from './components/mainpage/LinkUHeader';
import LinkUGuide from './components/guide_page/LinkUGuide';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import PaymentDescription from './components/payment/PaymentDescription';
import PaymentApplyContents from './components/payment/PaymentApplyContents';
import SignupSelection from './components/signup/SignupSelection';


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
    <Provider store = {store} >
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <div>
                    <LinkUHeader/>
                    <Route path="/payment-description" component={PaymentDescription} />
                    <Route path="/payment-apply-contents" component={PaymentApplyContents} />
                    <Route path="/about" component={LinkUGuide} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup_selection" component={SignupSelection} />
                </div>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

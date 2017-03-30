import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import configureStore from 'redux-mock-store';
import { reducers } from '../../reducers';
import { Provider } from 'react-redux';

const middlewares = []
const mockStore = configureStore(middlewares);

const initialState = {
    login : {
        isVisible : false
    }
};
const store = mockStore(initialState);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store = {store}>
            <App />
        </Provider>
        , div);
});

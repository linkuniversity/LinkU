import React from 'react';
import {shallow, mount, render} from 'enzyme';
import MeetingCardBox from '../MeetingCardBox';
import MeetingCard from '../MeetingCard';
import CategoriesInMainPage from '../CategoriesInMainPage';

import configureMockStore from 'redux-mock-store';
import { reducers } from '../../../reducers';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';

import rootSaga from '../../../sagas';
import {createStore, applyMiddleware} from 'redux';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
    reducers,
    applyMiddleware(...middleware),
);

sagaMiddleware.run(rootSaga);

describe('<MeetingCardBox />', () => {

    it('renders without exploding', () => {
        const wrapper = mount(
            <Provider store = {store}>
                <MeetingCardBox />
            </Provider>
        );

        expect(wrapper.length).toEqual(1);
    });
});

import React from 'react';
import {shallow, mount, render} from 'enzyme';
import MeetingCardBox from '../MeetingCardBox';
import MeetingCard from '../MeetingCard';
import CategoriesInMainPage from '../CategoriesInMainPage';

import configureStore from 'redux-mock-store';
import { reducers } from '../../../reducers';
import { Provider } from 'react-redux';

const middlewares = []
const mockStore = configureStore(middlewares);

const initialState = {};
const store = mockStore(initialState);

describe('<MeetingCardBox />', () => {

    it('renders without exploding', () => {
        const wrapper = shallow(
            <Provider store = {store}>
                <MeetingCardBox />
            </Provider>);

        expect(wrapper.dive().length).toEqual(1);
    });


    it('renders a CategoriesInMainPage component', () => {
        const wrapper = shallow(
            <Provider store = {store}>
                <MeetingCardBox />
            </Provider>
        );
        expect(wrapper.dive().find(CategoriesInMainPage)).toHaveLength(1);
    });
});

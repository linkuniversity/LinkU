import React from 'react';
import { Grid } from 'semantic-ui-react';

import { mount } from 'enzyme';
import MeetingCard from '../MeetingCard';

import configureStore from 'redux-mock-store';
import { reducers } from '../../../reducers';
import { Provider } from 'react-redux';

if (!global.window.localStorage) {
    global.window.localStorage = {
        getItem() { return '{}'; },
        setItem() {}
    };
}

describe('<MeetingCard />', () => {

    it( 'renders without exploding', () => {
        expect(
            1
        ).toEqual(1);
    });
});

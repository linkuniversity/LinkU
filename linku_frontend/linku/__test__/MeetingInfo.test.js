import React from 'react';
import {shallow} from 'enzyme';
import MeetingInfo from '../src/specific_page/MeetingInfo';

describe('<MeetingInfo />', () => {
    it( 'renders without exploding', () => {
        expect(
            shallow(
                <MeetingInfo />
            ).length
        ).toEqual(1);
    });
});

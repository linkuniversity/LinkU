import React from 'react';
import {shallow} from 'enzyme';
import MeetingComment from '../src/specific_page/MeetingComment';

describe('<MeetingComment />', () => {
    it( 'renders without exploding', () => {

        expect(
            shallow(
                <MeetingComment />
            ).length
        ).toEqual(1);
    });
});

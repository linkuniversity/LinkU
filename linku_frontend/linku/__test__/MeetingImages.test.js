import React from 'react';
import {shallow} from 'enzyme';
import MeetingImages from '../src/specific_page/MeetingImages';

describe('<MeetingImages />', () => {
    it( 'renders without exploding', () => {
        expect(
            shallow(
                <MeetingImages />
            ).length
        ).toEqual(1);
    });
});

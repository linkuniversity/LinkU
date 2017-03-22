import React from 'react';
import {shallow} from 'enzyme';
import MyComment from '../src/specific_page/MyComment';

describe('<MyComment />', () => {
    it( 'renders without exploding', () => {
        expect(
            shallow(
                <MyComment />
            ).length
        ).toEqual(1);
    });
});

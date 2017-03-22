import React from 'react';
import {shallow} from 'enzyme';
import Maker from '../src/specific_page/Maker';

describe('<Maker />', () => {
    it( 'renders without exploding', () => {
        expect(
            shallow(
                <Maker />
            ).length
        ).toEqual(1);
    });
});

import React from 'react';
import {shallow} from 'enzyme';
import Place from '../src/specific_page/Place';

describe('<Place />', () => {
    it( 'renders without exploding', () => {
        expect(
            shallow(
                <Place />
            ).length
        ).toEqual(1);
    });
});

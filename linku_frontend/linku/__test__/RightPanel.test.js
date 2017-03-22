import React from 'react';
import {shallow} from 'enzyme';
import RightPanel from '../src/specific_page/RightPanel';

describe('<RightPanel />', () => {
    it( 'renders without exploding', () => {
        expect(
            shallow(
                <RightPanel />
            ).length
        ).toEqual(1);
    });
});

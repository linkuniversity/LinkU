import React from 'react';
import {shallow} from 'enzyme';
import Jumbotron from '../mainpage/Jumbotron';

describe('<Jumbotron />', () => {
    it( 'renders without exploding', () => {
        expect(
            shallow(
                <Jumbotron />
            ).length
        ).toEqual(1);
    });
});

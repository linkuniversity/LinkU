import React from 'react';
import {shallow} from 'enzyme';
import CategoriesInMainPage from '../src/CategoriesInMainPage';

describe('<CategoriesInMainPage />', () => {
    it( 'renders without exploding', () => {
        expect(
            shallow(
                <CategoriesInMainPage />
            ).length
        ).toEqual(1);
    });
});

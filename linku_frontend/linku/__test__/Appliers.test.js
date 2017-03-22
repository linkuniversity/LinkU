import React from 'react';
import {shallow} from 'enzyme';
import Appliers from '../src/specific_page/Appliers';

describe('<Appliers/>', ()=>{
    it('renders without exploding',() =>{
        expect(
            shallow(
                <Appliers/>
            ).length
        ).toEqual(1);
    });

});

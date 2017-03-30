import React from 'react';
import {mount} from 'enzyme';
import Maker from '../Maker';

describe('<Maker />', () => {

    const data = {
        maker : {
            profile_image : "https://pbs.twimg.com/profile_images/662419409600811009/lRH4GDHK.jpg",
            name : "test_name"
        }
    };

    const wrapper = mount(<Maker maker={data.maker}/>);

    it('renders without exploding', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('renders with maker name',() =>{
        expect(wrapper.text()).toContain(data.maker.name);
    });


});

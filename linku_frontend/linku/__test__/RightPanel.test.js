import React from 'react';
import {mount} from 'enzyme';
import RightPanel from '../src/specific_page/RightPanel';

describe('<RightPanel />', () => {

    const data = {
        panel : {
            place: 'test_place',
            time: "2017-02-25T18:00:00+09:00",
            num_of_joined_appliers: 6,
            max_num_ob_members: 6,
            price : 10000
        }
    };

    const wrapper = mount(<RightPanel panel={data.panel}/>);

    it('renders without exploding', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('renders with correct data', () =>{
        expect(wrapper.text()).toContain(data.panel.place);
        expect(wrapper.text()).toContain(data.panel.price);
    });
});

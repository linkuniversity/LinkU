import React from 'react';
import {mount} from 'enzyme';
import MeetingInfo from '../MeetingInfo';

describe('<MeetingInfo />', () => {

    const data = {
        info : {
            place: 'test_place',
            time: "2017-02-25T18:00:00+09:00",
            title : "test_title"
        }
    };

    const wrapper = mount(<MeetingInfo info={data.info}/>);

    it('renders without exploding', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('renders with correct data', () =>{
        expect(wrapper.text()).toContain(data.info.place);
        expect(wrapper.text()).toContain(data.info.title);
    });

});

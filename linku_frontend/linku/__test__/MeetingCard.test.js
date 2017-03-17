import React from 'react';
import {shallow} from 'enzyme';
import MeetingCard from '../src/MeetingCard';

describe('<MeetingCard />', () => {
    const meetingCardInfo = {
        food_img_path : "https://avatars1.githubusercontent.com/u/8240556?v=3&s=88",
        prof_img_path : "http://pngimg.com/upload_small/face/face_PNG5668.png",
        title : "test title",
        start_time : "test time",
        place : "test place"
    };
    const wrapper = shallow(<MeetingCard meetingInfo={meetingCardInfo}/>);

    it( 'renders without exploding', () => {
        expect(
            wrapper.length
        ).toEqual(1);
    });

    it( 'renders title & place & start_time', () => {
        expect(wrapper.text()).toContain(meetingCardInfo.title);
        expect(wrapper.text()).toContain(meetingCardInfo.start_time);
        expect(wrapper.text()).toContain(meetingCardInfo.place);
    });

});

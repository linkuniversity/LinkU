import React from 'react';
import {shallow, mount} from 'enzyme';
import MeetingCardBox from '../mainpage/MeetingCardBox';
import MeetingCard from '../mainpage/MeetingCard';
import CategoriesInMainPage from '../mainpage/CategoriesInMainPage';

describe('<MeetingCardBox />', () => {

    it('renders without exploding', () => {
        const wrapper = shallow(<MeetingCardBox />);
        expect(wrapper.length).toEqual(1);
    });


    it('renders a CategoriesInMainPage component', () => {
        const wrapper = shallow(<MeetingCardBox />);
        expect(wrapper.find(CategoriesInMainPage)).toHaveLength(1);
    });

    it('renders a MeetingCard when MeetingCardBox has a state',() => {
        const wrapper = mount(<MeetingCardBox />);
        wrapper.setState({
            meeting_infos :[
                {
                    food_img_path : "test img path",
                    prof_img_path : "test img path",
                    title : "test title",
                    start_time : "test start_time",
                    place : "test place"
                }
            ]
        });
        expect(wrapper.find(MeetingCard)).toHaveLength(1);
    });

    it('renders multiple MeetingCards when MeetingCardBox has multiple states',() => {
        const wrapper = mount(<MeetingCardBox />);
        wrapper.setState({
            meeting_infos :[
                {
                    food_img_path : "test img path",
                    prof_img_path : "test img path",
                    title : "test title",
                    start_time : "test start_time",
                    place : "test place"
                },
                {
                    food_img_path : "test img path2",
                    prof_img_path : "test img path2",
                    title : "test title2",
                    start_time : "test start_time2",
                    place : "test place2"
                }
            ]
        });
        expect(wrapper.find(MeetingCard)).toHaveLength(2);
    });
});

import React from 'react';
import {shallow, mount} from 'enzyme';
import MeetingCardBox from '../src/MeetingCardBox';
import MeetingCard from '../src/MeetingCard';
import CategoriesInMainPage from '../src/CategoriesInMainPage';

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

});

import React from 'react';
import {mount} from 'enzyme';
import Place from '../specific_page/Place';

describe('<Place />', () => {

    const data = {
        place : {
                restaurant_name : "test_restaurant_name",
                category : "test_category",
                specific_link : "http://map.naver.com/local/siteview.nhn?code=31801473",
                gps_latitude : 37.5564015, // 위도
                gps_longtitude : 126.9267368 // 경도
        }
    };

    const wrapper = mount(<Place place={data.place}/>);

    it('renders without exploding', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('renders with correct data', () =>{
        expect(wrapper.text()).toContain(data.place.restaurant_name);
        expect(wrapper.text()).toContain(data.place.category);
    });
});

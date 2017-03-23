import React from 'react';
import {mount} from 'enzyme';
import MeetingImages from '../src/specific_page/MeetingImages';

describe('<MeetingImages />', () => {

    const data = {
        images : {
            main_image: "http://butanchu.com/wp-content/uploads/2013/11/ramen03.jpg",
            images: ["http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201403/06/74/f0011274_53181f239bb52.jpg", "http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201403/06/74/f0011274_53181f239bb52.jpg", "http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201403/06/74/f0011274_53181f239bb52.jpg", "http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201403/06/74/f0011274_53181f239bb52.jpg"]
        }
    };

    const wrapper = mount(<MeetingImages images={data.images}/>);

    it('renders without exploding', () => {
        expect(wrapper.length).toEqual(1);
    });

});

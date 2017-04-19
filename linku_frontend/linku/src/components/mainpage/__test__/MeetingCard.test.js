import React from 'react';
import { Grid } from 'semantic-ui-react';

import { mount } from 'enzyme';
import MeetingCard from '../MeetingCard';

import configureStore from 'redux-mock-store';
import { reducers } from '../../../reducers';
import { Provider } from 'react-redux';

if (!global.window.localStorage) {
    global.window.localStorage = {
        getItem() { return '{}'; },
        setItem() {}
    };
}

describe('<MeetingCard />', () => {
    const middlewares = []
    const mockStore = configureStore(middlewares);

    const initialState = {
        login : {
            loggedIn : false
        }
    }
    const store = mockStore(initialState);

    const meetingCardInfo = {
        food_img_path : "https://avatars1.githubusercontent.com/u/8240556?v=3&s=88",
        prof_img_path : "http://pngimg.com/upload_small/face/face_PNG5668.png",
        title : "",
        start_time : "",
        place : ""
    };
    const wrapper = mount(
        <Provider store = { store }>
            <MeetingCard meetingInfo={meetingCardInfo}/>
        </Provider>
    );

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

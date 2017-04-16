import React, {Component} from 'react';
import MeetingImages from './specific_page/MeetingImages';
import RightPanel from './specific_page/RightPanel';
import MeetingInfo from './specific_page/MeetingInfo';
import Maker from './specific_page/Maker';
import Place from './specific_page/Place';
import Appliers from './specific_page/Appliers';

import Signup from './signup/Signup';
import Login from './login/Login';
import MeetingCardBox from './mainpage/MeetingCardBox';
import IntroVideo from './mainpage/IntroVideo';
import IntroOfLinkU from './mainpage/IntroOfLinkU';
import LinkUHeader from './mainpage/LinkUHeader';

export default class App extends Component {
    render() {
        return (
            <div>
                <Signup />
                <Login />
                <LinkUHeader />
                <IntroVideo />
                <IntroOfLinkU />
                <MeetingCardBox />
            </div>
        );
    }
}

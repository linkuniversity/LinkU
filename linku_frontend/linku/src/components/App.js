import React, {Component} from 'react';
import MeetingImages from './specific_page/MeetingImages';
import RightPanel from './specific_page/RightPanel';
import MeetingInfo from './specific_page/MeetingInfo';
import Maker from './specific_page/Maker';
import Place from './specific_page/Place';
import Appliers from './specific_page/Appliers';

import Login from './login/Login';
import Jumbotron from './mainpage/Jumbotron';
import MeetingCardBox from './mainpage/MeetingCardBox';
import LinkUHeader from './mainpage/LinkUHeader'
import IntroMovie from './mainpage/IntroMovie'
import IntroOfLinkU from './mainpage/IntroOfLinkU'

export default class App extends Component {
    render() {
        return (
            <div>
                <LinkUHeader/>
                <IntroMovie/>
                <IntroOfLinkU />
            </div>
        );
    }
}

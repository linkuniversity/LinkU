import React from 'react';

import MeetingCardBox from './mainpage/MeetingCardBox';
import IntroOfLinkU from './mainpage/IntroOfLinkU';
import LinkUHeader from './mainpage/LinkUHeader';
import NextMeetingAlarm from './mainpage/NextMeetingAlarm';
import Review from './mainpage/Review';
import Statistics from './mainpage/Statistics';
import LinkUContact from './mainpage/LinkUContact';
import LinkUFooter from './mainpage/LinkUFooter';

class App extends React.Component{

    componentDidMount() {
        if (process.env.REACT_APP_LINKU_SERVER_ENVIRONMENT === 'production'){
            var ReactGA = require('react-ga');
            ReactGA.pageview(window.location.pathname);
        }
    }

    render(){
        return(
            <div >
                <IntroOfLinkU />
                <MeetingCardBox />
                <NextMeetingAlarm />
                <Review />
                <Statistics />
                <LinkUContact />
                <LinkUFooter />
            </div>
        );
    }
}

export default App;

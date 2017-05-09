import React from 'react';

import MeetingCardBox from './mainpage/MeetingCardBox';
import IntroOfLinkU from './mainpage/IntroOfLinkU';
import LinkUHeader from './mainpage/LinkUHeader';
import NextMeetingAlarm from './mainpage/NextMeetingAlarm';
import Review from './mainpage/Review';
import Statistics from './mainpage/Statistics';
import LinkUContact from './mainpage/LinkUContact';
import LinkUFooter from './mainpage/LinkUFooter';

const App = () => (
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

export default App;

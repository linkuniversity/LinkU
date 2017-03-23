import React, { Component } from 'react';
import MeetingCardBox from './mainpage/MeetingCardBox';
import Jumbotron from './mainpage/Jumbotron';

export default class App extends Component {
    render() {
        return (
            <div>
                <Jumbotron />
                <MeetingCardBox />
            </div>
        );
    }
}

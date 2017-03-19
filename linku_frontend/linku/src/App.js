import React, { Component } from 'react';
import MeetingCardBox from './MeetingCardBox';
import Jumbotron from './Jumbotron';

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

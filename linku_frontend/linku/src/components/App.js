import React, { Component } from 'react';
import MeetingCardBox from './mainpage/MeetingCardBox';
import Jumbotron from './mainpage/Jumbotron';

import Login from './login/Login';

export default class App extends Component {
    render() {
        return (
            <div>
                <Login />
                <Jumbotron />
                <MeetingCardBox />
            </div>
        );
    }
}

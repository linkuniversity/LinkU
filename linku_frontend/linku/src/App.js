import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MeetingCardBox from './MeetingCardBox';
import Jumbotron from './Jumbotron';

class App extends Component {
    render() {
        return (
            <div>
                <Jumbotron />
                <MeetingCardBox />
            </div>
        );
    }
}

export default App;

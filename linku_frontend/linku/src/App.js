import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MeetingCardBox from './MeetingCardBox';
import Jumbotron from './Jumbotron';
import MeetingImages from './specific_page/MeetingImages';
import RightPanel from './specific_page/RightPanel';
import MeetingInfo from './specific_page/MeetingInfo';
import Maker from './specific_page/Maker';
import Place from './specific_page/Place';
import Appliers from './specific_page/Appliers';


class App extends Component {
    render() {
        return (
            <div>
                <MeetingImages/>
                <RightPanel/>
                <MeetingInfo/>
                <Maker/>
                <Place/>
                <Appliers/>
            </div>
        );
    }
}

export default App;

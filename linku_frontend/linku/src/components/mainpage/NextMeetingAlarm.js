import React, {Component} from 'react';
import {Form, Segment, Input, Dimmer, Container, Grid, Card, Image, Button, Modal} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';

import * as actions from '../../actions/Common';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';
import Login from '../login/Login';
import { alertConfirm } from '../../actions/Common';

class NextMeetingAlarm extends React.Component{
    activityNeedRequest = async (_contents) => {
        const info = await Promise.all([axios.post('http://127.0.0.1:8000/activity-needs/','contents='+_contents)
            .then( response => {

            })
            .catch(e => {
                console.log(e);
            })
        ]);
    }

    handleClick = (e) => {
        this.props.alertConfirm("알림받기 신청이 완료되었습니다!", "blue");
    }

    render(){
        let containerStyle= {
            marginTop: '40px',
            marginBottom: '40px',
            paddingTop: '33px',
            paddingBottom: '33px',
            paddingLeft: '12px',
            paddingRight: '12px',
            backgroundColor: '#f8f8f9',
            textAlign: 'center',
            fontSize: '16pt',
            lineHeight: '30pt'
        };

        const getBtnByState = () => {
            const button = (<Button style={{marginTop: '20px', width: '120px'}} color='blue' content='알림받기' />);
            if(this.props.loggedIn) {
                return (<Button style={{marginTop: '20px', width: '120px'}} color='blue' content='알림받기'
                    onClick={this.handleClick}/>);
            }
            else
                return (<Login triggerButton={button}/>);
        };

        return(
            <Container style={containerStyle}>
                이번 모임이 시간에 맞지 않는다면 ?<br/>
                앞으로 진행될 모임의 일정을 문자로 알려드려요 :D<br/>
                {getBtnByState()}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn : state.login.loggedIn
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        alertConfirm : (message, color) => {
            return dispatch(alertConfirm(message, color));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NextMeetingAlarm);

import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import axios from 'axios';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';
import Login from '../login/Login';
import { alertConfirm } from '../../actions/Common';
import {withRouter} from 'react-router-dom';

class NextMeetingAlarm extends React.Component{
    handleClick = async () => {
        const config = {
            headers: { 'Authorization': 'Token ' + localStorage.getItem('token') }
        };
        await Promise.all([axios.post(DEFAULT_REQUEST_URL + '/next-meeting-alarm/', undefined, config)
            .then( response => {
                console.log(response);
                this.props.alertConfirm("신청이 완료되었어요 :D", "blue");
            }).catch(e => {
                this.props.alertConfirm("이미 신청되었어요 :D", "blue");
            })
        ]);
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
            if(this.props.loggedIn) {
                return (<Button style={{marginTop: '20px', width: '120px'}} color='blue' content='알림받기'
                    onClick={this.handleClick}/>);
            }
            else
                return (
                    <Button
                        onClick={()=>this.props.history.push('/login')}
                        style={{marginTop: '20px', width: '120px'}}
                        color='blue'
                        content='알림받기'
                        />);
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
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NextMeetingAlarm));

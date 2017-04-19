import React from 'react';
import { connect } from 'react-redux';
import { Container,Card, Button, Dropdown, Menu, Grid, Header } from 'semantic-ui-react'

import { bindActionCreators } from 'redux';

import * as actions from '../../actions/Common';

import Apply from './Apply';
import Login from '../login/Login';
import axios from 'axios';

class MeetingCard extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            isParticipated : false
        };
    }

    _fetchIsParticipatedInfo = async(token) => {
        const config = {
            headers: { 'Authorization': token }
        };

        const info = await Promise.all([axios.post('http://127.0.0.1:8000/isparticipated/',{},config )
            .then(response => {
                this.setState({
                    isParticipated : response.data
                });
            })
            .catch(error => {
                console.log(error.response.data);
            })
        ]);
    }
    componentDidMount(){
        const token = localStorage.getItem('token');

        if(token == undefined)
            return;
        else {
            this._fetchIsParticipatedInfo(token);
        }
    }
    render() {
        const button = (<Button color='blue' fluid>신청하기</Button>);

        let meetingInfoBackgroundStyle = {
            backgroundColor: '#F8F8F9',
        };
        let meetingDetailButtonStyle = {
            backgroundColor: '#5FA1D7',
            textAlign: 'center',
            width : '100%',
            fontSize : '14pt',
            height : '45px' ,
        };
        let meetingInfoStyle = {
            width: '620px',
            height: '360px',
            marginTop: '43px',
            marginBottom: '43px',
            textAlign: 'left',
            backgroundImage: 'url(http://localhost:8000/media/meeting_card.jpg)',
        };
        let meetingApplyStyle = {
            margin: '43px',
            width: '225px',
            height: '300px',
            textAlign: 'left',
        };
        const meetingDateOptions = [
            { key: 1, text: '목요일', value: 1 },
            { key: 2, text: '금요일', value: 2 },
            { key: 3, text: '토요일', value: 3 },
        ]

        return(
            <Container style={meetingInfoBackgroundStyle}>
                <Grid centered>
                    <div style={meetingInfoStyle}>
                        <div style={{color: "#FFFFFF"}}>
                            <Header style={{color: '#FFFFFF'}} as='h1'>문화예술의 동네 혜화</Header>
                            <div style={{marginTop: '22px'}}>{this.props.meetingInfo.meeting_specific_info}</div>
                        </div>
                        <div style={meetingDetailButtonStyle} color='grey'><span style={{marginTop: '50%', fontColor: '#FFFFFF'}}>상세 보기</span></div>
                    </div>
                <Card style={meetingApplyStyle}>
                    <Card.Content>
                        <Card.Header>
                            <Menu compact>
                                <Dropdown placeholder='클릭해서 시간 선택하기' selection options={meetingDateOptions} />
                            </Menu>
                        </Card.Header>
                        <Card.Description>
                            {this.props.meetingInfo.start_time}
                            <br/>
                            {this.props.meetingInfo.maker_name}
                            <br/>
                            {this.props.meetingInfo.price}
                            <br/>
                            {this.props.meetingInfo.title}
                            <br/>
                            {this.props.meetingInfo.place}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        {
                            (this.state.isParticipated) ?
                                <Button disabled color='blue' fluid>신청완료</Button> :
                            (
                                (localStorage.getItem('token') && this.props.loggedIn) ?
                                (<Apply triggerButton={button}/>)
                                :
                                (<Login triggerButton={button}/>)
                            )
                        }
                    </Card.Content>
                    </Card>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {loggedIn : state.login.loggedIn}
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect( mapStateToProps, mapDispatchToProps)(MeetingCard);

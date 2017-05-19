import React from 'react';
import { connect } from 'react-redux';
import { Container,Card, Button, Dropdown, Menu, Grid, Item, Divider, Icon, Image } from 'semantic-ui-react'

import { bindActionCreators } from 'redux';

import * as actions from '../../actions/Common';

import Apply from './Apply';
import Login from '../login/Login';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';
import {withRouter} from 'react-router-dom';

class MeetingCard extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            selectedValue : undefined,
            participant_num : 0,
            participant_man_num : undefined,
            participant_woman_num : undefined,
            start_time : undefined,
            max_num_of_members : undefined,
        };
    }

    _participatedSelectionChange = (e, data) => {
        const current_status = this.props.meetingInfo.status_by_days[data.value];
        this.setState({
            ...this.state,
            selectedValue : data.value,
            participant_num : current_status.participant_num.man + current_status.participant_num.woman,
            participant_man_num : current_status.participant_num.man,
            participant_woman_num : current_status.participant_num.woman,
            start_time_str : this.getStartTimeStr(new Date(current_status.start_time)),
            max_num_of_members : current_status.max_num_of_members,
        });
    }

    getDateStr(date) {
        const WEEK_DAY = ["일", "월", "화", "수", "목", "금", "토"];
        const meeting_date = new Date(date);
        return (meeting_date.getUTCMonth() + 1)+ "월 " + meeting_date.getUTCDate() + "일 " + WEEK_DAY[meeting_date.getUTCDay()] + "요일";
    }

    getStartTimeStr(date) {
       let start_time_str = "";
       start_time_str += date.getUTCHours() + "시 ";
       const minutes = date.getUTCMinutes();
       if(minutes!==0)
           start_time_str += (minutes + "분");

       return start_time_str;
    }

    isParticipated(selected_date) {
        const dates = localStorage.getItem('participated_dates');
        if(dates===null)
            return false;
        if(dates.length > 20)
            return true;
        else if(dates===selected_date)
            return true;
        return false;
    }

    render() {
        let meetingInfoBackgroundStyle = {
            backgroundColor: '#F8F8F9',
            paddingTop: '3%',
            paddingBottom: '4%'
        };
        let meetingInfoStyle = {
            width: '620px',
            textAlign: 'left',
        };
        let meetingDetailInfoStyle = {
            margin: '5%',
            backgroundColor: '#FFFFFF'
        };
        let meetingDetailImageLogoStyle = {
            marginTop: '8px',
            marginLeft: '10px',
            marginRight: '20px',
            width: '80px',
            height: '80px',
        };
        let meetingDetailHeaderStyle = {
            marginLeft: '12px',
            marginBottom: '30px',
            color: '#61a1d8',
            fontSize: '24px'
        };
        let meetingDetailPlanStyle = {
            marginTop: '30px',
            marginLeft: '5%'
        };
        let meetingApplyStyle = {
            marginTop: '0px',
            marginLeft: '1%',
            marginRight: '1%',
            width: '270px',
            height: '360px',
            textAlign: 'center',
        };
        let meetingApplyFontStyle = {
            marginTop: '17px',
            marginLeft: '6px',
            textAlign: 'left',
            fontSize: '12pt',
        };
        let meetingMemberStyle = {
            paddingTop: '20px',
            fontSize: '12pt',
        };

        let imminentDeadlineTextStyle = {
            color: '#5fa1d7',
            fontSize: '12pt',
            marginTop: '17px',
            textAlign:"left",
            marginLeft:"6px"
        }

        let meetingDateOptions = [];

        if(this.props.meetingInfo.status_by_days)
        {
            meetingDateOptions = this.props.meetingInfo.status_by_days.map((status, index) => {
                let button_message = this.getDateStr(status.start_time) + " (" + (status.participant_num.man + status.participant_num.woman)
                                        + "/" + status.max_num_of_members + ")명";

                if((status.participant_num.man + status.participant_num.woman) == status.max_num_of_members - 1){
                    button_message += " " + "(마감임박)"
                }

                return { key: index, text: button_message, value: index };
            });
        }

        const getBtnByState = () => {
            if(this.state.selectedValue === undefined)
                return (<Button disabled color='blue' fluid>날짜를 선택해주세요</Button>);

            if(this.props.meetingInfo.status_by_days === undefined || this.props.meetingInfo.status_by_days.length === 0)
                return;

            const selected_meeting = this.props.meetingInfo.status_by_days[this.state.selectedValue];
            const user_gender = localStorage.getItem('user_gender');
            let participant_num_by_gender = undefined;

            if(user_gender==='F')
                participant_num_by_gender = this.state.participant_woman_num;
            else
                participant_num_by_gender = this.state.participant_man_num;

            if(this.isParticipated(selected_meeting.start_time) && this.props.loggedIn){
                return (<Button disabled color='blue' fluid>신청완료</Button>);
            }

            else if(participant_num_by_gender >= selected_meeting.max_num_of_members/2 && this.props.loggedIn){
                return (<Button disabled color='blue' fluid>마감되었습니다.</Button>);
            }
            else {
                if(user_gender && this.props.loggedIn){
                    return (
                        <Apply
                            selectedValue={this.state.selectedValue}
                            paymentInfo={this.getDateStr(selected_meeting.start_time)}
                            isCurrent={this.props.meetingInfo.is_current}
                            isPrearranged={this.props.meetingInfo.is_prearranged}
                        />
                    );
                }
                else {
                    return (<Button onClick={ () => {
                        if (process.env.REACT_APP_LINKU_SERVER_ENVIRONMENT === 'production'){
                            var ReactGA = require('react-ga');
                            ReactGA.ga('send', 'event', 'apply_button', 'first_click', 'apply_button');

                            this.props.history.push('/login');
                        }
                        localStorage.setItem("redirectUrlOnCompletion", "/payment-description");
                        this.props.history.push('/login');
                        }
                    } color='blue' fluid>같이 놀자!</Button>);
                }
            }
        };

        return(
            <Container id='meeting-card' style={meetingInfoBackgroundStyle}>
                <Grid centered>
                    <Card style={meetingInfoStyle}>
                        <Image src={DEFAULT_REQUEST_URL + this.props.meetingInfo.main_image}></Image>
                        <Card.Content>
                        <div style={meetingDetailInfoStyle}>
                            <div>
                                <div style={meetingDetailHeaderStyle}>
                                    모임장
                                </div>
                                <Item.Group>
                                    <Item>
                                        <Item.Image style={meetingDetailImageLogoStyle} src={DEFAULT_REQUEST_URL + this.props.meetingInfo.leader_image} />
                                        <Item.Content>
                                            <Item.Description>
                                                <div style={{lineHeight: '23px'}}>
                                                    {this.props.meetingInfo.leader_talk}
                                                </div>
                                            </Item.Description>
                                        </Item.Content>
                                    </Item>
                                </Item.Group>
                            </div>
                        </div>
                        </Card.Content>
                    </Card>
                    <Card style={meetingApplyStyle}>
                        <Card.Content>
                            <Card.Header>
                                <Menu compact style={{marginBottom: '10px', width: '240px'}}>
                                    <Dropdown placeholder='클릭해서 날짜 선택하기' onChange={this._participatedSelectionChange} selection options={meetingDateOptions} fluid/>
                                </Menu>
                            </Card.Header>
                            <Card.Description>
                                <div style={meetingApplyFontStyle}><strong>시간</strong> : 19시</div>
                                <div style={meetingApplyFontStyle}><strong>장소</strong> : {this.props.meetingInfo.place}</div>
                                <div style={meetingApplyFontStyle}><strong>인원</strong> : 한 모임당 6명(모임장 1명 포함)</div>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            {getBtnByState()}
                        </Card.Content>
                    </Card>
                </Grid>
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
    return bindActionCreators(actions, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MeetingCard));

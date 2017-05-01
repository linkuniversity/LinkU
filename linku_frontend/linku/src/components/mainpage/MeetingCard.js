import React from 'react';
import { connect } from 'react-redux';
import { Container,Card, Button, Dropdown, Menu, Grid, Header, Item, Divider, Icon, Image } from 'semantic-ui-react'

import { bindActionCreators } from 'redux';

import * as actions from '../../actions/Common';

import Apply from './Apply';
import Login from '../login/Login';
import axios from 'axios';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';

class MeetingCard extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            selectedValue : undefined,
            participant_num : 0,
            participant_man_num : undefined,
            participant_woman_num : undefined,
            start_time : undefined,
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
        });
    }

    componentWillMount(){
        localStorage.setItem('token', undefined);
        localStorage.setItem('user_gender', undefined);
        localStorage.setItem('participated_dates', undefined);
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
       if(minutes!=0)
           start_time_str += (minutes + "분");

       return start_time_str;
    }

    isParticipated(selected_date) {
        const dates = localStorage.getItem('participated_dates');
        return dates.includes(selected_date);
    }

    render() {
        const statisticsNumberStyle = {
            color : '#FFFFFF',
        };

        let meetingInfoBackgroundStyle = {
            backgroundColor: '#F8F8F9',
            paddingTop: '3%',
            paddingBottom: '9%'
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
        let meetingDetailButtonStyle = {
            padding: '20px',
            backgroundColor: '#5FA1D7',
            fontSize: '14pt',
            height: '60px' ,
            color: '#FFFFFF',
            textAlign: 'center'
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
        let linkFontStyle = {
            fontSize: '15px',
            marginTop: '3px',
        };
        let meetingDateOptions = [];

        if(this.props.meetingInfo.status_by_days)
        {
            meetingDateOptions = this.props.meetingInfo.status_by_days.map((status, index) => {
                const button_message = this.getDateStr(status.start_time) + " (" + (status.participant_num.man + status.participant_num.woman)
                                        + "/" + status.max_num_of_members + ")명";

                return { key: index, text: button_message, value: index };
            });
        }

        const getBtnByState = () => {
            if(this.state.selectedValue == undefined)
                return (<Button disabled color='blue' fluid>날짜를 선택해주세요</Button>);

            if(this.props.meetingInfo.status_by_days == undefined || this.props.meetingInfo.status_by_days.length == 0)
                return;

            const selected_meeting = this.props.meetingInfo.status_by_days[this.state.selectedValue];
            const user_gender = localStorage.getItem('user_gender');
            let participant_num_by_gender = undefined;

            if(localStorage.getItem('user_gender')=='F')
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
                const button = (<Button style={{backgroundColor:'#5FA1D7',color:'#FFFFFF'}} fluid>같이 놀자!</Button>);
                if(localStorage.getItem('token') && this.props.loggedIn){
                    return (
                        <Apply
                            selectedValue={this.state.selectedValue}
                            paymentInfo={this.getDateStr(selected_meeting.start_time)}
                        />
                    );
                }
                else {
                    const button = (<Button onClick={ () => {
                            var ReactGA = require('react-ga');
                            ReactGA.ga('send', 'event', 'apply_button', 'first_click', 'apply_button');
                        }
                    } color='blue' fluid>신청하기</Button>);
                    return (<Login triggerButton={button}/>);
                }
            }
        };

        return(
            <Container style={meetingInfoBackgroundStyle}>
                <Grid centered>
                    <Card style={meetingInfoStyle}>
                        <Image src={DEFAULT_REQUEST_URL +'/media/meeting_card.jpg'}></Image>
                        <Card.Content>
                        <div style={meetingDetailInfoStyle}>
                            <div>
                                <div style={meetingDetailHeaderStyle}>
                                    모임장
                                </div>
                                <Item.Group>
                                    <Item>
                                        <Item.Image style={meetingDetailImageLogoStyle} src={DEFAULT_REQUEST_URL+'/media/meeting_leader_image_woman_small.png'} />
                                        <Item.Content>
                                            <Item.Description>
                                                <div style={{lineHeight: '23px'}}>
                                                    호호식당은 봄, 여름, 가을, 겨울 자연의 맛을 고스란히 담은 20여 가지 일본 가정식 메뉴와 곁들임 음식이 정성껏 준비되어 있는 곳이에요.<br/>
                                                    깔끔하고 분위기 좋은 곳에서 같이 밥을 먹고 보드게임하러 고고! <br/>
                                                    혹시 처음 만나는 사람들이랑 어색하면 어쩌나 걱정하지마세요! <br/>
                                                    집으로 돌아가기 전까지 모임을 이끌어드릴게요 :D<br/>
                                                    모임이 재밌다면? 2차도 함께 해요~<br/>
                                                </div>
                                            </Item.Description>
                                        </Item.Content>
                                    </Item>
                                </Item.Group>
                            </div>
                            <div style={{marginTop: '50px', marginBottom: '50px'}}>
                                <Divider />
                            </div>
                            <div>
                                <div style={meetingDetailHeaderStyle}>
                                    일정
                                </div>
                                <div style={meetingDetailPlanStyle}>
                                    <Item>
                                        <Item.Header style={{marginTop:'20px', marginBottom:'5px'}} as='h4'>17:00 ~ 18:30</Item.Header>
                                        <Item.Description style={{marginLeft: '20px'}}>
                                            혜화역 3번 출구에서 첫 만남<br/>
                                                <u>호호식당 </u>
                                            에서 맛있는 식사를 해요 :D<br/>
                                        </Item.Description>
                                    </Item>
                                    <Item>
                                        <Item.Header style={{marginTop:'20px', marginBottom:'5px'}} as='h4'>18:30 ~ 19:30</Item.Header>
                                        <Item.Description style={{marginLeft: '20px'}}>
                                                <u>Yx2 보드게임 카페 </u>로 이동 <br/>
                                            다 같이 즐거운 보드게임을 하면서 친해져요<br/>
                                        </Item.Description>
                                    </Item>
                                    <Item>
                                        <Item.Header style={{marginTop:'20px', marginBottom:'5px'}} as='h4'>19:30 ~ 20:00</Item.Header>
                                        <Item.Description style={{marginLeft: '20px'}}>
                                            근처에 있는
                                                <u>우리 게임랜드 </u>
                                            에 들러서<br/>
                                            추억의 오락게임도 하고 스트레스를 날려봐요!<br/>
                                        </Item.Description>
                                    </Item>
                                    <Item>
                                        <Item.Header style={{marginTop:'20px', marginBottom:'5px'}} as='h4'>선택 사항</Item.Header>
                                        <Item.Description style={{marginLeft: '20px'}}>
                                            새로운 친구들과의 모임이 즐거웠다면,<br/>
                                            2차 장소로
                                                <u>심야식당 </u>
                                            을 추천드려요!<br/>
                                            (칵테일이 당긴다면 조금 멀어도
                                                <u>인생의 단맛 </u>
                                            을 추천드려요)<br/>
                                        </Item.Description>
                                    </Item>
                                </div>
                            </div>
                        </div>
                        </Card.Content>
                    </Card>
                    <Card style={meetingApplyStyle}>
                        <Card.Content>
                            <Card.Header>
                                <Menu compact style={{marginBottom: '10px', width: '240px'}}>
                                    <Dropdown placeholder='클릭해서 날짜 선택하기' onChange = {this._participatedSelectionChange} selection options={meetingDateOptions} fluid/>
                                </Menu>
                            </Card.Header>
                            <Card.Description>
                                <div style={meetingApplyFontStyle}><strong>시간</strong> : 17시</div>
                                <div style={meetingApplyFontStyle}><strong>장소</strong> : {this.props.meetingInfo.place}</div>
                                <div style={meetingApplyFontStyle}><strong>인원</strong> : 한 모임당 6명(모임장 1명 포함)</div>
                                <div style={meetingApplyFontStyle}>
                                    <strong>현재 참여인원 </strong>
                                    <div style={meetingMemberStyle}>
                                        <Icon style={{paddingBottom:'30px'}} name='woman' color='pink' size='large'/> {this.state.participant_woman_num} 명 <br/>
                                        <Icon name='man' color='blue' size='large'/>  {this.state.participant_man_num} 명
                                    </div>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MeetingCard);

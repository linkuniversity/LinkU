import React from 'react';
import { connect } from 'react-redux';
import { Container,Card, Button, Dropdown, Menu, Grid, Header, Item, Divider } from 'semantic-ui-react'

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
            participatedIds : [],
            selectedValue : 0
        };
    }

    _fetchIsParticipatedInfo = async() => {
        const token = localStorage.getItem('token');

        if(token == undefined)
            return;

        const config = {
            headers: { 'Authorization': token }
        };

        const info = await Promise.all([axios.post('http://127.0.0.1:8000/participated-ids/',{},config )
            .then(response => {
                this.setState({
                    ...this.state,
                    participatedIds : JSON.parse(response.data)
                });
            })
            .catch(error => {
                console.log(error.response.data);
            })
        ]);
    }
    _participatedSelectionChange = (e, data) => {
        this.setState({
            ...this.state,
            selectedValue : data.value
        });
    }

    componentWillMount(){
        this._fetchIsParticipatedInfo();
    }
    componentWillReceiveProps(props){
        this._fetchIsParticipatedInfo();
    }
    render() {
        const statisticsNumberStyle = {
            color : '#FFFFFF',

        };

        const button = (<Button color='blue' fluid>신청하기</Button>);

        let meetingInfoBackgroundStyle = {
            backgroundColor: '#F8F8F9',
        };
        let meetingInfoStyle = {
            marginTop: '43px',
            marginBottom: '43px',
            width: '620px',
            textAlign: 'left',
        };
        let meetingMainInfoStyle = {
            backgroundImage: 'url(http://localhost:8000/media/meeting_card.jpg)',
            height: '360px',
            paddingTop: '35px',
            paddingLeft: '35px',
            paddingRight: '35px'
        };
        let meetingDetailInfoStyle = {
            backgroundColor: '#FFFFFF',
            height: '650px',
            paddingTop: '35px',
            paddingLeft: '35px',
            paddingRight: '35px'
        };
        let meetingDetailImageLogoStyle = {
            marginTop: '8px',
            marginLeft: '10px',
            marginRight: '20px',
            width: '80px',
            height: '80px'
        };
        let meetingDetailHeaderStyle = {
            marginLeft: '12px',
            marginBottom: '30px',
            color: '#61a1d8',
            fontSize: '24px'
        };
        let meetingDetailPlanStyle = {
            marginTop: '50px',
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
            marginTop: '43px',
            marginBottom: '43px',
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

        let meetingDateOptions = [];

        if(this.props.meetingInfo.status_by_days)
        {
            meetingDateOptions = this.props.meetingInfo.status_by_days.map((status, index) => {
                return { key: index, text: status.meeting_status, value: index };
            });
        }

        return(
            <Container style={meetingInfoBackgroundStyle}>
                <Grid centered>
                    <div style={meetingInfoStyle}>
                        <div style={meetingMainInfoStyle}>
                            <div style={{color: "#FFFFFF"}}>
                                <Header style={{color: '#FFFFFF'}} as='h1'>문화예술의 동네 혜화</Header>
                                <div style={{marginTop: '22px'}}>{this.props.meetingInfo.meeting_specific_info}</div>
                            </div>
                        </div>
                        <div style={meetingDetailInfoStyle}>
                            <div>
                                <div style={meetingDetailHeaderStyle}>
                                    모임장
                                </div>
                                <Item.Group>
                                    <Item>
                                        <Item.Image style={meetingDetailImageLogoStyle} src='http://localhost:8000/media/meeting_leader_profile.png' />
                                        <Item.Content>
                                            <Item.Description>
                                                <div style={{lineHeight: '23px'}}>
                                                    대학생이니까 대학로!<br/>
                                                    젊음과 문화, 자유를 만끽할 수 있는 거리 대학로에서 모임 시작합니다.<br/>
                                                    가까운 장소들을 엮어서 피로는 덜하게,<br/>
                                                    맛있는 것도 골라먹고 즐겁게 게임도 하면서<br/>
                                                    하루쯤은 시험과 과제로 쌓인 스트레스를 풀어봐요!<br/>
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
                                    <Grid container columns={2}>
                                        <Grid.Column width={5}>
                                            17:00 ~ 18:30
                                        </Grid.Column>
                                        <Grid.Column width={95}>
                                            호호식당 /or/ 키친랩 /or/ 정돈(수요미식회) 에서 식사를 합니다.
                                        </Grid.Column>
                                        <Grid.Column width={5}>
                                            18:30 ~ 19:30
                                        </Grid.Column>
                                        <Grid.Column width={95}>
                                            [Yx2 보드게임 카페]로 이동합니다.
                                        </Grid.Column>
                                        <Grid.Column width={5}>
                                            19:30 ~ 20:00
                                        </Grid.Column>
                                        <Grid.Column width={95}>
                                            [우리 게임랜드]
                                        </Grid.Column>
                                        <Grid.Column width={5}>
                                            20:00 ~
                                        </Grid.Column>
                                        <Grid.Column width={95}>
                                            [심야식당]으로 이동합니다. (조금 멀어도 칵테일이 당긴다면 [인생의 단맛]을 추천드려요.)
                                        </Grid.Column>
                                    </Grid>
                                </div>
                            </div>
                        </div>
                        <Button style={meetingDetailButtonStyle} fluid>
                            상세 보기 ▽
                        </Button>
                    </div>
                    <Card style={meetingApplyStyle}>
                        <Card.Content>
                            <Card.Header>
                                <Menu compact style={{marginBottom: '10px', width: '240px'}}>
                                    <Dropdown placeholder='클릭해서 날짜 선택하기' onChange = { this._participatedSelectionChange } selection options={meetingDateOptions} fluid/>
                                </Menu>
                            </Card.Header>
                            <Card.Description>
                                <div style={meetingApplyFontStyle}><strong>시간</strong> : 17:00</div>
                                <div style={meetingApplyFontStyle}><strong>장소</strong> : {this.props.meetingInfo.place}</div>
                                <div style={meetingApplyFontStyle}><strong>인원</strong> : 한 모임당 6명(모임장 1명 포함)</div>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            {
                            (!(this.state.participatedIds.indexOf(this.state.selectedValue) > -1) && this.props.loggedIn) ?
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

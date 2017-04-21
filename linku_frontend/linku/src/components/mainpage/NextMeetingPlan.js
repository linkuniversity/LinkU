import React, {Component} from 'react';
import {Container, Grid, Card, Image, Button, Modal} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';

import * as actions from '../../actions/Common';
import ComingSoonModal from './ComingSoonModal';
import NextMeetingDetailPlan from './NextMeetingDetailPlan';

class NextMeetingPlan extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            contents : [
"2시 한복대여(경복궁 근처) ex> 한복남 (http://blog.naver.com/peacekjh0625/220974908813) / 구르미한복 (http://blog.naver.com/melonshoo/220876598352) \
한복입고 경복궁 입장 (무료) >> 경복궁에서 놀기 \ㅜn \
사극 한 장면 연출하기 >> 2명씩 짝지어서 베스트컷 리워드 등. \
매듭공방 체험 (http://shimyoungmi.com/service/%EB%A7%A4%EB%93%AD-%EC%9D%BC%EC%9D%BC-%EC%B2%B4%ED%97%98/) \
or \
막걸리학교..(http://blog.naver.com/calebmktg/130139018312)\
or\
삼해 소주 공방\
저녁밥도 한식으로 먹어준다. (or 전대감댁http://twotone.kr/220157117311 )\
(http://blog.naver.com/melonshoo/220875807077)\
마무리는 경복궁 야간개장을 보며..\
",
"ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ",
"ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㄴㅁㅁ뉸뉴뉸"
            ]
        };
    }

    render(){

        let containerStyle= {
            marginTop: "66px",
            backgroundColor: '#f8f8f9',
        }

        let meetingJoinWordStyle = {
            width: "100%",
            textAlign: "center",
        };

        let planHeaderStyle = {
            textAlign: 'center',
            fontSize: '20pt',
            marginTop: '45px',
            color: '#5fa1d7',
        }

        let bottomStyle = {
            textAlign: 'center',
            marginTop: '55px',
            fontSize: '16pt',
        }

        let cardStyle = {
            width: '300',
            height: '357',
            backgroundColor: '#BDBDBD',
            position: 'relative',
            marginBottom: '2%',
        }

        let middleCardStyle = {
            width: '300',
            height: '357',
            backgroundColor: '#BDBDBD',
            position: 'relative',
            marginRight: '20px',
            marginLeft: '20px',
            marginBottom: '2%',
        }

        let cardInfoStyle = {
            textAlign: 'left',
            color: '#FFFFFF',
            marginTop: '30px',
        }

        let cardSpecificInfoStyle = {
            position: 'absolute',
            bottom: '0',
            right: '0' ,
            marginRight: '22px',
            marginBottom: '25px',
            color: '#FFFFFF',
            backgroundColor: '#BDBDBD'
        }

        let gridStyle = {
            marginTop: '36px',
        }

        return(

                <Container style={containerStyle}>
                    <br/>
                    <div style={{height: '100%',}}>
                        <div style={planHeaderStyle}>
                        다음에 진행 될 모임
                        </div>

                        <Grid centered style={gridStyle}>
                            <div style={cardStyle}>
                                <div style={cardInfoStyle}>
                                    <div style={{fontSize:'16pt'}}>외국물 어디까지 먹어봤니</div>
                                    <div style={{marginTop: '25px'}}>굳이 비행기를 타지 않아도 여행을 다녀온 기분을 느끼고 싶나요?<br />
                                        구석구석 새로운 곳을 찾아보며 가장 이색적인 이태원으로 함께 가요. <br/>
                                        이제는 어디가서 “나, 이태원에서 좀 놀아봤다” 할 수 있다!<br />
                                    </div>
                                </div>
                                <NextMeetingDetailPlan
                                    trigger={<Button style={cardSpecificInfoStyle}>자세히보기></Button>}
                                    content={this.state.contents[0]}
                                    index = {0}
                                    />
                            </div>

                            <div style={middleCardStyle}>
                                <div style={cardInfoStyle}>
                                    <div style={{fontSize:'16pt'}}>한복입고 타임슬립</div>
                                    <div style={{marginTop: '25px'}}>관광객의 입장에서 우리나라를 여행하면 어떤 기분일까요?<br />
                                        사극에서 보던 예쁘고 멋진 한복, 예쁜 고궁…<br />
                                        보기만 하지말고 직접 한 장면을 만들러 가요~<br />
                                    </div>
                                </div>
                                <NextMeetingDetailPlan
                                    trigger={<Button style={cardSpecificInfoStyle}>자세히보기></Button>}
                                    content={this.state.contents[1]}
                                    index = {1}
                                    />
                            </div>

                            <div style={cardStyle}>
                                <div style={cardInfoStyle}>
                                    <div style={{fontSize:'16pt'}}>아폴로 챱챱 90세대의 추억</div>
                                    <div style={{marginTop: '25px'}}>386세대, X세대, N세대…<br />
                                        겁나 애매한 90년대에 태어난 대학생들!<br />
                                        하지만 우리에게도 추억거리가 있다구요.<br />
                                        급식먹던 시절 그대로 놀아봐요
                                    </div>
                                </div>
                                <NextMeetingDetailPlan
                                    trigger={<Button style={cardSpecificInfoStyle}>자세히보기></Button>}
                                    content={this.state.contents[2]}
                                    index = {2}
                                    />
                            </div>

                        </Grid>

                        <div style={bottomStyle}>
                            내가 모임장이 되어서 모임을 하고 싶다면? <ComingSoonModal triggerButton={<a> 모임장 신청하기 ></a>} />
                        </div>
                        <div style={{marginTop: '22px', textAlign: 'center', fontSize: '16pt', marginBottom: '72px'}}>
                            링쿠에 대한 소식을 받고 싶다면? <a href="http://plus.kakao.com/home/@linku">링쿠 카톡 추가하기 ></a>
                        </div>
                    </div>
                </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NextMeetingPlan);

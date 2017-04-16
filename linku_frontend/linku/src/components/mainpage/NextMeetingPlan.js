import React, {Component} from 'react';
import {Container, Grid, Card, Image} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/Common';

class NextMeetingPlan extends React.Component{
    constructor(props){
        super(props);
    }


    render(){

        let containerStyle= {
            marginTop: "10%",
            marginBottom: "10%",
        }

        let meetingJoinWordStyle = {
            width: "100%",
            textAlign: "center",
        };

        let planHeaderStyle = {
            textAlign: 'center',
            marginTop: '5%',
            marginBottom: '5%',
        }

        let bottomStyle = {
            textAlign: 'center',
            marginTop: '2%'
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
            marginRight: '2%',
            marginLeft: '2%',
            marginBottom: '2%',
        }

        let cardInfoStyle = {
            textAlign: 'left',
        }

        let cardSpecificInfoStyle = {
            position: 'absolute',
            bottom: '0',
            right: '0' ,
            marginRight: '10px',
            marginBottom: '10px',
        }

        let gridStyle = {
            marginTop: "15%",
        }

        return(
            <Container style={containerStyle}>
                <div style={planHeaderStyle}>
                다음에 진행 될 모임
                </div>

                <Grid centered sytle={gridStyle}>
                    <div style={cardStyle}>
                        <div style={cardInfoStyle}>
                            모임의 제목이 들어갑니다.<br/>
                            모임에 대한 간략한 설명이 들어갑니다.<br/>
                        </div>
                        <div style={cardSpecificInfoStyle}>
                            자세히보기 >
                        </div>
                    </div>

                    <div style={middleCardStyle}>
                        <div style={cardInfoStyle}>
                            모임의 제목이 들어갑니다.<br/>
                            모임에 대한 간략한 설명이 들어갑니다.<br/>
                        </div>
                        <div style={cardSpecificInfoStyle}>
                            자세히보기 >
                        </div>
                    </div>

                    <div style={cardStyle}>
                        <div style={cardInfoStyle}>
                            모임의 제목이 들어갑니다.<br/>
                            모임에 대한 간략한 설명이 들어갑니다.<br/>
                        </div>
                        <div style={cardSpecificInfoStyle}>
                            자세히보기 >
                        </div>
                    </div>

                </Grid>

                <div style={bottomStyle}>
                    내가 모임장이 되어서 모임을 하고 싶다면? <a href="https://twpower.github.io">모임신청하기 ></a>
                </div>
                <div style={bottomStyle}>
                    링쿠에 대한 소식을 받고 싶다면? <a href="https://twpower.github.io">링쿠 카톡 추가하기 ></a>
                </div>

            </Container>

        );
    }
}

export default NextMeetingPlan;

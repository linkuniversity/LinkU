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
            color: '#FFFFFF'
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
                                    <div style={{fontSize:'16pt'}}>모임의 제목이 들어갑니다.</div>
                                    <div style={{marginTop: '25px'}}>모임에 대한 간략한 설명이 들어갑니다.</div>
                                </div>
                                <div style={cardSpecificInfoStyle}>
                                    자세히보기 >
                                </div>
                            </div>

                            <div style={middleCardStyle}>
                                <div style={cardInfoStyle}>
                                    <div style={{fontSize:'16pt'}}>모임의 제목이 들어갑니다.</div>
                                    <div style={{marginTop: '25px'}}>모임에 대한 간략한 설명이 들어갑니다.</div>
                                </div>
                                <div style={cardSpecificInfoStyle}>
                                    자세히보기 >
                                </div>
                            </div>

                            <div style={cardStyle}>
                                <div style={cardInfoStyle}>
                                    <div style={{fontSize:'16pt'}}>모임의 제목이 들어갑니다.</div>
                                    <div style={{marginTop: '25px'}}>모임에 대한 간략한 설명이 들어갑니다.</div>
                                </div>
                                <div style={cardSpecificInfoStyle}>
                                    자세히보기 >
                                </div>
                            </div>

                        </Grid>

                        <div style={bottomStyle}>
                            내가 모임장이 되어서 모임을 하고 싶다면? <a href="">모임신청하기 ></a>
                        </div>
                        <div style={{marginTop: '22px', textAlign: 'center', fontSize: '16pt', marginBottom: '72px'}}>
                            링쿠에 대한 소식을 받고 싶다면? <a href="">링쿠 카톡 추가하기 ></a>
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

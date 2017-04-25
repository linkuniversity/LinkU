import React, {Component} from 'react';
import {Container, Label, Embed} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/Common';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';

class IntroVideo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let containerStyle = {
            marginTop: "47px",
        }

        let promotionTopWordStyle = {
            width: "100%",
            height: "8%",
            marginTop: '5%',
            marginBottom: '5%',
            textAlign: "center",
            fontFamily: "../res/assets/KoPubDotumBold",
            color: '#5d5d5d',
            fontSize: '1.8rem',
        };

        let promotionBottomWordStyle = {
            width: "100%",
            height: "8%",
            textAlign: "center",
            fontFamily: 'url('+DEFAULT_REQUEST_URL +'/static/assets/KoPubDotumLight.ttf)',
            color: '#61a1d8',
            fontSize: '1.8rem',
            marginTop: '67px',
        };

        let videoStyle = {
            marginRight: "10%",
            marginLeft: "10%",
        };

        return (
            <Container text style={containerStyle}>
                <div style={promotionTopWordStyle}>
                    <Container>과제와 취업에 지친 대학생활<br/>
                    링쿠에서 새로운 친구들과 새로운 경험
                    </Container>
                </div>
                <Embed ref="introVideo" style={videoStyle} id='KOFAeCZ4tBY' autoplay={true} active={true} source='youtube'/>
                <div style={promotionBottomWordStyle}>
                    <div style={{marginBottom: '16px'}}>전공, 학력, 성별을 불문 수도권 대학생이면 누구나 가능</div>
                    <div>함께하고 싶다면 지금 신청하세요.</div>
                </div>
            </Container>
        );
    }
}

export default IntroVideo;

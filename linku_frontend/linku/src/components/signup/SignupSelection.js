import React, { Component } from 'react';
import { Modal, Button, Container, Icon } from 'semantic-ui-react';

import { connect } from 'react-redux';

import SignupForm from './SignupForm';
import UniversityVerificationMailSendForm from './UniversityVerificationMailSendForm';
import UniversityVerificationNumberSendForm from './UniversityVerificationNumberSendForm';
import { buttonStyle } from '../utils/style/Button';

import {withRouter} from 'react-router-dom';

class SignupSelection extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        if (process.env.REACT_APP_LINKU_SERVER_ENVIRONMENT === 'production'){
            var ReactGA = require('react-ga');
            ReactGA.pageview(window.location.pathname);
        }
    }

    render(){
        return (
            <Container text>
                <Button style={buttonStyle} onClick={() => {this.props.history.push('/signup')}}  fluid>학교메일로 인증하기</Button>
                <Button style={buttonStyle} href="http://plus.kakao.com/home/@linku" fluid>링쿠 카톡 플러스친구로 학생증 보내서 인증하기</Button>
                <p style={{fontSize: "17px", color: "#60a2d9", textAlign: "center", marginTop:"15px"}}>
                    ※ 대학생 이메일로 인증이 어려우신 분은 <a style={{textDecoration: "underline", fontWeight: "bold"}} href="http://plus.kakao.com/home/@linku">링쿠 카톡 플러스친구로 학생증 보내서 인증하기</a>를 통해 <br/>
                    학생증 사진을 보내주시는 것으로도 가입이 가능해요 :D
                </p>
            </Container>
        );
    }

}



export default withRouter(SignupSelection);

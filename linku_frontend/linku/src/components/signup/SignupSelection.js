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


    render(){
        return (
            <Container text>
                <Button style={buttonStyle} onClick={() => {this.props.history.push('/signup')}}  fluid>학교메일로 인증하기</Button>
                <Button style={buttonStyle} href="http://plus.kakao.com/home/@linku" fluid>학생증으로 인증하기</Button>
            </Container>
        );
    }

}



export default withRouter(SignupSelection);

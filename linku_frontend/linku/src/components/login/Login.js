import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SimpleLogin from './SimpleLogin';
import LoginForm from './LoginForm';
import Signup from '../signup/Signup';

import { loginRequest } from '../../actions/Login';
import { hideLoginAlert } from '../../actions/Common';

import axios from 'axios';

class Login extends Component {
    _handleLoginSubmit = (values) => {
        this.props.loginRequest(values.email,values.password);
    }

    render() {
        const button = <Button fluid>회원가입</Button>;

        return (
            <Modal trigger = {this.props.triggerButton} size='small'>
                <Modal.Header>링쿠 로그인</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <h>링쿠는 대학생만 이용할 수 있는 서비스입니다.</h>
                        <LoginForm onSubmit = {this._handleLoginSubmit}/>
                        <Signup triggerButton={button}/>
                    </Modal.Description>
                </Modal.Content>
             </Modal>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest : (id, password) => {
            return dispatch(loginRequest(id,password));
        },
    };
};

export default connect(null, mapDispatchToProps)(Login);

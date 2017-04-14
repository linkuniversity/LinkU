import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SimpleLogin from './SimpleLogin';
import LoginForm from './LoginForm';

import { loginRequest } from '../../actions/Login';
import { hideLoginAlert, alertSignup } from '../../actions/Common';

import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);

        this.onSignupButtonClick = this.onSignupButtonClick.bind(this);
    }

    _handleSubmit = async (values) => {
        if( values.password != values.pwd_chk )
            console.log("password is not equal");
        else {
            const info = await Promise.all([axios.post('http://127.0.0.1:8000/users/',values)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error.response.data);
                })
            ]);
        }
    }

    _handleLoginSubmit = (values) => {
        this.props.loginRequest(values.email,values.password);
    }

    onSignupButtonClick() {
        this.props.hideLoginAlert();
        this.props.alertSignup();
    }

    render() {
        return (
            <Modal open={this.props.loginModalIsVisible} size='small'>
                <Modal.Header>링쿠 로그인</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <h>링쿠는 대학생만 이용할 수 있는 서비스입니다.</h>
                        <LoginForm onSubmit = {this._handleLoginSubmit}/>
                        <Button onClick={this.onSignupButtonClick} fluid>회원가입</Button>
                        <Button onClick={this.props.hideLoginAlert} fluid>취소</Button>
                    </Modal.Description>
                </Modal.Content>
             </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loginModalIsVisible : state.loginAlert.loginModalIsVisible
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest : (id, password) => {
            return dispatch(loginRequest(id,password));
        },
        hideLoginAlert : () => {
            return dispatch(hideLoginAlert());
        },
        alertSignup : () => {
            return dispatch(alertSignup());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

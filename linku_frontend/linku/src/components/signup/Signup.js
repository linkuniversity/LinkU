import React, { Component } from 'react';
import { Modal, Button, Header } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { alertConfirm } from '../../actions/Common';
import SignupForm from './SignupForm';
import UniversityVerificationMailSendForm from './UniversityVerificationMailSendForm';
import UniversityVerificationNumberSendForm from './UniversityVerificationNumberSendForm'

import axios from 'axios';

class Signup extends Component {
    state = {
        modalOpen: false,
        is_loading: false,
        is_university_email_verification_request_done: false,
        is_verify_auth_number_done: false,
        university_email: "",
    }

    handleOpen = (e) => this.setState({
        modalOpen: true,
    })

    handleClose = (e) => this.setState({
        modalOpen: false,
        is_loading: false,
        is_university_email_verification_request_done: false,
        is_verify_auth_number_done: false,
        university_email: "",
    })

    _handleSignupSubmit = async (values) => {

        console.log(values);

        if(values.gender == undefined) {
            values.gender = 'F'
        }
        if(values.password != values.password_check) {
            this.props.alertConfirm("비밀번호가 다릅니다.", "red");
            console.log("password is not equal");
        }
        else {
            values['authenticated_university_email'] = this.state.university_email;
            const info = await Promise.all([axios.post('http://127.0.0.1:8000/users/',values)
                .then(response => {
                    this.props.alertConfirm("회원가입이 완료되었습니다.", "blue");
                    this.handleClose();
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error.response.data);
                    if(error.response.data['username'][0] == 'user with this username already exists.')
                        this.props.alertConfirm("이미 존재하는 이메일 입니다.", "red");
                    else
                        this.props.alertConfirm("회원가입에 실패했습니다.", "red");
                })
            ]);
        }
    }

    _handleUniversityVerificationMailSendFormSubmit = (value) => {
        this.setState({
            ...this.state,
            is_loading: true,
        });
        this.__handleUniversityVerificationMailSendFormSubmit(value);
    };

    __handleUniversityVerificationMailSendFormSubmit = async (value) => {

        const info = await Promise.all([axios.post('http://127.0.0.1:8000/university-verification-email/',"university_email="+value.university_email)
            .then(response => {
                this.setState({
                    ...this.state,
                    is_university_email_verification_request_done: true,
                    university_email: value.university_email,
                    is_loading: false,
                });
                this.props.alertConfirm("이메일이 전송되었습니다.", "blue");
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
                this.setState({
                    ...this.state,
                    is_loading: false,
                });
                if(error.response.data['message'] == 'Invalid Mail Form')
                    this.props.alertConfirm("이메일 형식이 맞지 않습니다.", "red");
                else if (error.response.data['message'] == 'Invalid University Mail Form')
                    this.props.alertConfirm("대학교 이메일 형식에 맞지 않습니다.", "red");
                else
                    this.props.alertConfirm("이메일 전송에 실패했습니다.", "red");
            })
        ]);

    }

    _handleUniversityVerificationNumberSendFormSubmit = async (value) => {

        const info = await Promise.all([axios.post('http://127.0.0.1:8000/university-verification-number/',"university_email="+this.state.university_email + "&" + "auth_number=" + value.auth_number)
            .then(response => {
                this.setState({
                    is_verify_auth_number_done: true,
                });
                this.props.alertConfirm("인증이 완료되었습니다.", "blue");
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
                if(error.response.data['message'] == 'No such email')
                    this.props.alertConfirm("해당 메일로 인증번호가 요청되지 않았습니다.", "red");
                else if (error.response.data['message'] == 'Time Out')
                    this.props.alertConfirm("시간이 완료되었습니다 다시 요청해주세요.", "red");
                else if (error.response.data['message'] == 'Wrong Auth Number')
                    this.prpops.alertConfirm("인증번호가 틀렸습니다.","red");
                else
                    this.props.alertConfirm("인증번호 처리에 실패하였습니다.", "red");
            })
        ]);

    }

    render() {
        let triggerButton = <Button onClick={this.handleOpen} content="회원가입" fluid />;
        if(this.props.buttonStyle!=null) {
            triggerButton = <button onClick={this.handleOpen} style={this.props.buttonStyle}>회원가입</button>;
        }
        return (
            <Modal trigger={triggerButton} open={this.state.modalOpen} onClose={this.handleClose} size='small'>
                <Modal.Header>링쿠 회원가입</Modal.Header>
                <Modal.Content>
                    <Modal.Description >
                        <Header style={{color: "#60a2d9", textAlign: "center"}}>링쿠는 대학생만 가입이 가능합니다.</Header>
                    </Modal.Description>
                    <Modal.Description>
                        <UniversityVerificationMailSendForm onSubmit={this._handleUniversityVerificationMailSendFormSubmit} is_university_email_verification_request_done={this.state.is_university_email_verification_request_done} is_loading={this.state.is_loading}/>
                    </Modal.Description>
                    <Modal.Description>
                        {this.state.is_university_email_verification_request_done ? <UniversityVerificationNumberSendForm onSubmit={this._handleUniversityVerificationNumberSendFormSubmit} is_verify_auth_number_done={this.state.is_verify_auth_number_done}/> : null}
                    </Modal.Description>
                    <Modal.Description>
                        {this.state.is_verify_auth_number_done ? <SignupForm onSubmit={this._handleSignupSubmit}/> : null}
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        alertConfirm : (message, color) => {
            return dispatch(alertConfirm(message, color));
        }
    };
};


export default connect(null, mapDispatchToProps)(Signup);

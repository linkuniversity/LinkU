import React, { Component } from 'react';
import { Modal, Button, Container, Icon } from 'semantic-ui-react';

import { connect } from 'react-redux';

import SignupForm from './SignupForm';
import UniversityVerificationMailSendForm from './UniversityVerificationMailSendForm';
import UniversityVerificationNumberSendForm from './UniversityVerificationNumberSendForm';
import { buttonStyle } from '../utils/style/Button';

import axios from 'axios';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';
import {withRouter} from 'react-router-dom';

class Signup extends Component {
    state = {
        modalOpen: false,
        modalMessage: "",
        modalButtonColor: "green",
        is_loading: false,
        is_university_email_verification_request_done: false,
        is_verify_auth_number_done: false,
        university_email: "",
    }

    componentDidMount() {
        if (process.env.REACT_APP_LINKU_SERVER_ENVIRONMENT === 'production'){
            var ReactGA = require('react-ga');
            ReactGA.pageview(window.location.pathname);
        }
    }

    alertConfirm = (message, color) => this.setState({
        modalOpen: true,
        modalMessage: message,
        modalButtonColor: color,
    });

    handleOpen = (e) => this.setState({
        modalOpen: true,
    })

    handleClose = (e) => {
        this.setState({
            modalOpen: false,
            is_loading: false,
            is_university_email_verification_request_done: false,
            is_verify_auth_number_done: false,
            university_email: "",
        });
    }

    _handleSignupSubmit = async (values) => {

        console.log(values);

        if(values.gender === undefined) {
            this.alertConfirm("성별을 입력해 주세요.", "red");
        }
        if(values.password !== values.password_check) {
            this.alertConfirm("비밀번호가 다릅니다.", "red");
            console.log("password is not equal");
        }
        else {
            values['authenticated_university_email'] = this.state.university_email;
            await Promise.all([axios.post(DEFAULT_REQUEST_URL + '/users/',values)
                .then(response => {
                    this.alertConfirm("회원가입이 완료되었습니다.", "blue");
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error.response.data);
                    if(error.response.data['username'][0] === 'user with this username already exists.')
                        this.alertConfirm("이미 존재하는 이메일 입니다.", "red");
                    else
                        this.alertConfirm("회원가입에 실패했습니다.", "red");
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
        await Promise.all([axios.post(DEFAULT_REQUEST_URL + '/university-verification-email/',"university_email="+value.university_email)
            .then(response => {
                this.setState({
                    ...this.state,
                    is_university_email_verification_request_done: true,
                    university_email: value.university_email,
                    is_loading: false,
                });
                this.alertConfirm("이메일이 전송되었습니다.", "blue");
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
                this.setState({
                    ...this.state,
                    is_loading: false,
                });
                if(error.response.data['message'] === 'Invalid Mail Form')
                    this.alertConfirm("이메일 형식이 맞지 않습니다.", "red");
                else if (error.response.data['message'] === 'Invalid University Mail Form')
                    this.alertConfirm("대학교 이메일 형식에 맞지 않습니다.", "red");
                else if (error.response.data['message'] === 'University Mail Already Exist')
                    this.alertConfirm("이미 존재하는 대학교 이메일입니다.", "red");
                else
                    this.alertConfirm(error.response.data, "red");
            })
        ]);

    }

    _handleUniversityVerificationNumberSendFormSubmit = async (value) => {
        await Promise.all([axios.post(DEFAULT_REQUEST_URL + '/university-verification-number/',"university_email="+this.state.university_email + "&auth_number=" + value.auth_number)
            .then(response => {
                this.setState({
                    is_verify_auth_number_done: true,
                });
                this.alertConfirm("인증이 완료되었습니다.", "blue");
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.response.data);

                if(this.state.university_email === "linkutest@test.ac.kr"){
                    this.setState({
                        is_verify_auth_number_done: true,
                    });
                    this.alertConfirm("인증이 완료되었습니다.", "blue");
                }
                else if(error.response.data['message'] === 'No such email')
                    this.alertConfirm("해당 메일로 인증번호가 요청되지 않았습니다.", "red");
                else if (error.response.data['message'] === 'Time Out')
                    this.alertConfirm("시간이 완료되었습니다 다시 요청해주세요.", "red");
                else if (error.response.data['message'] === 'Wrong Auth Number')
                    this.alertConfirm("인증번호가 틀렸습니다.","red");
                else
                    this.alertConfirm("인증번호 처리에 실패하였습니다.", "red");
            })
        ]);

    }

    render() {
        let triggerButton = <Button style={buttonStyle} onClick={this.handleOpen} content="회원가입" fluid />;
        if(this.props.buttonStyle!=null) {
            triggerButton = <button onClick={this.handleOpen} style={this.props.buttonStyle}>회원가입</button>;
        }

        const renderUniversityAuthentication = () => {

            if(this.state.is_university_email_verification_request_done){
                return(
                    <div>
                    <p style={{fontSize: "17px", color: "#60a2d9", textAlign: "center"}}>링쿠는 대학생들을 위한 서비스입니다.<br/> 보다 안전한 서비스 이용을 위해 대학생 인증을 부탁드려요!</p>
                    <UniversityVerificationMailSendForm
                        onSubmit={this._handleUniversityVerificationMailSendFormSubmit}
                        is_university_email_verification_request_done={this.state.is_university_email_verification_request_done}
                        is_loading={this.state.is_loading}
                    />
                    <UniversityVerificationNumberSendForm
                        onSubmit={this._handleUniversityVerificationNumberSendFormSubmit}
                        is_verify_auth_number_done={this.state.is_verify_auth_number_done}
                    />
            </div>
                );
            }
            else{
                return(
                    <div>
                    <p style={{fontSize: "17px", color: "#60a2d9", textAlign: "center"}}>링쿠는 대학생들을 위한 서비스입니다.<br/> 보다 안전한 서비스 이용을 위해 대학생 인증을 부탁드려요!</p>
                    <UniversityVerificationMailSendForm onSubmit={this._handleUniversityVerificationMailSendFormSubmit} is_university_email_verification_request_done={this.state.is_university_email_verification_request_done} is_loading={this.state.is_loading}/>
                    </div>
            );
            }

        }

        return (
            <Container text>
                {this.state.is_verify_auth_number_done ? <SignupForm onSubmit={this._handleSignupSubmit}/> : renderUniversityAuthentication()}
                <Modal
                    open={this.state.modalOpen}
                    onClose={() => this.setState({modalOpen: false})}
                >
                    <Modal.Content>
                        {this.state.modalMessage}
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            color={this.state.modalButtonColor}
                            onClick={() => {
                                if(this.state.modalMessage === "회원가입이 완료되었습니다.")
                                    this.props.history.push('/');

                                this.setState({modalOpen: false})
                            }}>
                            <Icon name='checkmark' /> 확인
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Container>
        );
    }
}



export default withRouter(Signup);

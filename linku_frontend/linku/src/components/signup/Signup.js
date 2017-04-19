import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { alertConfirm } from '../../actions/Common';
import SignupForm from './SignupForm';

import axios from 'axios';

class Signup extends Component {
    state = { modalOpen: false }

    handleOpen = (e) => this.setState({
        modalOpen: true,
    })

    handleClose = (e) => this.setState({
        modalOpen: false,
    })

    _handleSignupSubmit = async (values) => {
        if(values.gender == undefined) {
            values.gender = 'F'
        }
        if(values.password != values.password_check) {
            this.props.alertConfirm("비밀번호가 다릅니다.", "red");
            console.log("password is not equal");
        }
        else {
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

    render() {
        let triggerButton = <Button onClick={this.handleOpen} content="회원가입" fluid />;
        if(this.props.buttonStyle!=null) {
            triggerButton = <button onClick={this.handleOpen} style={this.props.buttonStyle}>회원가입</button>;
        }
        return (
            <Modal trigger={triggerButton} open={this.state.modalOpen} onClose={this.handleClose} size='small'>
                <Modal.Header>링쿠 회원가입</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <SignupForm onSubmit={this._handleSignupSubmit}/>
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

import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { alertConfirm } from '../../actions/Common';
import SignupForm from './SignupForm';

import axios from 'axios';

class Signup extends Component {
    _handleSignupSubmit = async (values) => {
        if( values.password != values.password_check )
            console.log("password is not equal");
        else {
            const info = await Promise.all([axios.post('http://127.0.0.1:8000/users/',values)
                .then(response => {
                    this.props.alertConfirm("회원가입이 완료되었습니다.", "blue");
                    console.log(response.data);
                })
                .catch(error => {
                    this.props.alertConfirm("회원가입에 실패했습니다.", "red");
                    console.log(error.response.data);
                })
            ]);
        }
    }

    render() {
        return (
            <Modal trigger={this.props.triggerButton} size='small'>
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

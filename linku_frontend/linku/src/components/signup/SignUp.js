import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignupForm from './SignupForm';

class Signup extends Component {
    render() {
        return (
            <Modal open={this.props.signupModalIsVisible} size='small'>
                <Modal.Header>링쿠 회원가입</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        // <SignupForm/>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        signupModalIsVisible : state.signupAlert.signupModalIsVisible
    };
};

export default connect(mapStateToProps)(Signup);

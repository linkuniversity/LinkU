import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Icon, Container } from 'semantic-ui-react';

import { hideConfirmAlert } from '../../actions/Common';

const ConfirmModal = (props) => (
    <Modal id="confirm_modal" closeIcon='close' open={props.confirmModalIsVisible}>
        <Modal.Header style={{textAlign: 'center', lineHeight: '50px'}}>{props.message}<br/>
            <Button color={props.color} onClick={props.hideConfirmAlert} inverted>
                <Icon name='checkmark' /> Got it
            </Button>
        </Modal.Header>
    </Modal>
);

const mapStateToProps = (state) => {
    return {
        confirmModalIsVisible : state.confirmAlert.confirmModalIsVisible,
        message : state.confirmAlert.confirmMessage,
        color : state.confirmAlert.buttonColor
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        hideConfirmAlert : () => {
            return dispatch(hideConfirmAlert());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmModal);

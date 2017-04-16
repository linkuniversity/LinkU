import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Icon } from 'semantic-ui-react';

import { hideConfirmAlert } from '../../actions/Common';

const ConfirmModal = (props) => (
    <Modal id="confirm_modal" open={props.confirmModalIsVisible} size='small'>
        <Modal.Header>{props.message}</Modal.Header>
        <Modal.Actions>
            <Button color='blue' onClick={props.hideConfirmAlert} inverted>
                <Icon name='checkmark' /> Got it
            </Button>
        </Modal.Actions>
    </Modal>
);

const mapStateToProps = (state) => {
    return {
        confirmModalIsVisible : state.confirmAlert.confirmModalIsVisible,
        message : state.confirmAlert.confirmMessage
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

import React from 'react';
import {Modal} from 'semantic-ui-react'

const ComingSoonModal = ({triggerButton}) => (
    <Modal trigger = {triggerButton}>
        <Modal.Header>COMING SOON</Modal.Header>
        <Modal.Content>
            <Modal.Description>
                추후 제공 예정인 기능입니다.:)
            </Modal.Description>
        </Modal.Content>
    </Modal>
);

export default ComingSoonModal;

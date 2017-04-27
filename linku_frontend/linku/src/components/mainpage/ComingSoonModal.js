import React from 'react';
import {Modal} from 'semantic-ui-react'

const ComingSoonModal = ({triggerButton}) => (
    <Modal closeIcon='close' size = 'small' trigger = {triggerButton}>
        <Modal.Header>보내기 완료</Modal.Header>
        <Modal.Content>
            <Modal.Description>
                좋은 의견 감사합니다 :)
            </Modal.Description>
        </Modal.Content>
    </Modal>
);

export default ComingSoonModal;

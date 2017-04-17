import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';

const Apply = ({triggerButton}) => (
    <Modal trigger={triggerButton}>
        <Modal.Header>신청 절차</Modal.Header>
         <Modal.Description>
            <Header>계좌 이체</Header>
            <p>아래 계좌로 3500원을 입금해주세요</p>
            <p>110 374 439288 신한은행</p>
         </Modal.Description>
    </Modal>
);

export default Apply;

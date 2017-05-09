import React from 'react';
import {Button, Modal, Image, Container } from 'semantic-ui-react';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';


const getAccount = (selectedValue) => {
    if(selectedValue === 0)
        return (<span>신한 110-374-439288 장선혁</span>);
    else if(selectedValue === 1)
        return (<span>우리 1002-750-301942 최지훈</span>);
    else if(selectedValue === 2)
        reutnr (<span>신한 110-365-994395 이태우</span>);
}

const getDeadLine = (selectedValue) => {
    if(selectedValue === 0)
        return (<span>5월 11일 10:00</span>);
    if(selectedValue === 1)
        return (<span>5월 12일 10:00</span>);
    if(selectedValue === 2)
        return (<span>5월 13일 10:00</span>);
}

const PaymentApplyContents = ({selectedValue, paymentInfo}) => (
    <Container>
        <Container text>
            <br/><br/>
            <Image centered src={DEFAULT_REQUEST_URL+'/media/how_to_payment.png'} />
            <br/>
            <hr />
            <p style={{padding:'30px'}}>
                결제정보<br /><br />
                모임 일자: {paymentInfo} <br />
                입금 계좌: {getAccount(selectedValue)}<br />
                입금 금액(보증금): <a>5,000원</a><br/>
            * 입금하신 보증금은 모임 참석 시 환불됩니다.<br/>
            </p>
            <hr />
        </Container>

        <Container style={{padding:'30px'}} text>
            <p>
            이용료 결제 안내<br/>
            1. 참가신청 후 <a>24시간 내로 결제를 완료하셔야 신청승인이 됩니다</a><br/>
            2. 결제는 통장 입금방식으로 진행됩니다<br/>
            3. <a>결제 후 결제가 확인 되면 문자 메시지로 결제 참가 승인 신청 문자 메시지가 전송됩니다</a><br/>
        4. 환불/취소/변경은 {getDeadLine(selectedValue)}전 까지 가능하며, 링쿠 카카오톡 플러스 친구(@linku)로 신청하셨던 전화번호와 환급받으실 계좌번호를 보내주시면 환급됩니다.<br/>
            </p>
        </Container>
    </Container>
);

const textContainerStyle = {
    margin: '38px',
    fontSize: '20px',
};

const PaymentDescription = () => (
    <Container>
        <br/><br/>
        <Container style={{fontSize: '30px'}} text textAlign="center">
            <a>새로운 친구들도 만나고 <br/>
            재밌게 놀 수 있는 링쿠 서비스!</a><br/>
        </Container>

        <Container text textAlign="center" style={textContainerStyle}>
            저희는 <br/>
            <a style={{fontSize: '25px'}}>무단 불참 방지</a><br/>
            를 위해 *보증금(<a>5,000원</a>)을 받고 있습니다.<br />
            * 보증금은 모임 참석 시 모임장이 현금으로 환불 해드리며, 불참 시 환불되지 않습니다.
        </Container>
    </Container>
);

class Apply extends React.Component{
    state = {modalOpen: false, isWantedPayment: false}

    handleJoin = (e) => {
        this.handleOpen(e);
    }
    handleOpen = (e) => this.setState({
        modalOpen: true
    })

    handleClose = (e) => this.setState({
        modalOpen: false,
        isWantedPayment: false
    })

    handlePayment = (e) => {
        this.setState({
            ...this.state,
            isWantedPayment: true
        })
    }
    render(){
        return(
            <div>
                <Button onClick={this.handleJoin} color='blue' fluid>같이 놀자!</Button>
                <Modal
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    closeIcon='close'>
                    <Modal.Content>{
                        (this.state.isWantedPayment) ?
                        <PaymentApplyContents selectedValue={this.props.selectedValue} paymentInfo={this.props.paymentInfo}/>
                        :
                        <PaymentDescription />
                    }{
                        (this.state.isWantedPayment) ?
                        <Button onClick={this.handleClose} style={{marginBottom: '10px'}} fluid color='blue'>
                            결제 완료
                        </Button>
                        :
                        <Button onClick={this.handlePayment} style={{marginBottom: '10px'}} fluid color='blue'>결제 진행하기</Button>
                    }
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}

export default Apply;

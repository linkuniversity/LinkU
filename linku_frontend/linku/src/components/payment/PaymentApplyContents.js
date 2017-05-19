import React from 'react';
import {Button, Modal, Image, Container } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';
import RedirectToLoginCheck from '../utils/RedirectToLoginCheck';

const getAccount = (selectedValue, isCurrent, isPrearranged) => {
    if(isCurrent === 'true' && isPrearranged === 'false'){
        if(selectedValue === 0)
            return (<span>신한 110-365-994395 이태우</span>);
        else if(selectedValue === 1)
            return (<span>우리 1002-750-309142 최지훈</span>);
        else if(selectedValue === 2)
            return (<span>국민 958802-01-178593 박진혜</span>);
    }

    if(isCurrent === 'false' && isPrearranged == 'true'){
        if(selectedValue === 0)
            return (<span>신한 110-374-439288 장선혁</span>);
        else if(selectedValue === 1)
            return (<span>국민 93915177743 황민연</span>);
    }
}

const getDeadLine = (selectedValue, isCurrent, isPrearranged) => {
    if(isCurrent === 'true' && isPrearranged === 'false'){
        if(selectedValue === 0)
            return (<span>5월 24일 19:00</span>);
        else if(selectedValue === 1)
            return (<span>5월 25일 19:00</span>);
        else if(selectedValue === 2)
            return (<span>5월 26일 19:00</span>);
    }

    if(isCurrent === 'false' && isPrearranged == 'true'){
        if(selectedValue === 0)
            return (<span>5월 31일 19:00</span>);
        else if(selectedValue === 1)
            return (<span>6월 2일 19:00</span>);
    }
}

class PaymentApplyContents extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        if (process.env.REACT_APP_LINKU_SERVER_ENVIRONMENT === 'production'){
            var ReactGA = require('react-ga');
            ReactGA.pageview(window.location.pathname);
        }
    }

    render(){
        return(
            <Container>
                <RedirectToLoginCheck redirectUrlOnCompletion="/payment-apply-contents"/>
                <Container text>
                    <br/><br/>
                    <Image centered src={DEFAULT_REQUEST_URL+'/media/how_to_payment.png'} />
                    <br/>
                    <hr />
                    <p style={{padding:'30px'}}>
                        결제정보<br /><br />
                    모임 일자: {new URLSearchParams(this.props.location.search).get('paymentInfo')} <br />
                    입금 계좌: {getAccount(parseInt(new URLSearchParams(this.props.location.search).get('selectedValue')), new URLSearchParams(this.props.location.search).get('isCurrent'), new URLSearchParams(this.props.location.search).get('isPrearranged'))}<br />
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
                4. 환불/취소/변경은 {getDeadLine(parseInt(new URLSearchParams(this.props.location.search).get('selectedValue')), new URLSearchParams(this.props.location.search).get('isCurrent'), new URLSearchParams(this.props.location.search).get('isPrearranged'))}전 까지 가능하며, 링쿠 카카오톡 플러스 친구(@linku)로 신청하셨던 전화번호와 환급받으실 계좌번호를 보내주시면 환급됩니다.<br/>
                    </p>
                </Container>
                <Button onClick={ () => this.props.history.push('/')} color='blue' fluid>알겠어요</Button>
            </Container>
        )
    }

}


export default withRouter(PaymentApplyContents);

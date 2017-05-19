import React from 'react';
import {Button, Container, Icon } from 'semantic-ui-react';
import RedirectToLoginCheck from '../utils/RedirectToLoginCheck';

const textContainerStyle = {
    margin: '38px',
    fontSize: '20px',
};

class PaymentDescription extends React.Component{
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
            <Container text>
                <RedirectToLoginCheck redirectUrlOnCompletion="/payment-description"/>
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
                <Button
                    onClick={() => this.props.history.push('/payment-apply-contents'
                    + '?'
                    + 'selectedValue=' + new URLSearchParams(this.props.location.search).get('selectedValue') + "&"
                    + 'paymentInfo=' + new URLSearchParams(this.props.location.search).get('paymentInfo') + "&"
                    + 'isCurrent=' + new URLSearchParams(this.props.location.search).get('isCurrent') + "&"
                    + 'isPrearranged=' + new URLSearchParams(this.props.location.search).get('isPrearranged'))}
                    style={{marginBottom: '10px'}}
                    fluid color='blue'
                    size='big'>
                    <Icon inverted color='white' name='lock'/>
                        결제 진행하기
                </Button>
            </Container>
        )
    }
}


export default PaymentDescription;

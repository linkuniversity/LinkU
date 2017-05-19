import React from 'react';
import {Container, Button, Image} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import {Link} from 'react-router-dom';
import LinkUGuide from '../guide_page/LinkUGuide';
import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/Login';

class IntroOfLinkU extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalOpen: true }
    }

    handleOpen = (e) => this.setState({
      modalOpen: true,
    })

    handleClose = (e) => this.setState({
      modalOpen: false,
    })

    _getButtonByTokenState = () => {
        let loginAndOutStyle = {
            fontSize: '17px',
            lineHeight: '40px',
            textShadow: '0.0em 0.1em 0.15em #666',
            color:"#FFFFFF",
            backgroundColor: "transparent"
        }

        if(this.props.loggedIn){
            return (<Button
                style={loginAndOutStyle}
                onClick={() => {
                    this.props.logout();
                }}>
                    로그아웃
                </Button>);
        }
        else{
            return (<Button
                style={loginAndOutStyle}
                onClick={() => {
                    this.props.history.push('/login');
                }}>
                    로그인
                </Button>);
        }
    }

    render() {
        let MediaQuery = require('react-responsive');
        let containerStyle = {
            paddingTop: '50px',
            textAlign: 'center',
            backgroundImage: 'url('+ DEFAULT_REQUEST_URL +'/media/header_background.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundAttachment: 'fixed',
            width: '100%',
            height: '560px',
            color: '#FFFFFF',
        }

        let promotionLargeWordStyle = {
            marginTop: '20px',
            marginBottom: '26px',
            fontSize: '33px',
            lineHeight: '50px',
            textShadow: '0.0em 0.02em 0.15em #666'
        }

        let promotionSmallWordStyle = {
            marginTop: '20px',
            marginBottom: '20px',
            fontSize: '23px',
            lineHeight: '40px',
            textShadow: '0.0em 0.1em 0.15em #666'
        }

        let guideButtonLargeStyle = {
            color: '#FFFFFF',
            fontSize: '32px'
        }

        let guideButtonSmallStyle = {
            color: '#FFFFFF',
            fontSize: '26px'
        }
        return (
            <Container centered style={containerStyle}>
                <Container style={{marginBottom:"30px"}} textAlign="right">
                    {this._getButtonByTokenState()}
                </Container>
                <Image src={DEFAULT_REQUEST_URL+"/media/logo_top.png"} centered />
                <MediaQuery minDeviceWidth={1}>
                    <MediaQuery minWidth={600}>
                        <div style={promotionLargeWordStyle}>
                            <b>링쿠</b>는 다같이 <b>먹고 놀고 친해지는</b> <br/>
                            <b>대학생 밥모임</b> 연결 서비스입니다. <br/>
                        </div>
                        <Button style={{backgroundColor: '#5fa1d7', marginTop: '30px', width: '150px', fontSize: '16px'}} color='blue' content='이용안내'
                            onClick={() => this.props.history.push('/about')} />
                    </MediaQuery>
                    <MediaQuery maxWidth={600}>
                        <div style={promotionSmallWordStyle}>
                            <b>링쿠</b>는 다같이 <b>먹고 놀고 친해지는</b> <br/>
                            <b>대학생 밥모임</b> 연결 서비스입니다. <br/>
                        </div>
                        <Button style={{backgroundColor: '#5fa1d7', marginTop: '30px', width: '150px', fontSize: '16px'}} color='blue' content='이용안내'
                            onClick={() => this.props.history.push('/about')} />
                    </MediaQuery>
                </MediaQuery>
            </Container>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        loggedIn: state.login.loggedIn,
    }
};

export default withRouter(connect(mapStateToProps, {logout})(IntroOfLinkU));

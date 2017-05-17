import React from 'react';
import {Container, Button, Image} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import {Link} from 'react-router-dom';
import LinkUGuide from '../guide_page/LinkUGuide';
import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';

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

    render() {
        let MediaQuery = require('react-responsive');
        let containerStyle = {
            paddingTop: '100px',
            textAlign: 'center',
            backgroundImage: 'url('+ DEFAULT_REQUEST_URL +'/media/header_background.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            height: '480px',
            color: '#FFFFFF',
        }

        let promotionLargeWordStyle = {
            marginTop: '20px',
            marginBottom: '26px',
            fontSize: '33px',
            lineHeight: '50px'
        }
        let promotionSmallWordStyle = {
            marginTop: '20px',
            marginBottom: '20px',
            fontSize: '23px',
            lineHeight: '40px'
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
                <Image src={DEFAULT_REQUEST_URL+"/media/logo_top.png"} centered />
                <MediaQuery minDeviceWidth={1}>
                    <MediaQuery minWidth={600}>
                        <div style={promotionLargeWordStyle}>
                            링쿠는 다같이 먹고 놀고 친해지는 <br/>
                            대학생 밥모임 연결 서비스입니다. <br/>
                        </div>
                        <Link to='/about' style={guideButtonLargeStyle}>이용안내></Link>
                    </MediaQuery>
                    <MediaQuery maxWidth={600}>
                        <div style={promotionSmallWordStyle}>
                            링쿠는 다같이 먹고 놀고 친해지는 <br/>
                            대학생 밥모임 연결 서비스입니다. <br/>
                        </div>
                        <Link to='/about' style={guideButtonSmallStyle}>이용안내></Link>
                    </MediaQuery>
                </MediaQuery>
            </Container>
        );
    }

}

export default IntroOfLinkU;

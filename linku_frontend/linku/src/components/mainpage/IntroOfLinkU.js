import React, {Component} from 'react';
import {Container, Grid, Card, Image, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/Common';
import LinkUGuide from '../guide_page/LinkUGuide';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';

class IntroOfLinkU extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalOpen: false }
    }

    handleOpen = (e) => this.setState({
      modalOpen: true,
    })

    handleClose = (e) => this.setState({
      modalOpen: false,
    })

    render() {
        let containerStyle = {
            marginTop: '5%',
            textAlign: "center",
        }

        let promotionWordStyle = {
            marginTop: '3%',
            width: "100%",
            fontSize: '19pt',
            lineHeight: '40px',
        };

        let serviceIntroImageStyle = {
            marginTop: "25%",
            width: '75px',
            hegith: '75px',
        }

        let serviceIntroHeaderStyle={
            marginTop: '30px',
            fontSize: '20pt',
        }

        let guideButtonStyle = {
            marginTop: '5px',
            color: '#5fa1d7',
            backgroundColor: '#FFFFFF',
            border: '0px',
            fontSize: '23px'
        }

        return (
            <Container centered style={containerStyle}>
                <div style={{marginTop: '15px', fontSize:'13px',color: '#60a2d9'}}>
                    링쿠는 현재 베타 서비스입니다. <br/>
                    본 서비스에서 더 좋은 모습 보여드릴게요
                </div>
                <div style={promotionWordStyle}>
                    링쿠는 <b>대학생</b>들이 만나서<br/>
                    <b>놀고 웃고 친해질 수 있는</b><br/>
                    <b>대학생 놀이모임</b> 연결서비스입니다<br/>
                    <LinkUGuide modalTrigger = {<Button style={guideButtonStyle} onClick={this.handleOpen}>이용안내></Button>} modalOpen={this.state.modalOpen} handleClose={this.handleClose} />
                </div>
            </Container>

        );
    }

}

export default IntroOfLinkU;

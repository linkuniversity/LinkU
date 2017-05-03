import React from 'react';
import {Container, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import LinkUGuide from '../guide_page/LinkUGuide';

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
            marginTop: '3%',
        }

        let promotionWordStyle = {
            width: "100%",
            textAlign: "center",
            fontSize: '19pt',
            lineHeight: '40px',
        };

        let guideButtonStyle = {
            marginTop: '5px',
            color: '#5fa1d7',
            backgroundColor: '#FFFFFF',
            border: '0px',
            fontSize: '23px'
        }

        return (
            <Container centered style={containerStyle}>
                <div style={promotionWordStyle}>
                    링쿠는 <b>대학생</b>들이 만나서<br/>
                    <b>놀고 웃고 친해질 수 있는</b><br/>
                    <b>대학생 놀이모임</b> 연결서비스입니다<br/>
                    <LinkUGuide modalTrigger={<Button style={guideButtonStyle} onClick={this.handleOpen}>이용안내></Button>} modalOpen={this.state.modalOpen} handleClose={this.handleClose} />
                </div>
            </Container>

        );
    }

}

export default IntroOfLinkU;

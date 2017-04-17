import React, {Component} from 'react';
import {Container, Image, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/Common';

class LinkUHeader extends React.Component {
    constructor(props) {
        super(props);
    };



    render() {

        let containerStyle = {
            marginTop: "40px",
        };

        let titleStyle = {
            fontFamily: '../res/assets/KoPubDotumMedium.ttf',
            fontSize: '14pt',
            marginLeft: '12px',
            color: '#60a2d9'
        };

        let signWrapperStyle = {
            float: 'right',

        }

        let signInStyle = {
            fontFamily: '../res/assets/KoPubDotumMedium.ttf',
            fontSize: '14pt',
            color: '#5d5d5d',
        }

        let signUpStyle={
            marginLeft: '40px',
            fontFamily: '../res/assets/KoPubDotumMedium.ttf',
            fontSize: '14pt',
            color: '#5d5d5d',
        }

        return (

            <Container style={containerStyle}>
                <Image src='http://localhost:8000/media/logo_top.png' verticalAlign='top'/>
                <span style={titleStyle}>Link U Link University
                </span>
                <span style={signWrapperStyle}>
                    <a style={signInStyle}>로그인</a>
                    <a style={signUpStyle}>회원가입</a>
                </span>
            </Container>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(undefined, mapDispatchToProps)(LinkUHeader);

import React, {Component} from 'react';
import {Container, Image, Button} from 'semantic-ui-react'
import Signup from '../signup/Signup.js'
import Login from '../login/Login.js'
import { connect } from 'react-redux';
import * as actions from '../../actions/Login';
import { bindActionCreators } from 'redux';

class LinkUHeader extends Component {
    constructor(props) {
        super(props);
    }

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
        };

        let signInButtonStyle = {
            fontFamily: '../res/assets/KoPubDotumMedium.ttf',
            fontSize: '14pt',
            color: '#5d5d5d',
            backgroundColor: '#FFFFFF',
            border: '0px'
        };

        let signUpButtonStyle={
            marginLeft: '20px',
            fontFamily: '../res/assets/KoPubDotumMedium.ttf',
            fontSize: '14pt',
            color: '#5d5d5d',
            backgroundColor: '#FFFFFF',
            border: '0px'
        };

        let signOutButtonStyle={
            float: 'right',
            fontFamily: '../res/assets/KoPubDotumMedium.ttf',
            fontSize: '14pt',
            color: '#5d5d5d',
            backgroundColor: '#FFFFFF',
            border: '0px'
        };

        return (
            <Container style={containerStyle}>
                <Image src='http://localhost:8000/media/logo_top.png' verticalAlign='top'/>
                <span style={titleStyle}>Link U Link University</span>
                {
                    (localStorage.getItem('token') && this.props.loggedIn) ?
                    (
                        <button style={signOutButtonStyle} onClick={this.props.logout}>로그아웃</button>
                    ):
                    (
                        <span style={signWrapperStyle}>
                            <Login triggerButton={<button style={signInButtonStyle}>로그인</button>}/>
                            <Signup buttonStyle={signUpButtonStyle}/>
                        </span>
                    )
                }
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn : state.login.loggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect( mapStateToProps, mapDispatchToProps )(LinkUHeader);

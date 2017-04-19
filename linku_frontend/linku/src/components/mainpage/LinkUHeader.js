import React, {Component} from 'react';
import {Container, Image, Button} from 'semantic-ui-react'
import Signup from '../signup/Signup.js'
import Login from '../login/Login.js'
import { logout } from '../../actions/Login';
import { connect } from 'react-redux';

class LinkUHeader extends Component {
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

        let signInButtonStyle = {
            fontFamily: '../res/assets/KoPubDotumMedium.ttf',
            fontSize: '14pt',
            color: '#5d5d5d',
            backgroundColor: '#FFFFFF',
            border: '0px'
        }

        let signUpButtonStyle={
            marginLeft: '20px',
            fontFamily: '../res/assets/KoPubDotumMedium.ttf',
            fontSize: '14pt',
            color: '#5d5d5d',
            backgroundColor: '#FFFFFF',
            border: '0px'
        }

        let signOutStyle={
            float: 'right',
            fontFamily: '../res/assets/KoPubDotumMedium.ttf',
            fontSize: '14pt',
            color: '#5d5d5d',
        }

        return (
            <Container style={containerStyle}>
                <Image src='http://localhost:8000/media/logo_top.png' verticalAlign='top'/>
                <span style={titleStyle}>Link U Link University</span>
                {
                    (localStorage.getItem('token') && this.props.loggedIn) ?
                    (
                        <a style={signOutStyle} onClick={this.props.logout}>로그아웃</a>
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

export default connect( mapStateToProps, {logout} )(LinkUHeader);

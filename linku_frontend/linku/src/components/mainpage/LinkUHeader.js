import React, {Component} from 'react';
import {Container, Image, Button} from 'semantic-ui-react'
import Signup from '../signup/Signup.js'
import Login from '../login/Login.js'
import { connect } from 'react-redux';
import { logout } from '../../actions/Login';

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
                            <Login triggerButton={<a style={signInStyle}>로그인</a>}/>
                            <Signup triggerButton={<a style={signUpStyle}>회원가입</a>}/>
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

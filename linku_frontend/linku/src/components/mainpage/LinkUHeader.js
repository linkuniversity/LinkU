import React, {Component} from 'react';
import {Container, Image, Button} from 'semantic-ui-react'
import Signup from '../signup/Signup.js'
import Login from '../login/Login.js'

import { connect } from 'react-redux';
import { logout } from '../../actions/Login';

class LinkUHeader extends Component{
    render()
    {
        return(
            <Container>
                <Image src='http://localhost:8000/media/logo_top.png' verticalAlign='top'/>
                <span>Link U Link University</span>
                {
                    (localStorage.getItem('token') && this.props.loggedIn) ?
                    (
                        <Button basic content="로그아웃" floated="right" onClick={this.props.logout}/>
                    ):
                    (
                        <span>
                            <Signup triggerButton={<Button basic content="회원가입" floated="right"/>}/>
                            <Login triggerButton={<Button basic content="로그인" floated="right"/>}/>
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

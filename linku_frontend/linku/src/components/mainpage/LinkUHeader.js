import React, {Component} from 'react';
import {Container, Image, Button} from 'semantic-ui-react'
import Signup from '../signup/Signup.js'
import Login from '../login/Login.js'

export default class LinkUHeader extends Component {
    render() {
        return (
            <Container>
                <Image src='http://localhost:8000/media/logo_top.png' verticalAlign='top'/>
                <span>Link U Link University</span>
                <Signup />
                <Login triggerButton={<Button basic content="로그인" floated="right"/>}/>
            </Container>
        );
    }
}

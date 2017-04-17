import React from 'react';
import {Container, Image, Button} from 'semantic-ui-react'
import Signup from '../signup/Signup.js'

const LinkUHeader = () => (
    <Container>
        <Image src='http://localhost:8000/media/logo_top.png' verticalAlign='top'/>
        <span>Link U Link University</span>
        <Signup triggerButton={<Button basic content="회원가입" floated="right"/>}/>
        <Button basic content="로그인" floated="right"/>
    </Container>
);

export default LinkUHeader;

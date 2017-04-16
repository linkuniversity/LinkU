import React, {Component} from 'react';
import {Container, Image, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/Common';

class LinkUHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <Container>
                <Image src='http://localhost:8000/media/logo_top.png' verticalAlign='top'/>
                <span>Link U Link University
                </span>
                <Button basic content="회원가입" floated="right"/>
                <Button basic content="로그인" floated="right"/>
            </Container>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(undefined, mapDispatchToProps)(LinkUHeader);

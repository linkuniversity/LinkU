import React, { Component } from 'react';

import { connect } from 'react-redux';

import SimpleLogin from './SimpleLogin';
import CloseButton from './CloseButton';

import * as actions from '../../actions/Common';

class Login extends Component {
    render() {
        let style = {
            display: this.props.isVisible ? 'inline-block' : 'none'
        }
        return (
            <div style={style}>
                <CloseButton />
                <h>링쿠 로그인</h>
                <SimpleLogin />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isVisible : state.login.isVisible
    };
}

export default connect(mapStateToProps)(Login);

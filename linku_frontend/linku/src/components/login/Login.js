import React, { Component } from 'react';

import { connect } from 'react-redux';

import SimpleLogin from './SimpleLogin';
import CloseButton from './CloseButton';

import * as actions from '../../actions/Common';
import SignUp from '../signup/SignUp';
import axios from 'axios';

class Login extends Component {
    handleSubmit = async (values) => {
        if( values.password != values.pwd_chk )
            console.log("password is not equal");
        else {
            const info = await Promise.all([axios.post('http://127.0.0.1:8000/users/',values)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error.response.data);
                })
            ]);
        }
    }
    render() {
        let style = {
            display: this.props.isVisible ? 'inline-block' : 'none'
        }
        return (
            <div style={style}>
                <CloseButton />
                <h>링쿠 로그인</h>
                <SimpleLogin />
                <SignUp onSubmit={this.handleSubmit}/>
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

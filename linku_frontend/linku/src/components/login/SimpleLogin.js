import React, { Component } from 'react';
import SimpleLoginButton from './SimpleLoginButton';


export default class SimpleLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            simpleLoginButtonInfo: [{
                className: 'facebookLoginButton',
                buttonName: 'Facebook으로 1초만에 로그인하기',
                loginFunction: this.facebookLogin
            }]
        };
        this.facebookLogin = this.facebookLogin.bind(this);
    }

    facebookLogin() {

    }

    render() {
        const mapToSimpleLoginButtonComponent = (simpleLoginButtonInfoList) => {
            return simpleLoginButtonInfoList.map((simpleLoginButtonInfo, i) => {
                return ( <SimpleLoginButton simpleLoginButtonInfo={ simpleLoginButtonInfo } key={i} /> );
            });
        };
        return (
            <div>
                <label>간편 로그인</label>
                { mapToSimpleLoginButtonComponent(this.state.simpleLoginButtonInfo) }
            </div>
        );
    }
}

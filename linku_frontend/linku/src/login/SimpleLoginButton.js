import React, { Component } from 'react';


export default class SimpleLoginButton extends Component {
    render() {
        let simpleLoginButtonStyle = {
            background: '#993399',
            textAlign: 'center',
        };
        return (
            <div
                className = { this.props.simpleLoginButtonInfo.className } style = { simpleLoginButtonStyle }
                onClick = { this.props.simpleLoginButtonInfo.loginFunction } >
                { this.props.simpleLoginButtonInfo.buttonName }
            </div>
        );
    }
}

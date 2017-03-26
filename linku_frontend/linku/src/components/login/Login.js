import React, { Component } from 'react';
import SimpleLogin from './SimpleLogin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/Common';

class Login extends Component {
    render() {
        let style = {
            display: this.props.isVisible ? 'inline-block' : 'none'
        }
        return (
            <div style={style}>
                <div onClick={this.props.hideLoginAlert}>
                    로그인 창 닫기
                </div>
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
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);

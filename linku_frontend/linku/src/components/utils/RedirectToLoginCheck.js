import React, { Component, PropTypes } from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

// 로그인 되어 있는지 check 및 redirecting 사용 시 이 Component를 쓰면 된다.
const propTypes = {
};
const defaultProps = {
    redirectUrlOnCompletion: "/"
};

class RedirectToLoginCheck extends Component {
    redirectToUrl = () => {
        alert("로그인이 필요합니다.");
        localStorage.setItem("redirectUrlOnCompletion", this.props.redirectUrlOnCompletion);
        
        return "/login";
    }
    render() {
        return(
            <div>
            {!this.props.loggedIn && <Redirect to={this.redirectToUrl()}/>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn : state.login.loggedIn
    }
};

RedirectToLoginCheck.propTypes = propTypes;
RedirectToLoginCheck.defaultProps = defaultProps;

export default withRouter(connect(mapStateToProps)(RedirectToLoginCheck));

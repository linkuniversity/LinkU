import React, {Component} from 'react';
import { Image, Button } from 'semantic-ui-react'
import Login from '../login/Login.js'
import { connect } from 'react-redux';
import * as actions from '../../actions/Login';
import { bindActionCreators } from 'redux';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';

import {withRouter} from 'react-router-dom';

class LinkUHeader extends Component {
    render() {
        let containerStyle = {
            padding: '5px'
        };

        return (
            <div style={containerStyle}>
                <Image src={DEFAULT_REQUEST_URL+'/media/logo_top.png'} verticalAlign='top'/>
                {
                    (localStorage.getItem('token') && this.props.loggedIn) ?
                    (<Button onClick={this.props.logout} basic color='blue' floated='right'>로그아웃</Button>) :
                    (<Button onClick={() => this.props.history.push('/login')}basic color='blue' floated='right'>로그인</Button>)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn : state.login.loggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(LinkUHeader));

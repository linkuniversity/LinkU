import React, {Component} from 'react';
import { Image, Button } from 'semantic-ui-react'
import Login from '../login/Login.js'
import { connect } from 'react-redux';
import * as actions from '../../actions/Login';
import { bindActionCreators } from 'redux';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';

class LinkUHeader extends Component {
    render() {
        let containerStyle = {
            marginTop: '40px',
            textAlign: 'center'
        };

        return (
            <div style={containerStyle}>
                <Image src={DEFAULT_REQUEST_URL+'/media/logo_top.png'} centered />
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

export default connect( mapStateToProps, mapDispatchToProps )(LinkUHeader);

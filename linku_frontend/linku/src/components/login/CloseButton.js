import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/Common';

class CloseButton extends Component{
    render(){
        return(
            <div onClick={this.props.hideLoginAlert}>
                로그인 창 닫기
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
}

export default connect(null,mapDispatchToProps)(CloseButton);

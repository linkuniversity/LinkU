import React, {Component} from 'react';
import ApplicationCompletionModal from './ApplicationCompletionModal';
import Login from '../login/Login';
import { connect } from 'react-redux';

import {Button, Modal} from 'semantic-ui-react';


class NextMeetingDetailPlan extends React.Component{
    _handleApplicationButton = (index) => {
        const applyButton = (<Button>안내 문자 신청하기</Button>);

        if(localStorage.getItem('token') && this.props.loggedIn) //로그인 되어있으면
            return (<ApplicationCompletionModal applicationIndex = {this.props.index}/>);
        else
            return (<Login triggerButton={applyButton}/>);
    }
    render(){
        return (
            <Modal trigger = {this.props.trigger}>
                <Modal.Header>모임 상세 정보</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        {this.props.content}

                        이 모임에 관심이 가나요? 안내 문자 신청하면 모임이 진행될 때 알려드릴게요!
                        {this._handleApplicationButton(this.props.index)}
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn : state.login.loggedIn
    }
}

export default connect(mapStateToProps)(NextMeetingDetailPlan);

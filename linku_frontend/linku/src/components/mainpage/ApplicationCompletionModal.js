import React, {Component} from 'react';
import {Button, Modal} from 'semantic-ui-react';
import axios from 'axios';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';

export default class ApplicationCompletionModal extends Component{
    state = { modalOpen : false }

    _applyAlarm = async (applicationIndex) => {
        const token = localStorage.getItem('token');

        if(!localStorage.hasOwnProperty('token'))
            return;

        const config = {
            headers: { 'Authorization': 'Token '+token }
        };

        const info = await Promise.all([axios.post(DEFAULT_REQUEST_URL +'/apply-alarm/','apply_alarm_index='+applicationIndex,config)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
        ]);
    }

    handleOpen = (e) => {
        this._applyAlarm(this.props.applicationIndex);
        this.setState({ modalOpen: true });
    }

    handleClose = (e) => this.setState({
        modalOpen: false,
    })

    render() {
        return (
            <Modal
                closeIcon='close'
                trigger = {<Button onClick={this.handleOpen}>안내 문자 신청하기</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
            >
                <Modal.Header>안내문자 신청완료</Modal.Header>
                <Modal.Content>
                    안내문자 신청이 완료되었습니다.
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' onClick={this.handleClose} inverted>
                        확인
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

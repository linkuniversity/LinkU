import React from 'react';
import { Container, Button, Modal, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import axios from 'axios';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';
import Login from '../login/Login';
<<<<<<< HEAD
=======
import { alertConfirm } from '../../actions/Common';
import {withRouter} from 'react-router-dom';
>>>>>>> 8b730969835454f9c5c23894937f8f9b22f4489a

class NextMeetingAlarm extends React.Component{
    state = { modalOpen: false, isApplyed: false }

    handleCloseModal = () => this.setState({modalOpen: false})

    handleClick = async () => {
        const config = {
            headers: { 'Authorization': 'Token ' + localStorage.getItem('token') }
        };
        await Promise.all([axios.post(DEFAULT_REQUEST_URL + '/next-meeting-alarm/', undefined, config)
            .then( response => {
                console.log(response);
                this.setState({modalOpen: true, isApplyed: false});
            }).catch(e => {
                console.log(e);
                this.setState({modalOpen: true, isApplyed: true});
            })
        ]);
    }

    render(){
        let containerStyle= {
            marginTop: '40px',
            marginBottom: '40px',
            paddingTop: '33px',
            paddingBottom: '33px',
            paddingLeft: '12px',
            paddingRight: '12px',
            backgroundColor: '#f8f8f9',
            textAlign: 'center',
            fontSize: '16pt',
            lineHeight: '30pt'
        };

        const getBtnByState = () => {
            if(this.props.loggedIn) {
                return (<Button style={{marginTop: '20px', width: '120px'}} color='blue' content='알림받기'
                    onClick={this.handleClick}/>);
            }
            else
                return (
                    <Button
                        onClick={()=>this.props.history.push('/login')}
                        style={{marginTop: '20px', width: '120px'}}
                        color='blue'
                        content='알림받기'
                        />);
        };

        return(
            <Container style={containerStyle}>
                이번 모임에 참석하기 힘드세요 ?<br/>
                앞으로 진행될 모임의 일정을 문자로 알려드릴게요 :D<br/>
                <Modal
                    open={this.state.modalOpen}
                    onClose={this.handleCloseModal}
                >
                    <Modal.Content>
                        {(this.state.isApplyed) ? '이미 신청되었어요 :D' : '신청이 완료되었어요 :D' }
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' onClick={this.handleCloseModal}>
                            <Icon name='checkmark' /> 확인
                        </Button>
                    </Modal.Actions>
                </Modal>
                {getBtnByState()}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn : state.login.loggedIn
    }
};

<<<<<<< HEAD
export default connect(mapStateToProps)(NextMeetingAlarm);
=======
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NextMeetingAlarm));
>>>>>>> 8b730969835454f9c5c23894937f8f9b22f4489a

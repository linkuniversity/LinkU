import React from 'react';
import { connect } from 'react-redux';
import { Card, Button, Dropdown, Menu, Grid, Header } from 'semantic-ui-react'

import { bindActionCreators } from 'redux';

import * as actions from '../../actions/Common';

import { requestLogin } from '../../actions/Login';

class MeetingCard extends React.Component
{
    _loginSuccessed = () => {
        console.log("successed");
    };
    render() {
        let meetingInfoBackgroundStyle = {
            backgroundImage: 'url(' + this.props.meetingInfo.main_image + ')'
        };
        let meetingDetailButtonStyle = {
            backgroundColor: 'blue',
            textAlign: 'center',
            marginTop: '50%'
        };
        let meetingInfoStyle = {
            margin: '2%',
            width: '500px',
            height: '500px',
            textAlign: 'left',
        };
        let meetingApplyStyle = {
            margin: '2%',
            width: '225px',
            height: '300px',
            textAlign: 'left'
        };
        const meetingDateOptions = [
            { key: 1, text: '목요일', value: 1 },
            { key: 2, text: '금요일', value: 2 },
            { key: 3, text: '토요일', value: 3 },
        ]

        return(
            <Grid centered style={meetingInfoBackgroundStyle}>
                <div style={meetingInfoStyle} onClick={(this.props.loggedIn) ? this._loginSuccessed : this.props.alertLogin}>
                    <div style={meetingInfoBackgroundStyle}>
                        <Header as='h1'>Steve Sanders</Header>
                            {this.props.meetingInfo.start_time}
                            {this.props.meetingInfo.maker_name}
                            <br/>
                            {this.props.meetingInfo.price}
                            <br/>
                            {this.props.meetingInfo.title}
                            <br/>
                            {this.props.meetingInfo.place}
                    </div>
                    <Header style={meetingDetailButtonStyle} as='h1' inverted color='grey'>상세 보기</Header>
                </div>
                <Card style={meetingApplyStyle}>
                    <Card.Content>
                        <Card.Header>
                            <Menu compact>
                                <Dropdown placeholder='클릭해서 시간 선택하기' selection options={meetingDateOptions} />
                            </Menu>
                        </Card.Header>
                        <Card.Description>
                            {this.props.meetingInfo.start_time}
                            <br/>
                            {this.props.meetingInfo.maker_name}
                            <br/>
                            {this.props.meetingInfo.price}
                            <br/>
                            {this.props.meetingInfo.title}
                            <br/>
                            {this.props.meetingInfo.place}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button color='blue' fluid>신청하기</Button>
                    </Card.Content>
                </Card>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn : state.login.loggedIn
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect( mapStateToProps, mapDispatchToProps)(MeetingCard);

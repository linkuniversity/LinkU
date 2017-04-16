import React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import * as actions from '../../actions/Common';

class MeetingCard extends React.Component
{
    _loginSuccessed = () => {
        console.log("successed");
    };
    render() {
        let cardStyle = {
            width: "400px",
            height: "400px",
            display: 'inline-block',
            margin: '20px',
            backgroundImage: 'url(' + this.props.meetingInfo.main_image + ')'
        };

        let profStyle = {
            width: '100px',
            height: '100px'
        };
        return(
            <span
                style={cardStyle}
                onClick={(this.props.loggedIn) ? this._loginSuccessed : this.props.alertLogin}
                >
                {this.props.meetingInfo.start_time}
                <br/>
                {this.props.meetingInfo.maker_name}
                <br/>
                {this.props.meetingInfo.price}
                <br/>
                {this.props.meetingInfo.title}
                <br />
                {this.props.meetingInfo.place}
            <img
                style={profStyle}
                src={this.props.meetingInfo.prof_img_path}
                />
            </span>
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

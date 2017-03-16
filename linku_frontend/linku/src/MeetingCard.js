import React from 'react';

export default class MeetingCard extends React.Component
{
    render() {
        let cardStyle = {
            width: "400px",
            height: "400px",
            display: 'inline-block',
            margin: '20px',
            backgroundImage: 'url(' + this.props.meetingInfo.food_img_path + ')'
        };

        let profStyle = {
            width: '100px',
            height: '100px'
        };
        return(
            <span style={cardStyle}>
                {this.props.meetingInfo.start_time} {this.props.meetingInfo.place}
                <br/>
                {this.props.meetingInfo.title}
            <img
                style={profStyle}
                src={this.props.meetingInfo.prof_img_path}/>
            </span>
        );
    }
}

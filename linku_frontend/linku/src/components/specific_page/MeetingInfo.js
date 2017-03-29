import React from 'react';

class MeetingInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
        this.getMeetingDateInfo = this.getMeetingDateInfo.bind(this);
    }

    getMeetingDateInfo(){
        var date = new Date(this.props.info.time);

        return "" + (date.getMonth()+1) + "." + date.getDate() + " " + "(Day)"
         + " " + this.props.info.place + " " + "" + date.getHours() + ":"
         + date.getMinutes();
    }

    render(){
        return(
            <div>
                <p>{this.getMeetingDateInfo()}</p>
                <span >신고 그림</span>
                <p>{this.props.info.title}</p>
            </div>
        );
    }

}

export default MeetingInfo;

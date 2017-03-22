import React from 'react';

class MeetingInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            place: '홍대',
            time: "2017-02-25T18:00:00+09:00",
            title : "홍대 3대 라멘 중 하나 <부탄츄> 여긴 꼭 가야해!!"
        };
    }

    getMeetingDateInfo(){
        var date = new Date("2017-02-25T18:00:00+09:00");

        return "" + (date.getMonth()+1) + "." + date.getDate() + " " + "(Day)"
         + " " + this.state.place + " " + "" + date.getHours() + ":"
         + date.getMinutes();
    }

    render(){
        return(
            <div>
                <p>{this.getMeetingDateInfo()}</p>
                <span >신고 그림</span>
                <p>{this.state.title}</p>
            </div>
        );
    }

}

export default MeetingInfo;

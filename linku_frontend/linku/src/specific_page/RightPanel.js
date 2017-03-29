import React from 'react';

class RightPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
        this.getTimeInStateTime = this.getTimeInStateTime.bind(this);

    }

    getTimeInStateTime(){
        var date = new Date(this.props.panel.time);
        return "" + date.getHours() + ":" + date.getMinutes();
    }


    render() {
        return (
            <div>
                <span>위치 {this.props.panel.place}</span><br/>
                <span>시간 {this.getTimeInStateTime()}</span><br/>
                <span>인원 {this.props.panel.num_of_joined_appliers}/{this.props.panel.max_num_ob_members} </span><br/>
                <span>예약금 {this.props.panel.price}원</span><br/>
                <button>참여 취소하기</button><br/>
                <button>대화방 가기</button>
            </div>
        );
    }

}

export default RightPanel;

import React from 'react';

class RightPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            place: '홍대',
            time: "2017-02-25T18:00:00+09:00",
            num_of_joined_appliers: 6,
            max_num_ob_members: 6,
            price : 10000
        };
    }

    getTimeInStateTime(){
        var date = new Date(this.state.time);
        return "" + date.getHours() + ":" + date.getMinutes();
    }


    render() {
        return (
            <div>
                <span>위치 {this.state.place}</span><br/>
                <span>시간 {this.getTimeInStateTime()}</span><br/>
                <span>인원 {this.state.num_of_joined_appliers}/{this.state.max_num_ob_members} </span><br/>
                <span>예약금 {this.state.price}원</span><br/>
                <button>참여 취소하기</button><br/>
                <button>대화방 가기</button>
            </div>
        );
    }

}

export default RightPanel;

import React from 'react';

class Place extends React.Component{
    constructor(props){
        super(props);
        this.state={
            restaurant_name : "부탄츄",
            category : "일식 > 일본라멘",
            specific_link : "http://map.naver.com/local/siteview.nhn?code=31801473",
            gps_latitude : 37.5564015, // 위도
            gps_longtitude : 126.9267368 // 경도
        }
    }

    render(){
        return(
            <div>
                <p>장소</p>
                <br/>
                <span>식당 이름 : {this.state.restaurant_name}</span>
                <span>분류 : {this.state.category}</span>
                <span>상세정보 : {this.state.specific_link}</span>
                <div>
                    네이버 지도가 뙇
                </div>
            </div>
        );
    }

}

export default Place;

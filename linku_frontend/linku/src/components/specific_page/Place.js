import React from 'react';

class Place extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        return(
            <div>
                <p>장소</p>
                <br/>
                <span>식당 이름 : {this.props.place.restaurant_name}</span>
                <span>분류 : {this.props.place.category}</span>
                <span>상세정보 : {this.props.place.specific_link}</span>
                <div>
                    네이버 지도가 뙇
                </div>
            </div>
        );
    }

}

export default Place;

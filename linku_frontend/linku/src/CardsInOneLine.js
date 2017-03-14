import React from 'react';
import MeetingCard from './MeetingCard';

export default class CardsInOneLine extends React.Component{
  render(){
    const getComponents = (data) => {
      return data.map((meeting_info, i)=>{
          return (<MeetingCard meetingInfo={meeting_info} key = {i}/>);
        }
      );
    };

    return (
      <div>
        {getComponents(this.props.meetingInfos)}
      </div>
    );
  }
}

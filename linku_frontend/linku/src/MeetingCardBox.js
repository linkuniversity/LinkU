import React from 'react';
import CardsInOneLine from './CardsInOneLine';
import jQuery from 'jquery';
import CategoriesInMainPage from './CategoriesInMainPage';

export default class MeetingCardBox extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      meeting_infos :
      [
        [
          {
            food_img_path : "https://avatars1.githubusercontent.com/u/8240556?v=3&s=88",
            prof_img_path : "http://pngimg.com/upload_small/face/face_PNG5668.png",
            title : "홍대 3대 라멘 중 하나 <부탄츄> 여긴 꼭 가야해!!",
            start_time : "02.25 (토) 18:00",
            place : "홍대"
          },
          {
            food_img_path : "https://avatars1.githubusercontent.com/u/8240556?v=3&s=88",
            prof_img_path : "http://pngimg.com/upload_small/face/face_PNG5668.png",
            title : "식신로드에 나온 존맛카레 고씨네 카레 털러갑시다",
            start_time : "02.25 (토) 18:30",
            place : "서경대"
          },
          {
            food_img_path : "https://avatars1.githubusercontent.com/u/8240556?v=3&s=88",
            prof_img_path : "http://pngimg.com/upload_small/face/face_PNG5668.png",
            title : "식신로드에 나온 존맛카레 고씨네 카레 털러갑시다",
            start_time : "02.25 (토) 18:30",
            place : "서경대"
          }
        ],
        [
          {
            food_img_path : "https://avatars1.githubusercontent.com/u/8240556?v=3&s=88",
            prof_img_path : "http://pngimg.com/upload_small/face/face_PNG5668.png",
            title : "홍대 3대 라멘 중 하나 <부탄츄> 여긴 꼭 가야해!!",
            start_time : "02.25 (토) 18:00",
            place : "홍대"
          },
          {
            food_img_path : "https://avatars1.githubusercontent.com/u/8240556?v=3&s=88",
            prof_img_path : "http://pngimg.com/upload_small/face/face_PNG5668.png",
            title : "식신로드에 나온 존맛카레 고씨네 카레 털러갑시다",
            start_time : "02.25 (토) 18:30",
            place : "서경대"
          },
          {
            food_img_path : "https://avatars1.githubusercontent.com/u/8240556?v=3&s=88",
            prof_img_path : "http://pngimg.com/upload_small/face/face_PNG5668.png",
            title : "식신로드에 나온 존맛카레 고씨네 카레 털러갑시다",
            start_time : "02.25 (토) 18:30",
            place : "서경대"
          }
        ]
      ]
    };
    this._fetchInfosFromApi = this._fetchInfosFromApi.bind(this);
  }
  componentWillMount(){
    this._fetchInfosFromApi();
  }

  _fetchInfosFromApi(){
    jQuery.ajax({
      method: 'POST',
      url: 'http://localhost:8000/meetings',
      success: (meeting_infos) => {
        console.log(meeting_infos);
        this.setState({ meeting_infos });
      }
    });
  }
  render(){
    const mapToComponents = (data) => {
      return data.map((three_meeting_infos, i) => {
        return (<CardsInOneLine meetingInfos = {three_meeting_infos} key = {i}/>);
      });
    };

    return (
      <div>
      <CategoriesInMainPage />
      {mapToComponents(this.state.meeting_infos)}
      </div>
    );
  }
}

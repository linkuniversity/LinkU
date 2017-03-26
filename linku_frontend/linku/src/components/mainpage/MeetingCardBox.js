import React from 'react';
import MeetingCard from './MeetingCard';
import jQuery from 'jquery';
import CategoriesInMainPage from './CategoriesInMainPage';

export default class MeetingCardBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            meeting_infos:
            [
                {
                    food_img_path: "https://avatars1.githubusercontent.com/u/8240556?v=3&s=88",
                    prof_img_path: "http://pngimg.com/upload_small/face/face_PNG5668.png",
                    title: "홍대 3대 라멘 중 하나 <부탄츄> 여긴 꼭 가야해!!",
                    start_time: "02.25 (토) 18:00",
                    place: "홍대",
                    id : "1"
                },
                {
                    food_img_path: "https://cdn.pixabay.com/photo/2014/12/17/14/20/summer-anemone-571531_1280.jpg",
                    prof_img_path: "http://pngimg.com/upload_small/face/face_PNG5668.png",
                    title: "식신로드에 나온 존맛카레 고씨네 카레 털러갑시다",
                    start_time: "02.25 (토) 18:30",
                    place: "서경대",
                    id : "2"
                },
                {
                    food_img_path: "https://avatars1.githubusercontent.com/u/8240556?v=3&s=88",
                    prof_img_path: "http://pngimg.com/upload_small/face/face_PNG5668.png",
                    title: "식신로드에 나온 존맛카레 고씨네 카레 털러갑시다",
                    start_time: "02.25 (토) 18:30",
                    place: "서경대",
                    id : "3"
                },
                {
                    food_img_path: "https://avatars1.githubusercontent.com/u/8240556?v=3&s=88",
                    prof_img_path: "http://pngimg.com/upload_small/face/face_PNG5668.png",
                    title: "홍대 3대 라멘 중 하나 <부탄츄> 여긴 꼭 가야해!!",
                    start_time: "02.25 (토) 18:00",
                    place: "홍대",
                    id : "4"
                },
                {
                    food_img_path: "https://avatars1.githubusercontent.com/u/8240556?v=3&s=88",
                    prof_img_path: "http://pngimg.com/upload_small/face/face_PNG5668.png",
                    title: "식신로드에 나온 존맛카레 고씨네 카레 털러갑시다",
                    start_time: "02.25 (토) 18:30",
                    place: "서경대",
                    id : "5"
                },
                {
                    food_img_path: "https://avatars1.githubusercontent.com/u/8240556?v=3&s=88",
                    prof_img_path: "http://pngimg.com/upload_small/face/face_PNG5668.png",
                    title: "식신로드에 나온 존맛카레 고씨네 카레 털러갑시다",
                    start_time: "02.25 (토) 18:30",
                    place: "아주대",
                    id : "5"
                }
            ],
        };
        this._fetchInfosFromApi = this._fetchInfosFromApi.bind(this);
    }
    componentWillMount() {
        this._fetchInfosFromApi();
    }

    _fetchInfosFromApi() {

    }
    render() {
        const mapToComponents = (data) => {
            return data.map((meeting_infos, i) => {
                return ( <MeetingCard meetingInfo = { meeting_infos } key = {i}/>);
            });
        };

        let boxStyle = {
            maxWidth: '1500px',
        };
        return (
            <div style= { boxStyle }>
                <CategoriesInMainPage />
            {mapToComponents(this.state.meeting_infos)}
            </div>
        );
    }
}

import React, {Component} from 'react';
import MeetingImages from './specific_page/MeetingImages';
import RightPanel from './specific_page/RightPanel';
import MeetingInfo from './specific_page/MeetingInfo';
import Maker from './specific_page/Maker';
import Place from './specific_page/Place';
import Appliers from './specific_page/Appliers';

export default class App extends Component {

    render() {

        const data = {
            appliers: [
                {
                    name: "김재혁",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFeeasFhp5iGjLbZBTyTDtcP1z5ZSJoF9zuDlnC1BuVvsm9kD2g"
                }, {
                    name: "Hanna Jung",
                    iamge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFeeasFhp5iGjLbZBTyTDtcP1z5ZSJoF9zuDlnC1BuVvsm9kD2g"
                }, {
                    name: "신동민",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFeeasFhp5iGjLbZBTyTDtcP1z5ZSJoF9zuDlnC1BuVvsm9kD2g"
                }
            ],
            maker: {
                profile_image: "https://pbs.twimg.com/profile_images/662419409600811009/lRH4GDHK.jpg",
                name: "김혜나"
            },
            images: {
                main_image: "http://butanchu.com/wp-content/uploads/2013/11/ramen03.jpg",
                images: ["http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201403/06/74/f0011274_53181f239bb52.jpg", "http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201403/06/74/f0011274_53181f239bb52.jpg", "http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201403/06/74/f0011274_53181f239bb52.jpg", "http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201403/06/74/f0011274_53181f239bb52.jpg"]
            },
            info: {
                place: '홍대',
                time: "2017-02-25T18:00:00+09:00",
                title: "홍대 3대 라멘 중 하나 <부탄츄> 여긴 꼭 가야해!!"
            },
            place: {
                restaurant_name: "부탄츄",
                category: "일식 > 일본라멘",
                specific_link: "http://map.naver.com/local/siteview.nhn?code=31801473",
                gps_latitude: 37.5564015, // 위도
                gps_longtitude: 126.9267368 // 경도
            },
            panel: {
                place: '홍대',
                time: "2017-02-25T18:00:00+09:00",
                num_of_joined_appliers: 6,
                max_num_ob_members: 6,
                price: 10000
            }
        };

        return (
            <div>
                <MeetingImages images={data.images}/>
                <RightPanel panel={data.panel}/>
                <MeetingInfo info={data.info}/>
                <Maker maker={data.maker}/>
                <Place place={data.place}/>
                <Appliers appliers={data.appliers}/>
            </div>
        );
    }
}

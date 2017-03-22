import React from 'react';

class Maker extends React.Component{

    constructor(props){
        super(props)
        this.state={
            profile_image : "https://pbs.twimg.com/profile_images/662419409600811009/lRH4GDHK.jpg",
            name : "김혜나",

        };
    }

    render(){
        return(
            <div>

                <p>모임장</p>
                <br/>
                <span>
                    <img src = {this.state.profile_image}/>
                    <div>
                        <p>김혜나</p>
                        <p>안녕하세요 홍대 라멘맛집으로 유명한 부탄츄 가티드실분 있나요?
                        자주 가는 곳인데 같이 맛있는거 먹고 얘기도 많이 했으면 좋겠어요
                        휴학한 친구들이 많아서 혼밥이 너무 외롭네요 ㅠㅠ
                        ㅎㅎ~~6시에 부탄츄 앞에서 만나면 될 것 같아요
                        자세한 정보는 아래 링크를 확인해주세욤
                        </p>
                    </div>
                </span>
            </div>
        );
    }

}


export default Maker;

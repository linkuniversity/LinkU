import React from 'react';
import MyComment from './MyComment';
import Comments from './Comments';

class MeetingComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "이진주",
            num_of_comments: 3,
            comments: [
                {
                    name: "Hanna Jung",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFeeasFhp5iGjLbZBTyTDtcP1z5ZSJoF9zuDlnC1BuVvsm9kD2g",
                    text: "오 부탄츄 맛있나요??",
                    time: "2017-02-25T18:05:00+09:00"
                }, {
                    name: "Hanna Jung",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFeeasFhp5iGjLbZBTyTDtcP1z5ZSJoF9zuDlnC1BuVvsm9kD2g",
                    text: "오 부탄츄 맛있나요????",
                    time: "2017-02-25T18:07:00+09:00"
                }
            ]
        };
    }


    render(){
        return(
            <div>
                <MyComment num_of_comments={this.state.num_of_comments} name={this.state.name}/>
                <Comments comments={this.state.comments}/>
            </div>
        );
    }

}

export default MeetingComment;

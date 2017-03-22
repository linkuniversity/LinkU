import React from 'react';

class MyComment extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div>
                <p>댓글 {this.props.num_of_comments}</p>
                <span>
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFeeasFhp5iGjLbZBTyTDtcP1z5ZSJoF9zuDlnC1BuVvsm9kD2g"/>
                    <div>
                        <p>{this.props.name}</p>
                        <span>
                            <input type="text" name="comment"/>
                            <button>보내기</button>
                        </span>
                    </div>

                </span>
            </div>
        );
    }


}



export default MyComment;

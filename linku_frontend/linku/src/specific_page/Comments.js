import React from 'react';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getHourAndMinute(time) {
        var date = new Date(time);
        return "" + date.getHours() + ":" + date.getMinutes();
    }

    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) => {
                    return (
                        <span key={i}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFeeasFhp5iGjLbZBTyTDtcP1z5ZSJoF9zuDlnC1BuVvsm9kD2g"/>
                            <div>
                                <p>{comment.name}</p>
                                <span>
                                    <div>
                                        {comment.text}
                                    </div>
                                    {this.getHourAndMinute()}
                                </span>
                            </div>
                        </span>
                    )
                })}
            </div>
        );
    }

}

export default Comments;

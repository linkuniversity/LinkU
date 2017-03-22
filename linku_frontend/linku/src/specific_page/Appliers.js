import React from 'react';
import jQuery from 'jquery';
import ReactDOM from 'react-dom';


class Appliers extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            appliers : [
                {name : "김재혁", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFeeasFhp5iGjLbZBTyTDtcP1z5ZSJoF9zuDlnC1BuVvsm9kD2g" },
                {name : "Hanna Jung", iamge : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFeeasFhp5iGjLbZBTyTDtcP1z5ZSJoF9zuDlnC1BuVvsm9kD2g"},
                {name : "신동민", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFeeasFhp5iGjLbZBTyTDtcP1z5ZSJoF9zuDlnC1BuVvsm9kD2g"}
            ]
        };
    }

    render(){
        return(
            <div>
                <p>참여자</p>
                <br/>
                <span>
                    {this.state.appliers.map((applier, i) => {return (<div key={i}> <img src={applier.image} /> <br/> <p>{applier.name}</p></div>);})}
                </span>
            </div>
        );
    }

}

export default Appliers;

import React from 'react';
import jQuery from 'jquery';
import ReactDOM from 'react-dom';


class Appliers extends React.Component{

    constructor(props){
        super(props);
        this.state ={};
    }

    render(){
        return(
            <div>
                <p>참여자</p>
                <br/>
                <span>
                    {this.props.appliers.map((applier, i) => {return (<div key={i}> <img src={applier.image} /> <br/> <p>{applier.name}</p></div>);})}
                </span>
            </div>
        );
    }

}

export default Appliers;

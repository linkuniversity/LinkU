import React from 'react';

export default class Jumbotron extends React.Component{
  render(){
    let jumboStyle = {
      width: "1300px",
      height: "400px",
      backgroundImage: "url(" + "http://cfile7.uf.tistory.com/image/0162D4405074F78D30C589" + ")"
    };

    return(
      <div style={jumboStyle}>
        혼밥이 질린다면?<br/>
        밥모임 밥친구 만들어주는 링쿠<br/>
      </div>
    );
  }
}

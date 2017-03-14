import React from 'react';

export default class CategoriesInMainPage extends React.Component{
  render(){
    let categoryStyle = {
      width: "200px",
      display: 'inline-block',
      margin: '20px'
    };
    return (
      <div>
        <span style={categoryStyle}>전체</span>
        <span style={categoryStyle}>나와 가까운 모임</span>
        <span style={categoryStyle}>곧 시작하는 모임</span>
        <span style={categoryStyle}>한자리 남은 모임</span>
      </div>
    );
  }
}

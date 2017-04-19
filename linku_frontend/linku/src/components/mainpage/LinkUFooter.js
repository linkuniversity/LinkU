import React, {Component} from 'react';
import {Container, Grid, Image} from 'semantic-ui-react'


let leftPartBottomStyle = {
    marginTop: "7%",
    marginLeft: "45%",
    overflow: "auto",
}

let leftPartStyle = {
    position: 'relative',
    float: "left",
    width: "40%",
    marginLeft: "11%"
}

let rightPartStyle = {
    float: "right",
    marginRight: "14%",
}

const LinkUFooter = () => (
    <Container style={{width: "100%"}}>
        <Grid>
            <Grid.Row>
                <div style={{width: "100%" , marginTop: "10%", marginBottom: "5%"}}>
                    <div style={leftPartStyle}>
                        <Image style={{width: "108", height: "78"}} src='http://localhost:8000/media/logo_bottom.png' floated="left"/>
                        <div style={{marginLeft: "45%"}}>
                            <a>이용안내</a> <a style={{marginLeft: "6%"}}>리얼후기</a>
                        </div>
                        <div style={leftPartBottomStyle}>
                            대학생이 놀고 웃고 친해질 수 있는 곳 링쿠<br/>
                            대학생들의 새로운 문화를 선도합니다
                        </div>
                    </div>
                    <div style={rightPartStyle}>
                        <p style={{fontSize: "20", color: "#5fa1d7"}}>문의</p>
                        <p>
                            team.uniculture@gmail.com<br/>
                            카카오톡 플러스 친구 :
                        </p>
                        <p></p>

                        <p>문의 사항있으시면 여기로 연락주시면 됩니다.</p>
                    </div>
                </div>
            </Grid.Row>
            <Grid.Row style={{backgroundColor: "#5fa1d7", color:"#FFFFFF", height: "120"}} centered>
                <div style={{marginTop: "2%"}}>
                    <div>
                        (c) 2017 Team LinkU
                    </div>
                    <div style={{marginTop: "5px"}}>
                        supported by. Software Maestro 서울 특별시 강남구 테헤란로 311(역삼동) 아남타워 빌딩 6층
                    </div>
                </div>
            </Grid.Row>
        </Grid>
    </Container>
);

export default LinkUFooter;

import React, {Component} from 'react';
import {Container, Grid, Card, Image, Modal} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class LinkUGuide extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        let descriptionStyle = {
            marginTop: "20px",
        }

        let firstGuideImageStyle = {
            width: "135px",
            height: "163px",
        }

        let secondGuideImageStyle = {
            width: "200px",
            height: "208px",
        }

        let thirdGuideImageStyle = {
            width: "173px",
            height: "153px",
        }

        let fourthGuideImageStyle = {
            width: "217px",
            height: "161px",
        }

        let containerStyle = {
            marginTop: "100px",
        }

        return(
            <Modal trigger={this.props.modalTrigger}>
            <Modal.Header>이용안내</Modal.Header>
            <Modal.Content>
            <Container>
                <Container style={containerStyle}>
                    <Grid style={{width: '100%'}} centered verticalAlign="middle">
                        <Grid.Column width={3}>
                            <div>
                                <Image style={firstGuideImageStyle} src="http://localhost:8000/media/how_to_join_1.png" floated="left"/>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <div style={{textAlign:"left"}}>
                                <div style={{fontSize: '20pt'}}>1단계</div>
                                <div style={{fontSize: '20pt', marginTop: '10px'}}>대학인증하기</div>
                                <div style={descriptionStyle}>
                                    링쿠는 대학생 전용 서비스로 보다 더 좋은 서비스를 위해<br/>
                                    대학생 메일링 가입으로 대학생을 인증하고 있습니다. <br/>
                                    대학 메일을 이용하여 자신이 대학생인것을 인증해주세요!<br/>
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid>
                </Container>

                <Container style={containerStyle}>
                    <Grid style={{width: '100%'}} centered verticalAlign="middle">
                        <Grid.Column width={6}>
                            <div style={{textAlign:"left"}}>
                                <div style={{fontSize: '20pt'}}>2단계</div>
                                <div style={{fontSize: '20pt', marginTop: '10px'}}>원하는 모임을 선택하세요</div>
                                <div style={descriptionStyle}>
                                    가보고 싶었던 맛집이나 흥미가 있는 곳이 있으면 신청해보세요.<br/>
                                    하고 싶은 건 많지만 혼자 하기는 어려웠던 것들,<br/>
                                    새로운 친구들과 혹은 내 친구들과 같이 해보고 싶었던 것들.<br/>
                                    지금 바로 링쿠에서 원하는 모임을 찾고 신청해보세요!<br/>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div>
                                <Image style={secondGuideImageStyle} src="http://localhost:8000/media/how_to_join_2.png" floated="right"/>
                            </div>
                        </Grid.Column>
                    </Grid>
                </Container>

                <Container style={containerStyle}>
                    <Grid style={{width: '100%'}} centered verticalAlign="middle">
                        <Grid.Column width={3}>
                            <div>
                                <Image style={thirdGuideImageStyle} src="http://localhost:8000/media/how_to_join_3.png" floated="left"/>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <div style={{textAlign:"left"}}>
                                <div style={{fontSize: '20pt'}}>3단계</div>
                                <div style={{fontSize: '20pt', marginTop: '10px'}}>오픈채팅방으로 모이세요!</div>
                                <div style={descriptionStyle}>
                                    오픈채팅방에서 참가자 분들끼리 모여 미리인사하고<br/>
                                    모임장안내에 따라 어디서 모일지 이야기해보세요!<br/>
                                    만났을때 어색함도 사라지고 모임이 끝난후에<br/>
                                    찍었던 사진도 공유하다보면 활기찬 채팅방이 될거에요<br/>
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid>
                </Container>

                <Container style={containerStyle}>
                    <Grid style={{width: '100%'}} centered verticalAlign="middle">
                        <Grid.Column width={6}>
                            <div style={{textAlign:"left"}}>
                                <div style={{fontSize: '20pt'}}>4단계</div>
                                <div style={{fontSize: '20pt', marginTop: '10px'}}>두근두근 첫만남!</div>
                                <div style={descriptionStyle}>
                                    약속 장소에 모여 모임장과 함께 모임장이 안내하는<br/>
                                    놀이 코스대로 새로운 사람들과 맛집과 다양한 활동을 함께해요.<br/>
                                    링쿠에서 제공하는 미션과 이벤트들로 재미 up up!<br/>
                                    맘이 잘맞으면 2차도 같이~!<br/>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div>
                                <Image style={fourthGuideImageStyle} src="http://localhost:8000/media/how_to_join_4.png" floated="right"/>
                            </div>
                        </Grid.Column>
                    </Grid>
                </Container>
            </Container>
            </Modal.Content>
            </Modal>
        );
    }

}

export default LinkUGuide;

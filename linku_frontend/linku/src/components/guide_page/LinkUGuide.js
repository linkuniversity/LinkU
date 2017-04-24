import React, {Component} from 'react';
import {Container, Grid, Card, Image, Modal, Button, Item} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';

class LinkUGuide extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("This is : " + DEFAULT_REQUEST_URL);
    }

    render(){

        let descriptionStyle = {
            marginTop: "20px",
        }

        let guideImageStyle = {
            width: "208px",
            height: "208px",
        }


        return(
            <Modal trigger={this.props.modalTrigger} closeIcon='close' open={this.props.modalOpen} onClose={this.props.handleClose}>
            <Modal.Header>이용안내</Modal.Header>
            <Modal.Content>

            <Container>
                    <Grid>
                        <Item.Group style={{padding:"10%"}}>
                            <Item>
                              <Item.Image src={DEFAULT_REQUEST_URL+"/media/how_to_join_1.png"} floated="left"/>
                              <Item.Content>
                                  <Item.Description style={{paddingLeft:"10%", paddingRight:"10%"}}>
                                      <div>
                                          <div style={{fontSize: '20pt'}}>1단계</div>
                                          <div style={{fontSize: '20pt', marginTop: '20px'}}>대학인증하기</div>
                                          <div style={descriptionStyle}>
                                              링쿠는 대학생 전용 서비스로 보다 더 좋은 서비스를 위해
                                              대학생 메일링 가입으로 대학생을 인증하고 있습니다.
                                              대학 메일을 이용하여 자신이 대학생인것을 인증해주세요!
                                          </div>
                                      </div>
                                  </Item.Description>
                              </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid>

                    <Grid>
                        <Item.Group style={{padding:"10%"}}>
                            <Item>
                              <Item.Image src={DEFAULT_REQUEST_URL+"/media/how_to_join_2.png"} floated="left"/>
                              <Item.Content>
                                  <Item.Description style={{paddingLeft:"10%", paddingRight:"10%"}}>
                                      <div>
                                          <div style={{fontSize: '20pt'}}>2단계</div>
                                          <div style={{fontSize: '20pt', marginTop: '20px'}}>원하는 모임을 선택하세요</div>
                                          <div style={descriptionStyle}>
                                              가보고 싶었던 맛집이나 흥미가 있는 곳이 있으면 신청해보세요.
                                              하고 싶은 건 많지만 혼자 하기는 어려웠던 것들,
                                              새로운 친구들과 혹은 내 친구들과 같이 해보고 싶었던 것들.
                                              지금 바로 링쿠에서 원하는 모임을 찾고 신청해보세요!
                                          </div>
                                      </div>
                                  </Item.Description>
                              </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid>

                    <Grid>
                        <Item.Group style={{padding:"10%"}}>
                            <Item>
                              <Item.Image src={DEFAULT_REQUEST_URL+"/media/how_to_join_3.png"} floated="left"/>
                              <Item.Content>
                                  <Item.Description style={{paddingLeft:"10%", paddingRight:"10%"}}>
                                      <div>
                                          <div style={{fontSize: '20pt'}}>3단계</div>
                                          <div style={{fontSize: '20pt', marginTop: '20px'}}>오픈채팅방으로 모이세요!</div>
                                          <div style={descriptionStyle}>
                                              오픈채팅방에서 참가자 분들끼리 모여 미리인사하고
                                              모임장안내에 따라 어디서 모일지 이야기해보세요!
                                              만났을때 어색함도 사라지고 모임이 끝난후에
                                              찍었던 사진도 공유하다보면 활기찬 채팅방이 될거에요
                                          </div>
                                      </div>
                                  </Item.Description>
                              </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid>

                    <Grid>
                        <Item.Group style={{padding:"10%"}}>
                            <Item>
                              <Item.Image src={DEFAULT_REQUEST_URL+"/media/how_to_join_4.png"} floated="left"/>
                              <Item.Content>
                                  <Item.Description style={{paddingLeft:"10%", paddingRight:"10%"}}>
                                      <div>
                                          <div style={{fontSize: '20pt'}}>4단계</div>
                                          <div style={{fontSize: '20pt', marginTop: '20px'}}>두근두근 첫만남!</div>
                                          <div style={descriptionStyle}>
                                              약속 장소에 모여 모임장과 함께 모임장이 안내하는
                                              놀이 코스대로 새로운 사람들과 맛집과 다양한 활동을 함께해요.
                                              링쿠에서 제공하는 미션과 이벤트들로 재미 up up!
                                              맘이 잘맞으면 2차도 같이~!
                                          </div>
                                      </div>
                                  </Item.Description>
                              </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid>

                </Container>



            </Modal.Content>
            <Modal.Actions style={{verticalAlign: "center", textAlign: "center"}}>
                <Button style={{width: '100%', height: '100%', margin: "0 auto"}} color='blue' onClick={this.props.handleClose}>
                    확인
                </Button>
            </Modal.Actions>
            </Modal>
        );
    }

}

export default LinkUGuide;

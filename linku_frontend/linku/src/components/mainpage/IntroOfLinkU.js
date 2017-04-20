import React, {Component} from 'react';
import {Container, Grid, Card, Image, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/Common';
import LinkUGuide from '../guide_page/LinkUGuide';

class IntroOfLinkU extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let containerStyle = {
            marginTop: '80px',
        }

        let promotionWordStyle = {
            width: "100%",
            textAlign: "center",
            fontSize: '20pt',
        };


        let serviceIntroImageStyle = {
            marginTop: "25%",
            width: '75px',
            hegith: '75px',
        }

        let serviceIntroHeaderStyle={
            marginTop: '30px',
            fontSize: '20pt',
        }

        let guideButtonStyle = {
            color: '#5fa1d7',
            backgroundColor: '#FFFFFF',
            border: '0px',
            fontSize: '23px'
        }

        return (

            <Container style={containerStyle}>
                <div style={promotionWordStyle}>
                    <div> 링쿠는 <b>대학생</b>들이 만나서</div>
                    <div style={{marginTop: '16px'}}><b>놀고 웃고 친해질 수 있는</b></div>
                    <div style={{marginTop: '16px'}}><b>대학생 놀이모임</b> 연결서비스입니다<br/><br/>
                         <LinkUGuide modalTrigger = {<Button style={guideButtonStyle}>이용안내 ></Button>} />
                    </div>
                </div>
                <Grid style={{marginTop: '1px'}}>
                    <Grid.Row columns={3}>
                        <Grid.Column textAlign="center">

                            <Image style={serviceIntroImageStyle} src='http://localhost:8000/media/linku_intro_image_1.png' verticalAlign="middle"/>
                            <div style={serviceIntroHeaderStyle}>
                                대학생
                            </div>
                            <div style={{marginTop: '30px'}}>
                                대학생 인증을 거친 사람만<br/>
                                링쿠에 가입하여 모임에 참석할 수 있습니다.<br/>
                                같은 대학을 벗어나 다른 대학, 다른 전공의 <br/>
                                친구들과 많은 이야기를 나눠보세요. <br/>
                            </div>

                        </Grid.Column>
                        <Grid.Column textAlign="center">

                            <Image style={serviceIntroImageStyle} src='http://localhost:8000/media/linku_intro_image_2.png' verticalAlign="middle"/>
                            <div style={serviceIntroHeaderStyle}>
                                놀기
                            </div>
                            <div style={{marginTop: '30px'}}>
                                취업과 과제에 치이는 대학생의 삶<br/>
                                지금 아니면 언제 놀 수 있을까요?<br/>
                                누구와? 어떻게 놀아야 할지 모르겠다면?<br/>
                                다양한 테마별 모임을 골라서 같이 놀아요<br/>
                            </div>
                        </Grid.Column>
                        <Grid.Column textAlign="center">

                            <Image style={serviceIntroImageStyle} src='http://localhost:8000/media/linku_intro_image_3.png' verticalAlign="middle"/>
                            <div style={serviceIntroHeaderStyle}>
                                친구
                            </div>
                            <div style={{marginTop: '30px'}}>
                                미팅, 소개팅은 너무 부담스럽고<br/>
                                동아리는 매주 가야하니까 귀찮잖아요<br/>
                                새로운 친구를 만나는 마음으로 부담없이 오세요<br/>
                                혹시 좋은 사람이있르지 누가 알아요? ;)<br/>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

        );
    }

}

export default IntroOfLinkU;

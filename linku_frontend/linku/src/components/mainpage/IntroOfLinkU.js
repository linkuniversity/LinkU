import React, {Component} from 'react';
import {Container, Grid, Card, Image} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/Common';

class IntroOfLinkU extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let promotionWordStyle = {
            width: "100%",
            textAlign: "center",
        };


        let serviceIntroImageStyle = {
            marginTop: "25%",
            marginBottom: "10%"
        }

        let serviceIntroHeaderStyle={
            marginBottom: "10%",
        }

        return (

            <Container>
                <div style={promotionWordStyle}>
                    링쿠는 대학생들이 만나서<br/>
                    어쩌구 저쩌구 하는 <br/>
                    링쿠에 대한 서비스 소개가 들어갑니다. <a href="https://twpower.github.io">이용안내 ></a>
                </div>
                <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column textAlign="center">

                            <Image style={serviceIntroImageStyle} src='http://localhost:8000/media/linku_intro_image_1.png' verticalAlign="middle"/>
                            <div style={serviceIntroHeaderStyle}>
                                대학생
                            </div>
                            <div>
                                대학생 인증을 거친 사람만<br/>
                                링쿠에 가입하여 모임에 참석할 수 있습니다.<br/>
                                같은 대학을 벗어나 다른 대학, 다른 전공의 <br/>
                                친구들과 많은 이야기를 나눠보세요. <br/>
                            </div>

                        </Grid.Column>
                        <Grid.Column textAlign="center">

                            <Image style={serviceIntroImageStyle} src='http://localhost:8000/media/linku_intro_image_2.png' verticalAlign="middle"/>
                            <div style={serviceIntroHeaderStyle}>
                                대학생
                            </div>
                            <div>
                                대학생 인증을 거친 사람만<br/>
                                링쿠에 가입하여 모임에 참석할 수 있습니다.<br/>
                                같은 대학을 벗어나 다른 대학, 다른 전공의 <br/>
                                친구들과 많은 이야기를 나눠보세요. <br/>
                            </div>
                        </Grid.Column>
                        <Grid.Column textAlign="center">

                            <Image style={serviceIntroImageStyle} src='http://localhost:8000/media/linku_intro_image_3.png' verticalAlign="middle"/>
                            <div style={serviceIntroHeaderStyle}>
                                대학생
                            </div>
                            <div>
                                대학생 인증을 거친 사람만<br/>
                                링쿠에 가입하여 모임에 참석할 수 있습니다.<br/>
                                같은 대학을 벗어나 다른 대학, 다른 전공의 <br/>
                                친구들과 많은 이야기를 나눠보세요. <br/>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

        );
    }

}

export default IntroOfLinkU;

import React, {Component} from 'react';
import {Container, Label, Embed} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/Common';

class IntroVideo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let promotionWordStyle = {
            width: "100%",
            textAlign: "center",
            marginTop: "3%",
            marginBottom: "3%"
        };

        let videoStyle = {
            marginRight: "10%",
            marginLeft: "10%",
            marginTop: "5%",
            marginBottom: "5%"
        }

        return (
            <Container>

                <div style={promotionWordStyle}>
                    노는 것도 배워야 한다.<br/>
                    잘 노는 사람의 잘 노는 큐레이션 서비스
                </div>
                <Embed style={videoStyle} id='8A2t_tAjMz8' source='youtube'/>
                <div style={promotionWordStyle}>
                    전공, 학력, 성별을 불문하고<br/>
                    함께하고 싶다면 지금 신청하세요.
                </div>
            </Container>
        );
    }
}

export default IntroVideo;

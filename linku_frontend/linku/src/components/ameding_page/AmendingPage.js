import React, {Component} from 'react';
import {Container, Image, Grid} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import LinkUHeader from '../mainpage/LinkUHeader';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';

class AmendingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Grid verticalAlign="middle" stretched centered>
                <Container>
                    <div>
                        <LinkUHeader/>
                        <Image style={{marginTop: "20px"}}  src={DEFAULT_REQUEST_URL+'/media/amending.png'} centered />
                        <div>
                            <p style={{fontSize: "17px", color: "#60a2d9", textAlign: "center", marginTop:"20px"}}>
                            서버 이전 작업중이에요<br/>
                            더 멋진 모습으로 찾아올게요 :)
                            </p>
                        </div>
                    </div>
                </Container>
            </Grid>
        );
    }
}

export default AmendingPage;

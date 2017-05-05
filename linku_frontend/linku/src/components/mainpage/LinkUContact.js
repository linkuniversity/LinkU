import React from 'react';
import {Container, Grid, Image, Header} from 'semantic-ui-react';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';

const containerStyle = {
    marginTop: '5%',
    marginBottom: '5%',
    paddingLeft: '20px',
    paddingRight: '20px'
};

const LinkUContact = () => (
    <Container style={containerStyle}>
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column width={7}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Image style={{width: "80px", height: "60px"}} src={DEFAULT_REQUEST_URL+'/media/logo_bottom.png'}/>
                        </Grid.Column>
                    </Grid.Row>
                    <p style={{marginTop: "10px"}}>
                    대학생이 놀고 웃고 친해질 수 있는 곳 링쿠<br/>
                    대학생들의 새로운 문화를 선도합니다
                    </p>
                </Grid.Column>
                <Grid.Column>
                    <Header style={{color:'#5fa1d7'}}>문의</Header>
                    <Image src={DEFAULT_REQUEST_URL + '/media/facebook_icon.png'} href="https://www.facebook.com/LinkUandU/"/>
                    <Image style={{marginLeft: '20px'}} src={DEFAULT_REQUEST_URL + '/media/kakaotalk_icon.png'} href="http://plus.kakao.com/home/@linku"/><br/>
                    <h5 style={{marginTop: '10px'}}>team.uniculture@gmail.com</h5>
                    취소, 환불, 모임 날짜 변경, 문의사항은 카톡 혹은 메일로 연락 주시면됩니다.
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
);

export default LinkUContact;

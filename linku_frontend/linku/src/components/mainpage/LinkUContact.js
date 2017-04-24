import React from 'react';
import {Container, Grid, Image, Header} from 'semantic-ui-react';

const containerStyle = {
    marginTop: '5%',
    marginBottom: '5%',
    paddingLeft: '20px',
    paddingRight: '20px'
};
const buttonStyle = {
    marginRight: '10px',
    border: '0',
    color: '#5fa1d7',
    backgroundColor: '#FFFFFF',
    fontSize: '17px',
};

const LinkUContact = () => (
    <Container style={containerStyle}>
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column width={7}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Image style={{width: "80px", height: "60px"}} src='http://localhost:8000/media/logo_bottom.png'/>
                        </Grid.Column>
                        <Grid.Column style={{marginTop: '15px', marginBottom: '10px'}}>
                            <button style={buttonStyle}>이용안내</button>
                            <button style={buttonStyle}>리얼후기</button>
                        </Grid.Column>
                    </Grid.Row>
                    대학생이 놀고 웃고 친해질 수 있는 곳 링쿠<br/>
                    대학생들의 새로운 문화를 선도합니다
                </Grid.Column>
                <Grid.Column float='right'>
                    <Header style={{color:'#5fa1d7'}}>문의</Header>
                    <Image src="http://localhost:8000/media/facebook_icon.png" href="https://www.facebook.com/LinkUandU/"/>
                    <Image style={{marginLeft: '20px'}} src="http://localhost:8000/media/kakaotalk_icon.png" href="http://plus.kakao.com/home/@linku"/><br/>
                    <h5 style={{marginTop: '10px'}}>team.uniculture@gmail.com</h5>
                    취소, 환불, 모임 날짜 변경 혹은 문의사항 있으시면 여기로 연락주시면 됩니다.
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
);

export default LinkUContact;
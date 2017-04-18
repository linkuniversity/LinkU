import React from 'react';
import {Container, Grid, Image} from 'semantic-ui-react'

const Review = () => {
    const datas = [
        {
            title:"\"재미없는 제 일상의 활력이 되었어요\"",
            content:"저 진짜 링쿠덕분에 즐거운 하루보냈어요. 저 또 참가할 수 있으면 하고 싶을 정도로 진짜 좋은 경험이었고 재미없는 제 일상의 활력이 되었어요 행복했고.. 부담스러운 자리 못참여하는 사람인데 이런 자리생겨서 진짜 딱 좋았어요. 또 참가할 수 있으면 하고 싶어요!! 좋은 기회 만들어줘서 너무 너무 고마워요! >.<  _ 이** 22 여"
        },
        {
            title:"\"소중한 인연 만들고 싶으신 분들이라면 링쿠강추합니다!!별 다섯개!\"",
            content:"처음에 메뉴 고르는 데 있어서 담합이 안 돼서 우왕좌왕했지만ㅋㅋㅋㅋ 그 마저도 친해지는데 한 몫 했던 것 같아요. 새로운 인연을 만들고 싶어하는 분이나, 성격이 유쾌하고 friendly하신 분들이 오는 모임이다 보니 친해지는 게 어렵지 않았어요. 소중한 인연 만들고 싶은신 분들이라면 링쿠강추합니다!! 별 다섯개!  _  김** 22 여"
        },
        {
            title:"\"기대와 달리 성비가 매우 잘 맞았어요\"",
            content:"아무래도 미팅, 소개팅 이렇게 연애 부담 갖고 나오는 게 아니라서 남녀불문하고 다들 편하게 나오는 것 같아요. 모이기 전에 오픈카톡을 하는데 그때 대화하면서 이상한 사람들은 웬만하면 걸러질 것 같더라구요. 또 인서울 대학생 위주로 모이다보니까 이상한 사람들은 거의 없어요. 다양한 사람들이랑 재밌게 놀고 싶으면 한번 해보세요. 저는 2차까지 술먹고 완전 재밌게 놀았어요 완전 강추해요!   _  임** 26 남"
        },
    ];

    const titleStyle = {
        color:'#5fa1d7',
        fontSize: 20
    };

    const contentStyle = {

    }

    const mapToComponent = (datas) => {
        return datas.map( ({title,content}, i) => (
            <Grid style={{marginTop: '50px', marginLeft: '2px'}} textAlign="left" key={i}>
                <Grid.Row textAlign="left" style={titleStyle}>
                    {title}
                </Grid.Row>
                <Grid.Row textAlign="left" style={contentStyle}>
                    {content}
                </Grid.Row>
            </Grid>
        ));
    }
    return (
        <Container style={{marginTop: '72px'}}>
            <Grid textAlign="left">
                <Grid.Column width={8}>
                    <Image src='http://localhost:8000/media/review.png' verticalAlign="middle"/>
                </Grid.Column>
                <Grid.Column width={8}>

                        <div style={{fontSize: '20pt', color: '#5fa1d7', marginTop: '112px'}}>
                        링쿠 참여자들이 들려주는 리얼 생생후기
                        </div>

                    {mapToComponent(datas)}

                </Grid.Column>
            </Grid>
        </Container>
    );
}

export default Review;

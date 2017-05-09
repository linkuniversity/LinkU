import React from 'react';
import {Header, Container, Grid, Image} from 'semantic-ui-react';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';

const Review = () => {
    const datas = [
        {
            title:"\"좋은 사람들과 함께하는 밥 모임\"",
            content:"동아리를 정기적으로 활동하기에는 바쁘고, 여러가지 음식을 먹어보고 싶은데 친구들과 약속잡는게 힘든 사람을 위해 추천합니당!! 처음에 만나기 전에 걱정했는데 좋은사람들과 맛있는 식사 하고 와서 좋은시간이었어요ㅎㅎㅎ저희팀은 밥먹고 2차도 다녀왔어요! 이렇게 맛집도 가고 좋은 사람들도 더 알게 되서 즐거운 시간이었습니다 :) _ 최** 24 여"
        },
        {
            title:"\"소중한 인연 만들고 싶으신 분들이라면 링쿠 강추합니다!!별 다섯개!\"",
            content:"처음에 메뉴 고르는 데 있어서 단합이 안 돼서 우왕좌왕했지만ㅋㅋㅋㅋ 그 마저도 친해지는데 한 몫 했던 것 같아요. 새로운 인연을 만들고 싶어하는 분이나, 성격이 유쾌하고 다들 착하신 분들이 오는 모임이다 보니 친해지는 게 어렵지 않았어요. 소중한 인연 만들고 싶은신 분들이라면 링쿠강추합니다!! 별 다섯개! _ 김** 22 여"
        },
        {
            title:"\"재미없는 제 일상의 활력이 되었어요\"",
            content:"링쿠와서 정말 즐겁게 잘 놀았어요! 다음에 다시 할 수 있으면 또 하고 싶을 정도로 즐거웠고 딱 피곤하지 않을 정도로 놀아서 심심한 주말 마무리 잘 한 것 같아요ㅎㅎ 성격이 적극적이지 않아서 부담스러운 자리일 수도 있었는데 모임장님이 대화 잘 이끌어가셔서 즐겁게 이야기하고 새로운 친구들 만나고 친해져서 좋았어요. 다음에도 계속 링쿠에서 다양한 사람들과 좋은 자리 가지고 싶어요!!! _ 윤** 23 남"
        },
    ];

    const titleStyle = {
        color:'#5fa1d7',
        fontSize: 20,
    };

    const contentStyle = {
        fontSize: 16,
        lineHeight: '27px',
    };

    const promotionWordStyle = {
        width: "100%",
        textAlign: "center",
        fontSize: '20pt',
        lineHeight: '40px',
        marginTop: "40px"
    };

    const mapToComponent = (datas) => {
        return datas.map( ({title,content}, i) => (
            <Grid style={{marginTop: '50px', marginLeft: '2px', marginRight: '2px'}} textAlign="left" key={i}>
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
        <Container style={{marginTop: '52px', padding: '12px'}}>
            <Grid textAlign="left">
                <Grid.Column mobile={16} computer={8}>

                    <Header style={{fontSize: '22pt', color: '#5fa1d7', paddingTop: '30px'}}>
                        링쿠 참여자들이 들려주는 리얼 생생후기
                    </Header>

                    {mapToComponent(datas)}

                </Grid.Column>
                <Grid.Column textAlign="center" mobile={16} computer={8}>
                    <Image src={DEFAULT_REQUEST_URL+'/media/review_image.png'} verticalAlign="middle"/>
                </Grid.Column>
            </Grid>

            <div style={promotionWordStyle}>
                더 많은 후기가 궁금하다면?<br/>
            <a href="https://goo.gl/xSzaUY">링쿠 페이스북으로 이동 > </a>
            </div>

        </Container>
    );
}

export default Review;

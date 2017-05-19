import React from 'react';
import {Header, Container, Grid, Image} from 'semantic-ui-react';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';

const Review = () => {
    const datas = [
        {
            title:"Q. 안녕하세요~ 링쿠에 참여해주셔서 감사합니다 :) 링쿠에 처음 참여하셨는데 혹시 어색하지는 않으셨나요?",
            content:"A. 간단하게 자기소개를 톡에서 했는데, 다들 성격이 좀 맞는 것 같아서 전체분위기가 좋았어요. 메뉴를 정할때는 딱히 어색했는지 모르겠어요.  \
            출신 지역이 세분이 대구에서 오셨고.. 한 분은 창원이고… 그런게 잘맞아서 재미있었습니다. (사투리로 대답중)"
        },
        {
            title:"Q. 재미있는 분위기에 2차까지 다녀오셨다 들었는데 이야기 좀 들려주세요!",
            content:"A. 이야기하다보니 밥은 다먹고 재미있어서 할 얘기는 더 있고 했는데 2차를 갈까 하던 중에 문자가 오더라구요.   \
            타이밍이 딱 그 상황에 2차 추천 문자가 너무 자연스럽게 와서 다들 소오름~ 막 그랬어요.   \
            문자를 보긴 했는데 그 주변을 잘아시는 분이 계셔서 그분께서 잘 아시는 곳으로 갔어요."
        },
        {
            title:"Q. 2차가 끝난 뒤에는 다들 어떻게 하셨나요? 그대로 다들 집가고 헤어지셨나요 뒤에 뭔가 다른 활동이 있으셨나요?",
            content:"A. 막차까지 소맥마시고 분위기가 재미있어서 다 끝나고 우리끼리 펜션가자고… 펜션잡고 있어요 (웃음)  \
            애들이 웃기고 각자 에피소드가 많아서 다른 모임으로 이어질 것 같아요."
        },
        {
            title: "Q. 모임 구성원에 대해서는 불편한 점 없으셨나요?",
            content: "A. 대놓고 미팅 이성 뭐 이런게 아니라서 부담은 없고 알아서 비율이 서로 안부담스러울 정도로 어느정도 있으니까 좋았습니다. \
            수동적인 참가자들도 있는데 적극적인 분들도 적절히 잘 섞여있으셔서 분위기가 좋았던것 같아요.   \
            대놓고 너무 미팅으로 안밀어넣어서 심적으로 편했습니다. 막 타 서비스들처럼 ‘연인을 만들어가세요~’ 대놓고 이렇게 안해서 좋았어요. (웃음)"
        },
        {
            title:"Q. 직접 경험하신 모임의 전반적인 분위기는 어떠셨나요?",
            content:"A. 수동적이고 내성적인 분들도 다 열려있는 느낌인게 일단은 (보증금내고 다들) 나왔으니까 다 열려있는 듯한 기분이에요.  \
            일단 부담이 없었고 재미있었어요. 후기들을 봤는데 동아리 학생회…같은 이런건 의도적인 친목 학생회땜에 솔직한 마음과는 다르게 ‘친해져야지’ 하는 부담감이 있는데  \
            이런 모임은 아예 모르는 사람들이 만나고싶어서 그 의도로 온거니까 더 부담이 없어요. ‘안맞으면 담에 안보면 되지’ 같이.. 이런 생각으로 친하면 말이 잘통하니까 또 만나면 되니까요."
        },
        {
            title:"Q. 참여해주시고 또 이렇게 인터뷰까지 응해주셔서 감사합니다. 다음에 또 오실거죠? (웃음)",
            content:"A. 다음에 꼭 참여하고 싶은데 요즘 바쁜 일이 생겨서 이것만 끝나면요. 조만간 시간나면 신청할거에요. 또 좋은 모임 만들어지면 알려주세요!"
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
        marginTop: "50px"
    };

    const mapToComponent = (datas) => {
        return datas.map( ({title,content}, i) => (
            <Grid style={{marginTop: '10px', marginLeft: '2px', marginRight: '2px'}} textAlign="left" key={i}>
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
                        링쿠 참여자가 들려주는 생생인터뷰<br />
                        (이종현, 25, 남)
                    </Header>
                    {mapToComponent(datas)}
                </Grid.Column>
                <Grid.Column textAlign="center" mobile={16} computer={8}>
                    <Image src={DEFAULT_REQUEST_URL+'/media/review_image.png'} verticalAlign="middle"/>
                </Grid.Column>
            </Grid>

            <div style={promotionWordStyle}>
                더 많은 후기가 궁금하다면? LinkU 페이스북에서 확인하세요<br/>
                <a href="https://goo.gl/xSzaUY">링쿠 페이스북으로 이동 ></a>
            </div>

        </Container>
    );
}

export default Review;

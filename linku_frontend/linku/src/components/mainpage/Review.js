import React from 'react';
import {Container, Grid, Image} from 'semantic-ui-react'

const Review = () => {
    const datas = [
        {
            title:"재미없는 제 일상의 활력이 되었어요",
            content:"설명설명설명"
        },
        {
            title:"재미없는 제 일상의 활력이 되었어요",
            content:"설명설명설명"
        },
        {
            title:"재미없는 제 일상의 활력이 되었어요",
            content:"설명설명설명"
        },
    ];

    const titleStyle = {
        color:"#0000ff",
        fontSize:30
    };

    const contentStyle = {

    }

    const mapToComponent = (datas) => {
        return datas.map( ({title,content}, i) => (
            <Grid textAlign="center" key={i}>
                <Grid.Row textAlign="center" style={titleStyle}>
                    {title}
                </Grid.Row>
                <Grid.Row textAlign="center" style={contentStyle}>
                    {content}
                </Grid.Row>
            </Grid>
        ));
    }
    return (
        <Container>
            <Grid textAlign="center">
                <Grid.Column width={8}>
                    <Image src='http://localhost:8000/media/review.png' verticalAlign="middle"/>
                </Grid.Column>
                <Grid.Column width={8}>
                    {mapToComponent(datas)}
                </Grid.Column>
            </Grid>
        </Container>
    );
}

export default Review;

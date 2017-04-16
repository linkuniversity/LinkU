import React, {Component} from 'react';
import {Container, Grid, Image} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { fetchStatisticsInfos } from '../../actions/Statistics';

class Statistics extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchStatisticsInfos();
    }
    render() {
        const containerStyle = {
            height:'300px',
            backgroundImage: 'url("http://localhost:8000/media/test_image.jpg")'
        };
        const cardStyle = {
            width:'200px',
            align:'center'
        };
        const mapToComponent = (datas) => {
            return datas.map( (data, i) => {
                return (
                    <Grid key = {i} centered>
                        <Grid.Column width = {3} textAlign="center">
                            <Image style={cardStyle} src="http://localhost:8000/media/keyword_1.png" />
                            신청한 사람 수<br />
                            {data.num_of_applier}명
                        </Grid.Column>
                        <Grid.Column width = {3} textAlign="center">
                            <Image style={cardStyle} src="http://localhost:8000/media/keyword_2.png" />
                            성사된 모임 수<br />
                            {data.created_meeting}명
                        </Grid.Column>
                        <Grid.Column width = {3} textAlign="center">
                            <Image style={cardStyle} src="http://localhost:8000/media/keyword_3.png" />
                            새롭게 만난 사람의 수<br />
                            {data.new_meet_person}명
                        </Grid.Column>
                    </Grid>
                );
            });
        }
        return (
            <Container style={containerStyle}>
                {mapToComponent(this.props.statistics_infos.data ? this.props.statistics_infos.data : [])}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fetching : state.statisticsInfos.fetching,
        statistics_infos : state.statisticsInfos.statistics_infos
    }
};

export default connect(mapStateToProps,{
    fetchStatisticsInfos
})(Statistics);

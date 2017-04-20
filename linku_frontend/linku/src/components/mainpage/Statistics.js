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
            height:'500px',
            backgroundImage: 'url("http://localhost:8000/media/container_background.jpg")',
            marginTop: '100px',
            width: '100%'
        };
        const cardStyle = {
            width:'200px',
            align:'center',
        };
        const middleCardStyle = {
            width:'200px',
            align:'center',
        };

        const statisticsNumberStyle = {
            color : '#FFFFFF',
            marginTop : '35px',
            fontSize: '20pt'
        };

        const statisticsCategoryStyle = {
            color : '#FFFFFF',
            marginTop : '20px',
            fontSize : '20pt'
        };


        const mapToComponent = (datas) => {
            return datas.map( (data, i) => {
                return (
                    <div style={{height: '100%'}}>
                        <Grid style={{height: '100%'}} key = {i} centered verticalAlign="middle">
                            <Grid.Column width = {4} textAlign="center">
                                <Image style={cardStyle} src="http://localhost:8000/media/num_of_appliers.png" centered />
                                    <div style={statisticsNumberStyle}>{data.num_of_applier}</div>
                                    <div style={statisticsCategoryStyle}>지금까지 신청한 사람</div>
                            </Grid.Column>
                            <Grid.Column width = {4} textAlign="center">
                                <Image style={middleCardStyle} src="http://localhost:8000/media/num_of_meetings.png" centered/>
                                    <div style={statisticsNumberStyle}>{data.created_meeting}</div>
                                    <div style={statisticsCategoryStyle}>진행된 모임 수</div>
                            </Grid.Column>
                            <Grid.Column width = {4} textAlign="center">
                                <Image style={cardStyle} src="http://localhost:8000/media/num_of_new_faces.png" centered/>
                                    <div style={statisticsNumberStyle}>{data.new_meet_person}</div>
                                    <div style={statisticsCategoryStyle}>새롭게 만난 사람 수</div>
                            </Grid.Column>
                        </Grid>
                    </div>
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

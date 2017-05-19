import React from 'react';
import {Container, Grid, Image} from 'semantic-ui-react'
import { connect } from 'react-redux';

import {DEFAULT_REQUEST_URL} from '../utils/RequestUrlSetting';

class Statistics extends React.Component{
    render() {
        const containerStyle = {
            backgroundImage: 'url('+ DEFAULT_REQUEST_URL +'/media/container_background.jpg)',
            marginTop: '60px',
            width: '100%',
            padding: '50px',
        };
        const cardStyle = {
            width:'200px',
            align:'center',
            marginTop: "30px",
            marginBottom: "30px",
        };
        const middleCardStyle = {
            width:'200px',
            align:'center',
            marginTop: "30px",
            marginBottom: "30px",
        };

        return (
            <Container style={containerStyle}>
                <div style={{height:'100%'}} >
                    <Grid style={{height:'100%'}} centered verticalAlign="middle">
                        <Grid.Column mobile={12} computer={4} textAlign="center">
                            <Image style={cardStyle} src={DEFAULT_REQUEST_URL + '/media/statistics_num_of_appliers.png'} centered />
                        </Grid.Column>
                        <Grid.Column mobile={12} computer={4} textAlign="center">
                            <Image style={middleCardStyle} src={DEFAULT_REQUEST_URL + '/media/statistics_num_of_meetings.png'} centered/>
                        </Grid.Column>
                        <Grid.Column mobile={12} computer={4} textAlign="center">
                            <Image style={cardStyle} src={DEFAULT_REQUEST_URL + '/media/statistics_num_of_newly_met.png'} centered/>
                        </Grid.Column>
                    </Grid>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
};

export default connect(mapStateToProps)(Statistics);

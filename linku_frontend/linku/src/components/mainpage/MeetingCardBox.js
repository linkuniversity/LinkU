import React from 'react';
import { Container } from 'semantic-ui-react'
import MeetingCard from './MeetingCard';
import jQuery from 'jquery';
import CategoriesInMainPage from './CategoriesInMainPage';
import {fetchMeetingCardInfos} from '../../actions/meetingcard';

import { connect } from 'react-redux';

class MeetingCardBox extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchMeetingCardInfos();
    }

    render() {
        const mapToComponents = (data) => {
            return data.map((meeting_infos, i) => {
                return ( <MeetingCard meetingInfo = { meeting_infos } key = {i}/>);
            });
        };

        let containerStyle = {
            marginTop: '67px',
        }

        let receivedData;
        return (
            <Container style={containerStyle}>
                <br/>
                {mapToComponents(this.props.all_meeting_infos.data ? this.props.all_meeting_infos.data : [])}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fetching: state.meetingCardInfos.fetching,
        all_meeting_infos: state.meetingCardInfos.meeting_infos
    };
};

export default connect(mapStateToProps, {
  fetchMeetingCardInfos
})(MeetingCardBox);

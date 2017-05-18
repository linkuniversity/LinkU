import React from 'react';
import { Container } from 'semantic-ui-react'
import MeetingCard from './MeetingCard';
import {fetchMeetingCardInfos} from '../../actions/meetingcard';

import { connect } from 'react-redux';

class MeetingCardBox extends React.Component {
    componentDidMount() {
        this.props.fetchMeetingCardInfos();
    }

    render() {
        const mapToComponents = (meeting_infos) => {
            return meeting_infos.map((meeting_info, i) => {
                return ( <MeetingCard meetingInfo={ meeting_info[0].data } key={i}/>);
            });
        };

        let containerStyle = {
            width: '100%',
            backgroundColor: '#F8F8F9',
        };

        return (
            <Container style={containerStyle}>
                <br/>
                {mapToComponents(this.props.all_meeting_infos ? this.props.all_meeting_infos : [])}
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

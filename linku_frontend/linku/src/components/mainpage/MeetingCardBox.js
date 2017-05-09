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
        const mapToComponents = (data) => {
            return data.map((meeting_infos, i) => {
                if(i===0)
                    return ( <MeetingCard meetingInfo={ meeting_infos } key={i}/>);
            });
        };

        let containerStyle = {
            marginTop: '30px',
            width: '100%',
            backgroundColor: '#F8F8F9',
        };

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

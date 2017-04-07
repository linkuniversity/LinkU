import React from 'react';
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

        let receivedData;
        let boxStyle = {
            maxWidth: '1500px',
        };
        return (
            <div style= { boxStyle }>
                <CategoriesInMainPage />
                {mapToComponents(this.props.all_meeting_infos.data ? this.props.all_meeting_infos.data : [])}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fetching: state.meetingCardInfos.fetching,
        all_meeting_infos: state.meetingCardInfos.meeting_infos
    }
};

export default connect(mapStateToProps, {
  fetchMeetingCardInfos
})(MeetingCardBox);

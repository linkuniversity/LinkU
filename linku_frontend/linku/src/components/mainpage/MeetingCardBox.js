import React from 'react';
import MeetingCard from './MeetingCard';
import jQuery from 'jquery';
import CategoriesInMainPage from './CategoriesInMainPage';
import * as infos from '../../axios/meeting';

export default class MeetingCardBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            meeting_infos : []
        };
        this._fetchInfosFromApi = this._fetchInfosFromApi.bind(this);
    }
    componentWillMount() {
        this._fetchInfosFromApi();
    }

    _fetchInfosFromApi = async (postId) => {
        const info = await Promise.all([
            infos.getMeetingInfos()
        ]);
        this.setState({
            ...this.state,
            meeting_infos : info
        });
    }

    render() {
        const mapToComponents = (data) => {
            return data.map((meeting_infos, i) => {
                return ( <MeetingCard meetingInfo = { meeting_infos } key = {i}/>);
            });
        };

        let boxStyle = {
            maxWidth: '1500px',
        };
        return (
            <div style= { boxStyle }>
                <CategoriesInMainPage />
            {mapToComponents(this.state.meeting_infos)}
            </div>
        );
    }
}

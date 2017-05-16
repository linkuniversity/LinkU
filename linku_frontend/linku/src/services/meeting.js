import axios from 'axios';

import {DEFAULT_REQUEST_URL} from '../components/utils/RequestUrlSetting';

export function getCurrentMeetingInfos(){
    return axios.get(DEFAULT_REQUEST_URL + '/meetings/current/');
}

export function getPrearrangedMeetingInfos(){
    return axios.get(DEFAULT_REQUEST_URL + '/meetings/prearranged/');
}

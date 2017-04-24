import axios from 'axios';

import {DEFAULT_REQUEST_URL} from '../components/utils/RequestUrlSetting';

export function getMeetingInfos(){
    return axios.get(DEFAULT_REQUEST_URL + '/meetings/');
}

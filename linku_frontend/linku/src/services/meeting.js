import axios from 'axios';

export function getMeetingInfos(){
    return axios.get('http://127.0.0.1:8000/meetings/');
}

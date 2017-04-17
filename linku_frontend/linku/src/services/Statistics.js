import axios from 'axios';

export function getStatisticsInfos(){
    return axios.get('http://127.0.0.1:8000/statistics/');
}

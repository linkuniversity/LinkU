import axios from 'axios';

import {DEFAULT_REQUEST_URL} from '../components/utils/RequestUrlSetting';

export function login(username, password){
    return axios.post(DEFAULT_REQUEST_URL + '/login/', {
        "username": username,
        "password" : password
    }).catch((e) => {
        console.log(e.response.data);
    });
}

export function user(token) {
    if(token == undefined) {
        console.log('token is undefined');
        return;
    }

    const config = {
        headers: { 'Authorization': 'Token '+token }
    };

    return axios.get(DEFAULT_REQUEST_URL + '/user/', config).catch((e) => {
        console.log(e.response.data);
    });
}


export function participated_dates(token) {
    if(token == undefined) {
        console.log('token is undefined');
        return;
    }

    const config = {
        headers: { 'Authorization': 'Token '+token }
    };

    return axios.get(DEFAULT_REQUEST_URL + '/participated-dates/', config).catch((e) => {
        console.log(e.response.data);
    });
}

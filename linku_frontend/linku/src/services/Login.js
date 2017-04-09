import axios from 'axios';

export function login(id, password){
    return axios.post('http://127.0.0.1:8000/login/',
    {
        "username": id,
        "password" : password
    })
    .catch((e) => {
        console.log(e.response.data);
    });
}

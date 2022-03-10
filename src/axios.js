import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'true';
axios.defaults.headers.crossorigin= true;
axios.defaults.headers.withCredentials = true;
axios.defaults.headers.common.mode= 'no-cors';
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

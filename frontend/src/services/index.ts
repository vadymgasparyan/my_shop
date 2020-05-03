import axios from 'axios';

const restApi = axios.create({baseURL: '/api'});

export default restApi;
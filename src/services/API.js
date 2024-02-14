import axios from 'axios';

const APIKit = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000,
});

export default APIKit;

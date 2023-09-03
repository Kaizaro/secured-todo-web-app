import axios from 'axios';

const defaultPort = '3001';
const baseURL = `http://localhost:${defaultPort}`;

export const fetchAPI = axios.create({
  baseURL,
  timeout: 1000,
});

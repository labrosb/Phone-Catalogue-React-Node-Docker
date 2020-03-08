import axios from 'axios';

const apiHost = process.env.REACT_APP_API_HOST;

export default axios.create({
  baseURL: apiHost,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Content-Type': import.meta.env.VITE_CONTENT_TYPE
  }
});

export default instance;

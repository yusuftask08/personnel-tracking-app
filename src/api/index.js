import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63f896036978b1f9105c9356.mockapi.io/employees', 
});

export default instance;

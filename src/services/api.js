import axios from 'axios';


export const api = axios.create({
  baseURL: "https://rocketmovies-api-0qj3.onrender.com"
});
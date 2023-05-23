import axios from "axios";

const baseURL = "https://movienew.cybersoft.edu.vn/api";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MiIsIkhldEhhblN0cmluZyI6IjMwLzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NjAzMjAwMDAwMCIsIm5iZiI6MTY2NzA2MjgwMCwiZXhwIjoxNjk2MTc5NjAwfQ.i6JqYnGkwyHl6dkDHnjFWbPfBEl2l4SXAp4r7h9Ecpw";
const maNhom = "GP09";

export const requestor = axios.create({
  baseURL,
  headers: {
    TokenCybersoft: token,
  },
  params: {
    maNhom,
  },
});

export const requestorUser = axios.create({
  baseURL,
  headers: {
    TokenCybersoft: token,
  },
  params: {
    maNhom,
  },
});

requestor.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${ localStorage.getItem("token") }`;
  return config;
});

requestorUser.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${ localStorage.getItem("token") }`;
  return config;
});

export default requestor;

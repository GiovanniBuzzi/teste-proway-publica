import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3334",
  headers: {
    'Content-type': 'application/json',
    'Authorization': sessionStorage.getItem('@token_jwt')
  }
});

export default api;

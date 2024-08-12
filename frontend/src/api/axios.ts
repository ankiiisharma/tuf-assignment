import axios from "axios";

const api = axios.create({
  baseURL: "https://backendtuf-7jsm.onrender.com",
  timeout: 10000,
});

export default api;

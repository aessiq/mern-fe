import axios from "axios";
import { baseUrl } from "./Tools";

const instance = axios.create({
  baseURL: baseUrl,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem("token");
  return config;
});

export default instance;

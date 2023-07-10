import axios from "axios";

axios.defaults.baseURL = "https://gw2forumapi-7625ca6fa938.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
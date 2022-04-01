import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://locate-auto-engineer.herokuapp.com/api/",
});

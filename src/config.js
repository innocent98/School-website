import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "https://locate-auto-engineer.herokuapp.com/api/",
  proxy: "http://localhost:5000/api/"
});

export const REACT_APP_PAYSTACK = "pk_test_3b6d95b90c0f95109de8efccf18708980c5fdccf";

/** @format */
import axios from "axios";

export const tryLogin = (email, password) => {
  return axios.post("http://3.133.85.122:9090/api/v1/admin/login", {
    email,
    password,
  });
};

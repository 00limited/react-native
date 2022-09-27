import axios from "axios";

export const API = axios.create({
  baseURL:
    "https://api.kontenbase.com/query/api/v1/1ca8c461-715d-4cb6-b0e1-560cf0ec35a4/",
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer $(token)`;
  } else {
    delete API.defaults.headers.common[Authorization];
  }
};

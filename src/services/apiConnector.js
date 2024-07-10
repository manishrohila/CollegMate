import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, config = {}) => {
  return axiosInstance({
    method,
    url,
    data: bodyData || null,
    ...config,
  });
};
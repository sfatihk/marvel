import { create } from "apisauce";

const api = create({
  baseURL: `${process.env.REACT_APP_MARVEL_SERVER_URL}`,
  headers: {
    Accept: `application/json`,
  },
});

/* 
api.axiosInstance.interceptors.request.use((config) => {
  const method = config!.method!.toUpperCase();
  if (method === "PUT" || method === "DELETE" || method === "PATCH") {
    config.headers = {
      ...config.headers,
      "X-HTTP-Method-Override": method,
    };
    config.method = "post";
    config.params = {
      ...config.params,
      _method: method,
    };
  }
  return config;
}); */

export default api;

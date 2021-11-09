import { API } from "@helpers";
import { API_ENDPOINTS } from "@config";

export function login(data, accessToken) {
  return API.request({
    method: "post",
    url: `${API_ENDPOINTS.LOGIN}`,
    data,
  }).then(response => response);
}

export function register(data, accessToken) {
  return API.request({
    method: "post",
    url: `${API_ENDPOINTS.REGISTER}`,
    headers: {
      // "Content-Type": "multipart/form-data",
      "x-api-key": "UBjBoE9HTzaMSybJW1kgRaQi5tMQrmPT7m6h7sE0",
    },
    data,
  }).then(response => response);
}

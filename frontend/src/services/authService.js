import http from "./httpService";

const apiEndpoint = "/users";

export function login(username, password) {
  return http.post(`${apiEndpoint}/login`, {username, password});
}

export function logout() {
  return http.get(`${apiEndpoint}/logout`);
}
export function register(username, email, password) {
  return http.post(`${apiEndpoint}/register`, {username, email, password});
}

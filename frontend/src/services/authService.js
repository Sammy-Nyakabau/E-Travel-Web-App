import http from "./httpService";

const apiEndpoint = "/users";

export function login(username, password) {
  return http.post(`${apiEndpoint}/login`, {username, password});
}

export function googleLogin() {
  return http.get(`${apiEndpoint}/auth/google`);
}

export function logout() {
  return http.get(`${apiEndpoint}/logout`);
}
export function register(username, password) {
  return http.post(`${apiEndpoint}/register`, {username, password});
}

import http from "./httpService";

const apiEndpoint = "/users";

const config = {
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
};

export function updateUser(id, username, email, address, gender, phoneNumber) {
  return http.put(`${apiEndpoint}/${id}`, {
    username,
    email,
    address,
    gender,
    phoneNumber,
  });
}

export function getLoggedInUser() {
  return http.get(`${apiEndpoint}/success`, config);
}
export function getUser(id) {
  return http.get(`${apiEndpoint}/one/${id}`);
}

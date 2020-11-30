import http from "./httpService";

const apiEndpoint = "/users";

export function updateUser(id, username, email, address, gender, phoneNumber) {
  return http.put(`${apiEndpoint}/${id}`, {
    username,
    email,
    address,
    gender,
    phoneNumber,
  });
}


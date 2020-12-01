import http from "./httpService";

const apiEndpoint = "/reviews";

export function getReviews(id) {
  return http.get(`${apiEndpoint}/${id}`);
}
export function addReview(product, review, verified) {
  return http.post(`${apiEndpoint}`, { product, review, verified });
}

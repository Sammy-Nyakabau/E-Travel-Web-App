import http from "./httpService";

const apiEndpoint = "/reviews";

export function getReviews(id) {
  return http.get(`${apiEndpoint}/${id}`);
}

export function getReviewOfAListingByUser(user, listing) {
  return http.get(`${apiEndpoint}/one/${user}/${listing}`);
}

export function addReview(listing, user, review, verified) {
  return http.post(`${apiEndpoint}`, { listing, user, review, verified });
}

export function updateReview(listing, user, review) {
  return http.put(`${apiEndpoint}/update`, { listing, user, review });
}

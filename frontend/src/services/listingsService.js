import http from "./httpService";

const apiEndpoint = "/listings";

export function getListings(pageNumber) {
  return http.get(`${apiEndpoint}/${pageNumber}`);
}
export function getOneListing(id) {
  return http.get(`${apiEndpoint}/one/${id}`);
}

export function getListingsByType(propertyType, pageNumber) {
  return http.get(`${apiEndpoint}/${propertyType}/${pageNumber}`);
}
export function getListingsByTypeCount(propertyType) {
  return http.get(`${apiEndpoint}/count/${propertyType}`);
}
export function getListingsCount() {
  return http.get(`${apiEndpoint}/count`);
}
export function getFilteredListingsCount(airbnb_city, guests) {
  return http.get(`${apiEndpoint}/search/count/${airbnb_city}/${guests}`);
}
export function getFilteredListings(airbnb_city, guests, page) {
  return http.get(`${apiEndpoint}/search/${airbnb_city}/${guests}/${page}`);
}

export function getRecommendedListings(
  airbnb_city,
  property_type,
  guests,
  price
) {
  return http.get(
    `${apiEndpoint}/recommended/${airbnb_city}/${property_type}/${guests}/${price}`
  );
}

export function updateListing(id, reviews_count, start_rating) {
  return http.put(`${apiEndpoint}/${id}`, { reviews_count, start_rating });
}

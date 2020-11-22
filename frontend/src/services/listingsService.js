import http from './httpService'

const apiEndpoint = "/listings";

export function getListings(pageNumber){
    return http.get(`${apiEndpoint}/${pageNumber}`)
}

export function getListingsByType(propertyType, pageNumber){
    return http.get(`${apiEndpoint}/${propertyType}/${pageNumber}`)
}
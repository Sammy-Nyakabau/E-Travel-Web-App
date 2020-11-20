import http from './httpService'

const apiEndpoint = "/listings";

export function getListings(){
    return http.get(apiEndpoint)
}
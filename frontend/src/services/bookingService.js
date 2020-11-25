import http from './httpService'

const apiEndpoint = "/bookings";

export function createBooking(listing, booking){
    return http.post(`${apiEndpoint}`, {listing, booking})
}

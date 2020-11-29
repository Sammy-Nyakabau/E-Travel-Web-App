import http from './httpService'

const apiEndpoint = "/bookings";

export function createBooking(listing, booking){
    return http.post(`${apiEndpoint}`, {listing, booking})
}

export function getBookings(listing){
    return http.get(`${apiEndpoint}/${listing}`)
}

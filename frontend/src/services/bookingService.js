import http from './httpService'

const apiEndpoint = "/bookings";

export function createBooking(user, listing, booking){
    return http.post(`${apiEndpoint}`, {user, listing, booking})
}

export function getUserBookings(user){
    return http.get(`${apiEndpoint}/user/${user}`)
}

export function getBookings(listing){
    return http.get(`${apiEndpoint}/${listing}`)
}

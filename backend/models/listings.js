const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  property_id: {
    type: Number,
    
  },
  source: {
    type: String,
    
  },
  status: {
    type: String,
    
  },
  'night_price_native': {
    type: Number,
  },
  night_price: {
    type: Number,
    
  },
  weekly_price: {
    type: Number,
    
  },
  monthly_price: {
    type: Number,
    
  },
  cleaning_fee_native: {
    type: Number,
    
  },
  num_of_baths: {
    type: Number,
    
  },
  num_of_rooms: {
    type: Number,
    
  },
  occupancy: {
    type: Number,
    
  },
  nights_booked: {
    type: Number,
    
  },
  rental_income: {
    type: Number,
    
  },
  airbnb_neighborhood_id: {
    type: Number,
    
  },
  name: {
    type: String,
    
  },
  address: {
    type: String,
    
  },
  airbnb_neighborhood: {
    type: String,
    
  },
  airbnb_city: {
    type: String,
    
  },
  state: {
    type: String,
    
  },
  capacity_of_people: {
    type: Number,
    
  },
  zip: {
    type: String,
  },
  property_type: {
    type: String,
    
  },
  room_type: {
    type: String,
    
  },
  room_type_category: {
    type: String,
    
  },
  amenities: {
    type: String,
  },
  reviews_count: {
    type: Number,
    
  },
  start_rating: {
    type: Number,
    
  },
  reviews: {
    type: String,
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
  num_of_beds: {
    type: Number,
  },
  lat: {
    type: Number,
  },
  lon: {
    type: Number,
  },
  image: {
    type: String,
  },
  url: {
    type: String,
  },
});

const Listing = mongoose.model("Listing", listingSchema);

exports.Listing = Listing;

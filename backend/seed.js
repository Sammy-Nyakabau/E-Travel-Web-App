const axios = require("axios");
const mongoose = require("mongoose");
require("dotenv").config();

const { Listing } = require("./models/listings");
const db = process.env.MONGO;
const key = process.env.API_KEY;

async function seed(pageNumber) {
  await mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

const options = {
    method: 'GET',
    url: 'https://mashvisor-api.p.rapidapi.com/airbnb-property/active-listings',
    params: {state: 'IL', page: pageNumber, city: 'Chicago', items: '20'},
    headers: {
      'x-rapidapi-key': key,
      'x-rapidapi-host': 'mashvisor-api.p.rapidapi.com'
    }
  };


  const { data: listings } = await axios.request(options);

  await Listing.insertMany(listings.content.properties);

  console.info(`Done with page ${pageNumber}`);
}

for (let page = 4; page < 99; page++) {
  seed(page);
}

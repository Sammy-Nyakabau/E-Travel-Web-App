import React from "react";
import { Dropdown } from "semantic-ui-react";
import "../styles/ListingInput.css";
import { Input, Label } from 'semantic-ui-react'



const stateOptions = [
  { key: 1, text: "GA", value: 1 },
  { key: 2, text: "IL", value: 2 },
  { key: 3, text: "CA", value: 3 },
];
const cityOptions = [
  { key: 1, text: "Atlanta", value: 1 },
  { key: 2, text: "San Diego", value: 2 },
  { key: 3, text: "Buffalo", value: 3 },
  { key: 4, text: "Chicago", value: 4 },
  { key: 5, text: "San Francisco", value: 5 },
];
const propertyOptions = [
  { key: 1, text: "Aparatment", value: 1 },
  { key: 2, text: "Guest Suite", value: 2 },
  { key: 3, text: "Townhouse", value: 3 },
  { key: 4, text: "Guesthouse", value: 4 },
  { key: 5, text: "Condominium", value: 5 },
  { key: 6, text: "Cottage", value: 6 },
  { key: 7, text: "Serviced Apartment", value: 7 },
  { key: 8, text: "Bungalow", value: 8 },
  { key: 9, text: "House", value: 9 },
  { key: 10, text: "Loft", value: 10 },
  { key: 11, text: "Tinyhouse", value: 11 },
  { key: 12, text: "Villa", value: 12 },
];
function ListingInput() {
  return (
    <div className="ListingInput">
      <h1>Create Listing</h1>
      <div className="input_fields">
      <Dropdown className="drop1" placeholder="State" search selection options={stateOptions} />
      <Dropdown className="drop2" placeholder="City" search selection options={cityOptions} />
      <Dropdown
        className="drop3"
        placeholder="Property Type"
        search
        selection
        options={propertyOptions}
      />
      <div className="drop4">
      <p>Property title:</p>
      <Input className="property" placeholder='Enter property title' />
      </div>
      <div className="drop5">
      <p>Latitude</p>
      <Input className="lat" placeholder='Enter Latitude' />
      </div>
      <div className="drop6">
      <p>Logitude</p>
      <Input className="longi" placeholder='Enter Logitude' />
      </div>
      
      <div className="drop7">
      <p>Price per night: </p>
      <Input labelPosition="right" type="text" placeholder="Amount">
        <Label basic>$</Label>
        <input />
        <Label>.00</Label>
      </Input>
      </div>
      <div className="drop8">
      <p>Price per month: </p>
      <Input labelPosition="right" type="text" placeholder="Amount">
        <Label basic>$</Label>
        <input />
        <Label>.00</Label>
      </Input>
      </div>
      <div className="drop9">
      <p>Number of rooms: </p>
      <Input className="rooms" placeholder='How many rooms does you listing have' />
      </div>
      <div className="drop10">
     <p>Occupancy: </p>
      <Input className="occupancy" placeholder='How many people can you accomodate' />
      </div>
      </div>
    </div>
  );
}

export default ListingInput;

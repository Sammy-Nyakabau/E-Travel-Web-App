import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import '../styles/Dropdown_search.css'

const locationOptions = [
  {
    key: 'GA',
    text: 'Atlanta',
    value: 'Atlanta',
  },
  {
    key: 'CA',
    text: 'San Diego',
    value: 'San Diego',
  },
  {
    key: 'NY',
    text: 'Buffalo',
    value: 'Buffalo',
  },
  {
    key: 'CA',
    text: 'San Francisco',
    value: 'San Francisco',
  },
  {
    key: 'IL',
    text: 'Chicago',
    value: 'Chicago',
  },
]

const Dropdown_search = () => (
  <Dropdown style={{ width:"150px" }}
    placeholder='Select location'
    fluid
    selection
    options={locationOptions}
  />
)

export default Dropdown_search
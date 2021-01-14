import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Link } from "react-router-dom";

import "../styles/DropdownOptions.css";

const DropdownOptions = () => (
  <Dropdown
    icon='user'
    className='icon'
    direction='right'

    
  >
    <Dropdown.Menu>
   
      <Dropdown.Item description='' text='Account details' as={Link} to='/Profile' />
      <Dropdown.Item description='' text='Wishlist'as={Link} to='/Wishlist' />
      <Dropdown.Item description='' text='Recently Booked' as={Link} to='/RecentlyBooked' />
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownOptions
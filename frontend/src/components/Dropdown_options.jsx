import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

const Dropdown_options = () => (
  <Dropdown
    icon='user'
    className='icon'
    direction='left'
    
  >
    <Dropdown.Menu>
   
      <Dropdown.Item description='' text='Account details' as={Link} to='/Profile' />
      <Dropdown.Item description='' text='Wishlist'as={Link} to='/Wishlist' />
      <Dropdown.Item description='' text='Recently Booked' as={Link} to='/Recently_booked' />
    </Dropdown.Menu>
  </Dropdown>
)

export default Dropdown_options
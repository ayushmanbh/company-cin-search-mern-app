import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <h2>CIN No. Search</h2>
      <ul>
        <li>
          <Link className='link' to='/'>Home</Link>
        </li>
        <li>
          <Link className='link' to='/list-all'>My Companies</Link>
        </li>
      </ul>
      <p><em> Store your favorite company</em></p>
    </nav>
  )
}

export default Navbar

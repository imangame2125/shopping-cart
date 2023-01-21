import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'


const Header = ({ cartItems }) => {
  return (
    <header className='header'>
      <div>
        <Link to='/' className='logo'>
          Electeronics shop
        </Link>
      </div>
      <div className='header-links'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
        </ul>


        <ul>
          <li>
            <Link to='/cart' className='cart'>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className='cart-length'>
                {cartItems.length === 0 ? '' : cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header

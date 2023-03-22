import React from 'react';
import './Style.scss';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>

<nav>

  <h1>IT Branding</h1>

  <main>
    <Link to='/'>Home</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/#about'>About</Link>
    <Link to='/#brands'>Brands</Link>
    <Link to='/services'>Services</Link>

  </main>
  
</nav>















      {/* ////////////////////////////////// For Learning Purpose//////////////////////////////////////////// */}
        {/* <nav>
        <Link to='/'>Home</Link>
            <Link to='About'>About</Link>
            <Link to='Contact'>Contact</Link>
        </nav> */}
    </div>
  )
}

export default Header
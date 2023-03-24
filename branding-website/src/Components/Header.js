import React from 'react';
import './Style.scss';
import {Link} from 'react-router-dom';
import {HashLink } from 'react-router-hash-link';
import {HashRouter} from 'react-router-dom';


const Header = () => {
  return (
    <div>
<nav>

  <h1>TECHYSTAR</h1>

  <main>

    <HashLink to={'/#home'}>Home</HashLink>
    <Link to={'/contact'}>Contact</Link>
    <HashLink to={'/#about'}>About</HashLink>
    <HashLink to={'/#brands'}>Brands</HashLink>
    <Link to={'/services'}>Services</Link>
  
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
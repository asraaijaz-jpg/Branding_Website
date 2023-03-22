import React from 'react';
import './Style.scss';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <nav>
        <Link to='/'>Home</Link>
            <Link to='About'>About</Link>
            <Link to='Contact'>Contact</Link>
        </nav>
    </div>
  )
}

export default Header
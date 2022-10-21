import React from 'react';
import Link from 'next/Link';
import { AIOutlineshopping } from'react-icons/ai';

const Navbar = () => {
  return (
    <div className="navbar-container">
       <p className="logo">
        <Link href="/">Tokosewa BMG</Link>
       </p>

       <button type="button" className="cart-icon" onClick="">
        <AIOutlineshopping/>
        <span classname="cart-item-q"></span>
       </button>
    </div>
  )
}

export default Navbar

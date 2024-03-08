import React from 'react'
import NavLogo from '../Assets/brand_logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
<>

<div>
    <nav>
        <div className="logo">
            <img src={NavLogo} alt="" />
        </div>
        <div>
            <ul className='components'>
                <li className='navItems'>MENU</li>
                <li className='navItems'> LOCATION</li>
                <li className='navItems'>ABOUT</li>
                <li className='navItems'>CONTACT</li>
            </ul>
        </div>
        <button className='navbtn'>Login</button>
    </nav>
</div>
</>
    )
}

export default Navbar
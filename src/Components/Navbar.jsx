import React, { useState } from 'react';
import '../Css/Navbar.css';
import logo from '../Assets/Innova360.png';
import { Link } from 'react-router-dom';
import 'animate.css';


function Navbar() {

  const [isCross, setIsCross] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleCross = () => {
    setIsCross(!isCross);
    setOpenDrawer(!openDrawer)
  };

  return (
    <div className='navbar'>
      <div className='nav-stuff'>

        <div className='nav-elem'>
          <img src={logo} className='nav-img' />
        </div>

        <div className='nav-elem'>
          <li className='nav-links'>
            <Link className="navtext">Home</Link>
            <Link className="navtext">About Us</Link>
            <Link className="navtext">Services</Link>
            <Link className="navtext">Contact Us</Link>
          </li>
        </div>

        <div className='nav-elem'>
          <button className='button-87'>Book an Appointment</button>
        </div>

      </div>

      <div className='navbar-res'>
        <div className='nav-elem'>
          <img src={logo} className='nav-img' />
        </div>
        <div className='nav-elem2'>
          <div className='nav-btn-87'>
          <button className='button-87'>Book an Apointment</button>
          </div>

          <div style={{ margin: "5px" }}>
            <div className={`bar-container ${isCross ? 'cross' : ''}`} onClick={toggleCross}>
              <div className="bar bar1"></div>
              <div className="bar bar2"></div>
            </div>
          </div>

        </div>
      </div>

      <div className={openDrawer ? 'drawer-box animate__animated animate__slideInUp' : 'drawer-box animate__animated animate__slideOutDown'}>
        <div className='menu'>
          <p className='drawer-text'>Menu</p>
        </div>
        <div className='drawer-link-div'><Link className='drawer-link'>Home</Link></div>
        <div className='drawer-link-div'><Link className='drawer-link'>Services</Link></div>
        <div className='drawer-link-div'><Link className='drawer-link'>About us</Link></div>
        <div className='drawer-link-div'><Link className='drawer-link'>Contact us</Link></div>
        <button className='button-87'>Book an Apointment</button>
      </div>




    </div >
  )
}

export default Navbar
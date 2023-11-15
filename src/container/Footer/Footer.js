// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content flex md:flex-row flex-col'>
        <div className='footer-logo'>
          {/* Add your logo or site name */}
          <h3 className='text-center font-extrabold text-[#C5912D] lg:text-4xl sm:text-3xl text-2xl font-mono'>
            FlavorHaven Getaways
          </h3>
        </div>
        <div className='footer-links'>
          {/* Add your footer links */}
          <a href='/'>Home</a>
          <a href='/#About'>About</a>
          <a href='/#Services'>Services</a>
          <a href='/#Contact'>Contact</a>
        </div>
        <div className='footer-social'>
          {/* Add your social media icons or links */}
          <a className='cursor-pointer'>
            <i className='pi pi-facebook'></i>
          </a>
          <a className='cursor-pointer'>
            <i className='pi pi-twitter'></i>
          </a>
          <a className='cursor-pointer'>
            <i className='pi pi-instagram'></i>
          </a>
        </div>
      </div>
      <div className='footer-bottom'>
        {/* Add additional information or copyright details */}
        <p>&copy; 2023 FlavorHaven Getaways. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

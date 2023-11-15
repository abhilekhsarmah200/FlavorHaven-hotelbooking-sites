import React, { useRef } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {
  return (
    <div className='w-full'>
      <div className='hidden sm:block w-full '>
        <DesktopNavbar />
      </div>
      <div className='sm:hidden block'>
        <MobileNavbar />
      </div>
    </div>
  );
}

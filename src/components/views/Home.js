import React from 'react';
import { Button } from 'primereact/button';
import About from './About';
import Searching from './Searching/Searching';
import OurServices from './Services/OurServices';
import Subscribe from './Subscribe/Subscribe';
export default function Home() {
  return (
    <div>
      <About />
      <Searching />
      <OurServices />
      <Subscribe />
    </div>
  );
}

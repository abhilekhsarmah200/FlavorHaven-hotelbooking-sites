import React from 'react';
import Banner from '../../assests/img/BannerImage.png';
import { Button } from 'primereact/button';

export default function About() {
  return (
    <div id='About' className='lg:pt-28 pt-24'>
      <div className='flex md:flex-row flex-col my-10 justify-between items-center'>
        <div className='w-full lg:pl-20 md:pl-10 px-5 text-left'>
          <div className='lg:text-4xl sm:text-3xl text-2xl font-mono text-[#C5912D]'>
            FlavorHaven Getaways
          </div>
          <span className='text-center lg:text-xl sm:text-md text-sm text-[#EEC881] font-mono italic'>
            Where Luxury Meets Spice, Your Journey to Culinary Bliss Begins!
          </span>
          <p className='text-left lg:text-lg sm:text-sm text-xs md:pt-10 pt-6 font-serif'>
            Welcome to FlavorHaven Getaways, your passport to a world of
            exquisite stays and culinary delights. Unleash your wanderlust as
            you book premium accommodations and immerse yourself in a symphony
            of flavors, turning each stay into an unforgettable journey. With
            FlavorHaven Getaways, discover the perfect blend of luxury, comfort,
            and gastronomic exploration at your fingertips. Reserve your escape
            today and savor the essence of travel with a dash of culinary
            magic."
          </p>
          <div
            onClick={() => (window.location = '/#search')}
            className='md:flex hidden transition transform duration-300 ease-in-out md:hover:scale-105 justify-center font-sans pt-10'
          >
            <button className='bg-[#EEC881] rounded-2xl font-bold text-white py-2 px-6'>
              Book Now
            </button>
          </div>
        </div>
        <div className='w-full flex md:justify-end justify-center md:py-0 sm:py-10 py-6 px-10'>
          <img
            title='FlavorHaven Getaways'
            alt='FlavorHaven Getaways'
            className='w-auto lg:h-[26rem] sm:h-[20rem] h-[16rem]'
            src={Banner}
          />
        </div>
        <div
          onClick={() => (window.location = '/#search')}
          className='flex md:hidden justify-center font-sans pt-10'
        >
          <button className='bg-[#EEC881] rounded-2xl font-bold text-white py-2 px-6'>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

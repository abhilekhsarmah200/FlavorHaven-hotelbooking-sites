import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import HotelCarousel from './HotelCarousel';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { hotelData } from './data/hotel.data';

export default function Searching() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [location, setLocation] = useState('');
  const [searchResults, setSearchResults] = useState([...hotelData]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // If the pressed key is Enter, trigger form submission
      handleSearch();
    }
  };

  const handleSearch = () => {
    // Filter hotels based on the date range and location
    const filteredHotels = hotelData.filter((hotel) => {
      return hotel.location.toLowerCase().includes(location.toLowerCase());
    });

    setSearchResults(filteredHotels);
  };

  console.log({ checkInDate });

  return (
    <div id='search' className='pt-10'>
      <div className='flex bg-gray-800 md:flex-nowrap flex-col md:flex-row flex-wrap md:items-end rounded justify-between lg:gap-4 gap-2 border shadow-sm xl:w-[85%] md:w-[90%] w-[97%]  mx-auto p-3'>
        <div className='flex lg:gap-4 flex-col md:flex-row justify-center flex-wrap gap-2 lg:text-lg sm:text-md text-sm'>
          <label className='text-white flex md:flex-row flex-col'>
            Check-in date:
            <Calendar
              minDate={new Date()}
              maxDate={new Date(checkOutDate?.value)}
              className='border border-gray-300 text-black bg-gray-600 rounded h-8'
              selected={checkInDate}
              dateFormat='dd/mm/yy'
              showIcon
              onChange={(date) => setCheckInDate(date)}
            />
          </label>
          <label className='text-white flex md:flex-row flex-col'>
            Check-out date:
            <Calendar
              minDate={new Date(checkInDate?.value) || new Date()}
              className='border border-gray-300 text-black bg-gray-600 rounded h-8'
              selected={checkOutDate}
              dateFormat='dd/mm/yy'
              showIcon
              onChange={(date) => setCheckOutDate(date)}
            />
          </label>
          <label className='text-white flex md:flex-row flex-col'>
            Location:
            <input
              className='border border-gray-300 text-black rounded h-8'
              type='text'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </label>
        </div>
        <div className='pr-5 transition transform duration-300 ease-in-out md:hover:scale-105'>
          <Button
            label='Search'
            icon='pi pi-search pr-2'
            iconPos='right'
            className='bg-[#EEC881] hover: lg:text-lg sm:text-md text-sm rounded font-bold text-white py-1 px-3'
            onClick={handleSearch}
          ></Button>
        </div>
      </div>
      <HotelCarousel
        hotels={searchResults?.length === 0 ? null : searchResults}
      />
    </div>
  );
}

// HotelSearch.js

import React from 'react';

const HotelSearch = ({
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  location,
  setLocation,
  onSearch,
}) => {
  return (
    <div>
      <h2>Hotel Search</h2>
      <label>
        Check-in date:
        <input
          type='date'
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </label>
      <label>
        Check-out date:
        <input
          type='date'
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </label>
      <label>
        Location:
        <input
          type='text'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default HotelSearch;

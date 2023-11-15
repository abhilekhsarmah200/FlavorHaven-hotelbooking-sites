import { Button } from 'primereact/button';
import React, { useState } from 'react';

export default function Subscribe() {
  const [email, setEmail] = useState('');

  return (
    <div
      id='Contact'
      className='bg-gray-800 md:mt-10 mt-5 py-5 flex justify-center flex-col items-center'
    >
      <div className='lg:text-xl mt-5 md:mt-0 sm:text-md text-sm text-[#EEC881] font-mono italic font-bold'>
        Save time, save money!
      </div>
      <div className='mt-5 md:mt-0 lg:text-lg sm:text-sm text-xs text-gray-500 font-mono italic font-bold'>
        Sign up and we'll send the best deals to you
      </div>
      <div className='mt-4 flex md:flex-row flex-col gap-3 h-full justify-center md:items-end items-center'>
        <div>
          <input
            className='border border-gray-300 text-black rounded h-11 sm:w-[40rem] w-[20rem]'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Button className='bg-[#EEC881] transition transform duration-300 ease-in-out md:hover:scale-105 hover: lg:text-lg sm:text-md text-sm rounded font-bold text-white mt-2 py-2 px-3'>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}

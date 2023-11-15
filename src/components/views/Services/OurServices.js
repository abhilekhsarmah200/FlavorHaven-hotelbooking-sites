import React from 'react';
import cover from '../../../assests/img/HotelImages/cover.webp';
import { Button } from 'primereact/button';

export default function OurServices() {
  return (
    <div id='Services' className='px-8 sm:pt-14 pt-8 pb-3'>
      <div className='text-center font-extrabold text-[#C5912D] lg:text-4xl sm:text-3xl text-2xl font-mono'>
        OurServices
      </div>
      <p className='lg:text-lg sm:text-sm text-xs'>
        Welcome to FlavorHaven Getaways, where your journey begins with a
        symphony of services tailored for a perfect escape. At FlavorHaven,
        we're not just a hotel booking app; we're your key to a world of
        delightful experiences and personalized hospitality. Explore our array
        of services designed to make your getaways truly memorable.
      </p>
      <div>
        <img
          className='w-auto mx-auto sm:mr-5 lg:h-[36rem] md:h-[25rem] h-[18rem] sm:float-left shadow-xl rounded-r-full'
          src={cover}
        />

        <div className='lg:text-xl mt-5 md:mt-0 sm:text-md text-sm text-[#EEC881] font-mono italic font-bold'>
          What Sets Us Apart:
        </div>
        <div>
          <ul className='list-decimal list-inside lg:text-lg sm:text-sm text-xs'>
            <li>
              Curated Stays: Immerse yourself in a collection of handpicked
              hotels, resorts, and boutique accommodations. Each stay is chosen
              for its unique charm, ensuring a blend of comfort and character.
            </li>

            <li>
              Culinary Concierge: Elevate your travel with our Culinary
              Concierge service. From restaurant recommendations to exclusive
              dining experiences, we're your guide to the local flavors that
              define each destination.
            </li>

            <li>
              Seamless Booking: Enjoy a hassle-free booking experience with our
              intuitive app. Your FlavorHaven journey begins with a few taps,
              ensuring a smooth and efficient reservation process.
            </li>
          </ul>
        </div>
        <div>
          <div className='lg:text-xl sm:text-md text-sm text-[#EEC881] font-mono italic font-bold'>
            Our Service Highlights:
          </div>
          <div>
            <ul className='list-disc list-inside lg:text-lg sm:text-sm text-xs'>
              <li>
                Curated Accommodations: Discover a world of handpicked stays,
                each offering a distinct flavor of hospitality.
              </li>

              <li>
                Culinary Concierge: Let us guide you to the best culinary
                experiences, ensuring every meal is a celebration of local
                tastes.
              </li>

              <li>
                Personalized Recommendations: Receive tailored suggestions based
                on your preferences, creating a customized travel itinerary.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className='lg:text-xl sm:text-md text-sm text-[#EEC881] font-mono italic font-bold'>
            Why FlavorHaven:
          </div>
          <div>
            <ul className='list-disc list-inside lg:text-lg sm:text-sm text-xs'>
              <li>
                Passion for Hospitality: We're driven by a love for travel and a
                commitment to delivering exceptional experiences.
              </li>

              <li>
                Local Insights: Benefit from our local expertise, providing you
                with insider recommendations for an authentic journey.
              </li>

              <li>
                User-Friendly App: Our app is designed with you in mind, making
                the booking process straightforward and enjoyable.
              </li>
            </ul>
          </div>
        </div>
        <div className='lg:text-lg pt-5 sm:text-sm text-xs'>
          &nbsp; &nbsp; Embark on a FlavorHaven escape and let our services
          redefine your travel experience. Start your journey today and savor
          the art of travel with FlavorHaven Getaways.
        </div>
        <div className='flex justify-center'>
          <Button
            onClick={() => {
              window.location = '/#search';
            }}
            className='bg-[#EEC881] transition transform duration-300 ease-in-out md:hover:scale-105 hover: lg:text-lg sm:text-md text-sm rounded font-bold text-white mt-2 py-1 px-3'
          >
            Book Your Choice!!
          </Button>
        </div>
      </div>
    </div>
  );
}

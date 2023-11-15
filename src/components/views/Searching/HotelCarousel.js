import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const HotelCarousel = ({ hotels }) => {
  const responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const responsiveOptions2 = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [visible, setVisible] = useState(false);

  const openDialog = (hotel) => {
    setSelectedHotel(hotel);
    setVisible(true);
  };

  const closeDialog = () => {
    setSelectedHotel(null);
    setVisible(false);
  };

  const productTemplate2 = (products) => {
    return (
      <div className='relative flex flex-col border-1 h-full shadow-xl surface-border border-round m-2 text-center py-5 px-3'>
        <div className='mb-3'>
          <img
            title={selectedHotel?.name}
            src={products?.images}
            className='w-auto h-80 mx-auto rounded border shadow-md'
          />
        </div>
      </div>
    );
  };

  const productTemplate = (product) => {
    let maxLength = 50;
    const truncatedText = isExpanded
      ? product?.desc
      : product?.desc.slice(0, maxLength);
    return (
      <div className='relative flex flex-col border-1 h-full shadow-xl surface-border border-round m-2 text-center py-5 px-3'>
        <div className='mb-3'>
          <Button
            onClick={() => openDialog(product)}
            tooltip='see more images'
            tooltipOptions={{
              style: { fontSize: '0.7rem' },
              position: 'bottom',
            }}
            className='cursor-pointer transition transform duration-300 ease-in-out md:hover:scale-105'
          >
            <img
              src={product?.icon}
              className='w-auto h-40 mx-auto rounded border shadow-md'
            />
          </Button>
        </div>
        <div>
          <h4 className='mb-1  text-[#C5912D] font-bold'>{product?.name}</h4>
          <h4 className='mb-1 text-[#EEC881]'>{product?.location}</h4>
          <h6 className='mt-0 mb-3'>
            <del>₹ {product?.price}</del>₹{' '}
            {product?.price - (product?.price * product?.offer) / 100}/day
          </h6>

          <div className='h-full text-left px-6'>
            <p>{truncatedText}</p>
            {product?.desc?.length > maxLength && (
              <div
                className='sm:text-4 text-xs underline cursor-pointer transition transform duration-300 ease-in-out md:hover:scale-95'
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Read Less... ▲' : 'Read More... ▼'}
              </div>
            )}
          </div>
        </div>
        <div className='absolute border border-red-400 bg-red-400 px-1 font-serif italic top-0 z-40 right-0 -rotate-45'>
          {product?.offer}% off
        </div>
        <Button
          label='Book Now'
          iconPos='right'
          className='bg-[#EEC881] transition transform duration-300 ease-in-out md:hover:scale-105 mt-5 w-40 mx-auto hover: lg:text-sm text-xs rounded font-bold text-white py-1 px-3'
        ></Button>
      </div>
    );
  };
  console.log({ hotels });
  return (
    <div className='border-1 h-full mt-5 shadow-xl'>
      {hotels === null ? (
        <div className='text-red-400 text-center'>No Hotels Available...</div>
      ) : (
        <Carousel
          value={hotels}
          numVisible={3}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
        />
      )}
      <Dialog
        header={selectedHotel?.name}
        className='text-center md:w-[50vw] w-[100vw]'
        visible={visible}
        onHide={closeDialog}
        draggable={false}
      >
        <Carousel
          value={selectedHotel?.icons}
          selectedHotel={selectedHotel}
          numVisible={1}
          numScroll={1}
          responsiveOptions={responsiveOptions2}
          itemTemplate={productTemplate2}
        />
      </Dialog>
    </div>
  );
};

export default HotelCarousel;

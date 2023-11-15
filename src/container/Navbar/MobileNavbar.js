import React, { useRef, useState } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import logo from '../../assests/img/FlavorHavenGateways.png';
import profile from '../../assests/img/Profile.png';
import { Dialog } from 'primereact/dialog';
import SignupForm from '../../components/views/PageSignUp/SignUp';

export default function MobileNavbar() {
  const op = useRef(null);
  const op2 = useRef(null);
  const [visible, setVisible] = useState(false);
  const userProfile = JSON.parse(localStorage.getItem('user'));

  return (
    <div className='fixed w-full z-50'>
      <nav className='bg-gray-800'>
        <div className='mx-auto px-2'>
          <div className='relative flex h-auto py-3 items-center justify-between'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
              <button
                type='button'
                onClick={(e) => op2.current.toggle(e)}
                className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='absolute -inset-0.5'></span>
                <span className='sr-only'>Open main menu</span>

                <svg
                  className='block h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>

                <svg
                  className='hidden h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex flex-shrink-0 items-center'>
                <img
                  className='h-20 w-20 rounded-full'
                  src={logo}
                  title='FlavorHaven Getaways'
                  alt='FlavorHaven Getaways'
                />
              </div>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <button
                type='button'
                className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
              >
                <span className='absolute -inset-1.5'></span>
                <span className='sr-only'>View notifications</span>
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                  />
                </svg>
              </button>

              <div className='relative ml-3'>
                <div>
                  <Button
                    type='button'
                    className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    onClick={(e) => op.current.toggle(e)}
                  >
                    <span className='absolute -inset-1.5'></span>
                    {userProfile?.firstName ? (
                      <div className='text-white h-8 w-8 p-1 font-extrabold border-white border rounded-full'>
                        {userProfile?.firstName[0]}
                      </div>
                    ) : (
                      <img
                        className='h-8 w-8 rounded-full'
                        src={profile}
                        alt=''
                      />
                    )}
                  </Button>
                </div>
                <OverlayPanel ref={op}>
                  <div
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='user-menu-button'
                    tabindex='-1'
                  >
                    {userProfile ? (
                      <div>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-800 rounded hover:text-white'
                          role='menuitem'
                          tabindex='-1'
                          id='user-menu-item-0'
                        >
                          Your Profile
                        </a>

                        <div
                          onClick={() => {
                            localStorage.removeItem('user');
                            window.location.reload();
                          }}
                        >
                          <a
                            className='block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-800 rounded hover:text-white'
                            role='menuitem'
                            tabindex='-1'
                            id='user-menu-item-2'
                          >
                            Sign out
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div
                        className='cursor-pointer hover:bg-gray-800 rounded '
                        onClick={() => setVisible(true)}
                      >
                        <a
                          className='block px-4 py-2 text-sm text-gray-700 hover:text-white'
                          role='menuitem'
                          tabindex='-1'
                          id='user-menu-item-0'
                        >
                          Sign Up
                        </a>
                      </div>
                    )}
                  </div>
                </OverlayPanel>
              </div>
            </div>
          </div>
        </div>
        <OverlayPanel className='w-[100%] bg-gray-800 mt-4 sm:hidden' ref={op2}>
          <div className='sm:hidden w-full' id='mobile-menu'>
            <div className='flex flex-col w-[80%] px-2 pb-3pt-2'>
              <a
                href='/'
                className='text-[#EEC881] hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                aria-current='page'
              >
                Home
              </a>
              <a
                href='/#About'
                className='text-[#EEC881] hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
              >
                About
              </a>
              <a
                href='/#Services'
                className='text-[#EEC881] hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
              >
                Services
              </a>
              <a
                href='/#Contact'
                className='text-[#EEC881] hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
              >
                Contact
              </a>
            </div>
          </div>
        </OverlayPanel>
        <Dialog
          header='Sign Up'
          headerClassName='text-center'
          draggable={false}
          visible={visible}
          className='md:w-[50vw] w-[80vw]'
          onHide={() => setVisible(false)}
        >
          <SignupForm />
        </Dialog>
      </nav>
    </div>
  );
}

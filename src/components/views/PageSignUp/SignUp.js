import { Button } from 'primereact/button';
import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
const SignupForm = () => {
  const toast = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.current.show({
      severity: 'success',
      summary: 'success',
      detail: 'User successfully signed up !!!',
      life: 3000,
    });

    localStorage.setItem('user', JSON.stringify(formData));

    // Clear form after successful signup
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <form>
      <Toast ref={toast} />

      <label>
        First Name:
        <input
          className='border border-gray-300 text-black rounded h-8 w-full'
          type='text'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          className='border border-gray-300 text-black rounded h-8 w-full'
          type='text'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          className='border border-gray-300 text-black rounded h-8 w-full'
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          className='border border-gray-300 text-black rounded h-8 w-full'
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <div className='flex justify-center pt-5'>
        <Button
          onClick={handleSubmit}
          className='bg-[#EEC881] rounded font-bold text-white py-1 px-3'
          type='submit'
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;

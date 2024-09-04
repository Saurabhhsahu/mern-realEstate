import React from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react';

function Profile() {
  const {currentUser} = useSelector(state => state.user);
  const fileRef = useRef(null);

  return (
    <div className='max-w-lg p-3 mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7 '>
        Profile
      </h1>

      <form className='flex flex-col'>
        <input type="file" ref={fileRef} className='hidden'/>
        <img 
          onClick={() => fileRef.current.click()}
          src={currentUser.avatar} 
          alt="profile" 
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center'
        />

        <input 
          type="text" 
          placeholder='username'
          className='border p-3 rounded-lg mt-5'
          id='username'
        />

        <input 
          type="email" 
          placeholder='email'
          className='border p-3 rounded-lg mt-5'
          id='email'
        />

        <input 
          type="password" 
          placeholder='password'
          className='border p-3 rounded-lg mt-5'
          id='password'
        />

        <button className='bg-slate-700 text-white rounded-lg p-3 mt-5 uppercase hover:opacity-95 disabled:opacity-80'>
          update
        </button>
      </form>

      <div className='flex justify-between mt-5'>
        <span className='cursor-pointer text-red-700 cursor-pointer '>delete account</span>
        <span className='cursor-pointer text-red-700 cursor-pointer '>Sign out</span>
      </div>
    </div>
  )
}

export default Profile
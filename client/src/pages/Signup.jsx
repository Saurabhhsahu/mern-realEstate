import React from 'react'
import {Link} from 'react-router-dom'

function Signout() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input
         type="text" 
         placeholder='username'
         className='border-[1px] border-black p-3 rounded-lg'
         id='username'
        />

        <input
         type="email" 
         placeholder='email'
         className='border-[1px] border-black p-3 rounded-lg'
         id='email'
        />

        <input
         type="password" 
         placeholder='password'
         className='border-[1px] border-black p-3 rounded-lg'
         id='password'
        />

        <button disabled className='bg-slate-700 text-white p-3 cursor-pointer rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign up</button>
      </form>

      <div className='flex gap-4 my-4 justify-center'>
        <p>Have an account?</p>
        <Link
          to='/signin'
          className='text-blue-700 cursor-pointer'>
            Sign in
        </Link>
      </div>
    </div>
  )
}

export default Signout
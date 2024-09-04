import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'

function Signin() {
  const [formData,setFormData] = useState({});
  const [error,setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id] : e.target.value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()    
    setLoading(true)
    const res = await fetch("http://localhost:3000/api/auth/signin",
      {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData)
      }
    );
    const data = await res.json();
    setLoading(false);
    
    if(data.success === false)
      return setError(data.message);
    setError(null);
    navigate('/')
    console.log(data);
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit = {handleSubmit} className='flex flex-col gap-4'>
        <input
         type="email" 
         placeholder='email'
         className='border-[1px] border-black p-3 rounded-lg'
         id='email'
         onChange={handleChange}
        />

        <input
         type="password" 
         placeholder='password'
         className='border-[1px] border-black p-3 rounded-lg'
         id='password'
         onChange={handleChange}
        />

        <button disabled={loading} className='bg-slate-700 text-white p-3 cursor-pointer rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'loading...' : 'sign in'}
        </button>
      </form>

      <div className='flex gap-4 my-4 justify-center'>
        <p>Don't have an account?</p>
        <Link
          to='/signup'
          className='text-blue-700 cursor-pointer'>
            Sign up
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5 text-center'>{error}</p>}
    </div>
  )
}

export default Signin
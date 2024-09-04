import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
// import menuIcon from '../path/to/menu.png'; // Update the path to your menu image

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { currentUser } = useSelector(state => state.user);
  // console.log(currentUser.avatar);
  
  return (
    <header className='relative flex bg-slate-200 shadow-md min-w-[340px]'>
      <div className='flex justify-between items-center max-w-6xl mx-auto w-full p-4'>
        <h1 className='flex font-bold cursor-pointer text-sm sm:text-xl'>
          <span className='text-slate-500'>Sahand</span>
          <span className='text-slate-700'>Estate</span>
        </h1>
    
        <form className='flex items-center bg-slate-100 rounded-lg p-3'>
          <input 
            type="search" 
            className='border-none focus:outline-none bg-transparent w-24 sm:w-36 md:w-64'
            placeholder='search...'
          />
          <FaSearch className='text-slate-600'/>
        </form>

        <div className='hidden sm:flex gap-[20px] font-[500] text-[17px] md:gap-[40px] lg:gap-[60px] flex items-center'>
          <Link to="/" className="text-[#ef4040] hover:text-[#cc0707]">Home</Link>
          <Link to="/about" className='text-[#ef4040] hover:text-[#cc0707]'>About</Link>
          <Link to="/profile" className='hover:text-[#6c6c6c]'>
            {currentUser ? (
              <img src={currentUser.avatar} alt='profile' className='w-10 h-10 rounded-full' /> // Ensure size and style
            ) : (
              <span>Sign in</span> // Use <span> instead of <li>
            )}
          </Link>
        </div>

        <div className='sm:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <img src='../../public/menu.png' alt='menu' className='w-[30px] h-[30px]' />
          </button>
        </div>

        <div className={`absolute top-16 right-4 bg-white p-4 rounded-lg shadow-lg flex flex-col items-center gap-[20px] font-[500] text-[17px] lg:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'}`}>
          <Link to="/" className="text-[#ef4040] hover:text-[#cc0707]">Home</Link>
          <Link to="/about" className='text-[#ef4040] hover:text-[#cc0707]'>About</Link>
          <Link to="/profile" className='hover:text-[#6c6c6c]'>
            {currentUser ? (
              <img src={currentUser.avatar} alt='profile' className='w-8 h-8 rounded-full' /> // Ensure size and style
            ) : (
              <span>Sign in</span> // Use <span> instead of <li>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

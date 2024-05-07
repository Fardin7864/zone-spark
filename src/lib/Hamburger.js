'use client'
import { useState } from 'react';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=' lg:hidden block relative top-1'>
    <div className="relative w-6 h-6" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className={`absolute top-0 left-0 w-full h-[2px] bg-black transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-[8px]' : ''}`}></div>
      <div className={`absolute top-2 left-0 w-full h-[2px] bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
      <div className={`absolute bottom-1 left-0 w-full h-[2px] bg-black transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-[10px]' : ''}`}></div>
    </div>
    </div>
  );
};

export default Hamburger;

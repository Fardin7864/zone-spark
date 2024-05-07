'use client'
import { useState } from 'react';

const Hamburger = ({color, isShow, tailClass}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${isShow ? "block" : "hidden"} ${tailClass} relative top-1`}>
    <div className="relative w-4 h-6" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className={`absolute top-0 left-0 w-full h-[2px] bg-${color} transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-[3px]' : ''}`}></div>
      <div className={`absolute top-[4px] left-0 w-full h-[2px] bg-${color} transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
      <div className={`absolute bottom-[14px] left-0 w-full h-[2px] bg-${color} transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-[5px]' : ''}`}></div>
    </div>
    </div>
  );
};

export default Hamburger;

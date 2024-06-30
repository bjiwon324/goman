// src/components/Dropdown.tsx
import Image from 'next/image';
import React, { useRef, useState } from 'react';

interface DropdownProps {
  options: string[];
  onSelect: (value: string) => void;
}

export default function Dropdown({ options, onSelect } :DropdownProps){
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);


  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative inline-block text-left">
      <button
          type="button"
          className="flex justify-between items-center gap-4 w-full rounded-md px-4 py-2 font-medium bg-pink-200 text-gray-700 hover:bg-pink-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
      >
        <p>{selectedOption ||options[0] } </p>
        <Image className={` dropdwon-rotate-animation ${isOpen ? ' rotate-180' : 'rotate-0'}`} src={'icons/Icon-dropdown-arrow.svg'} alt='메뉴 더 보기' width={16} height={15}/> 
      </button>

      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2 rounded-md shadow-lg text-nowrap bg-white ring-1 ring-black ring-opacity-5">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-center"
              >
                {option}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};


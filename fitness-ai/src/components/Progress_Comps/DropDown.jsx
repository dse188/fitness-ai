import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa';

function DropDown({ options, onSelect }) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedValue(option);
        onSelect(option);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  return (
    <div>
        <div 
        className='dropdown     border rounded-md p-2 bg-zinc-100' 
        ref={dropdownRef}
        >
            <button onClick={toggleDropdown} className='dropdown-button     w-full'>
                <div className='flex justify-between'>
                    {selectedValue || 'select'}
                    <FaAngleDown/>
                </div>
            </button>
        </div>
        {isOpen && (
                <ul className='dropdown-menu bg-zinc-100 border rounded-md mt-2  '>
                    {options.map((option) => (
                        <li 
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className='dropdown-item p-2 hover:bg-sky-500 rounded-md'
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
    </div>
  );
}

export default DropDown
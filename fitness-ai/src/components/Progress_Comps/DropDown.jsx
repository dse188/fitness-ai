import React, { useState, useRef, useEffect } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

function DropDown({ options, onSelect, placeholder }) {
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
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
        <div className="relative" ref={dropdownRef}>
            <button 
                onClick={toggleDropdown} 
                className="w-full p-2 border rounded-md bg-white hover:bg-gray-50 flex justify-between items-center"
            >
                <span>{selectedValue || placeholder}</span>
                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {isOpen && (
                <ul className="absolute z-20 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                    {options.map((option) => (
                        <li 
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className="p-2 hover:bg-blue-50 cursor-pointer"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropDown;
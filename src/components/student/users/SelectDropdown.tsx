// components/SelectDropdown.tsx

import React from 'react';
import { LuFilter } from 'react-icons/lu';
import { IoIosArrowDown } from 'react-icons/io';

interface SelectDropdownProps {
  label: string;
  value: string;
  options: Array<{ value: string; label: string }>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({ label, value, options, onChange }) => {
  return (
    <div className='relative flex items-center border border-gray-300 rounded-md text-gray-600 font-medium'>
      <div className='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none'>
        <LuFilter className='text-gray-500' />
      </div>
      <select
        value={value}
        onChange={onChange}
        className='block appearance-none min-w-max bg-white rounded-md py-2 pl-12 pr-10 text-gray-700 focus:outline-none transition duration-200 ease-in-out'
      >
        <option value="All" className='text-gray-500'>{`Select ${label}`}</option>
        {options.map(option => (
          <option key={option.value} value={option.value} className='text-gray-700'>
            {option.label}
          </option>
        ))}
      </select>
      <div className='absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none'>
        <IoIosArrowDown className='text-gray-500' />
      </div>
    </div>
  );
};

export default SelectDropdown;

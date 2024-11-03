import React from 'react';
import Link from 'next/link';
import { FaPlus } from "react-icons/fa";

interface HeaderProps {
    filterOptions: string[];
    searchQuery: string
    onFilterSelect: (filter: string) => void;
    handleSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DiscussionFilterSection: React.FC<HeaderProps> = ({ filterOptions, onFilterSelect, searchQuery, handleSearchInputChange }) => {
    return (
        <div className="border-b-2 bg-zinc-100 border-gray-200 mb-4 md:py-2">
            <div className="flex justify-between items-center h-10 p-2">
                <div className=" items-center hidden md:flex">
                    {filterOptions.map((option, index) => (
                        <React.Fragment key={index}>
                            <label
                                className="text-xs md:text-sm whitespace-nowrap text-gray-700 cursor-pointer transition duration-500 hover:bg-slate-300 px-2 py-1 rounded-md"
                                onClick={() => onFilterSelect(option)}
                            >
                                {option}
                            </label>
                            {/* {index < filterOptions.length - 1 && (
                                <div className="h-6 w-px bg-gray-600 mx-2" /> // Vertical line
                            )} */}
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        className="border border-gray-300 rounded-md p-2 text-xs md:text-sm w-full"
                        type="text"
                        placeholder="Search topics or comments"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />

                    <Link href="/dashboard/discussions/addQuery" className="bg-gradient-to-r from-blue-500 to-gray-700 text-white rounded px-3 py-1 flex items-center">
                        <span className="text-sm">New</span>
                        <FaPlus className=" pl-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DiscussionFilterSection;

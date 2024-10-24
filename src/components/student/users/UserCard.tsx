import React from 'react';
import images from '@/utils/images';
import Link from 'next/link';
import Image from 'next/image';

interface UserCardProps {
  userData: {
    id: string;
    profileImage: string | null;
    fullName: string;
    passOutYear: number;
    selectedBranch: string;
    position: string;
    links: { type: string; url: string }[];
    username: string;
  };
}

const UserCard: React.FC<UserCardProps> = ({ userData }) => {
  return (
    <div className="user-card bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-60">
      <div className="user-profileImage relative">
        <Image 
          src={userData.profileImage ? userData.profileImage : images.user} 
          alt={userData.fullName} 
          className="w-full h-36 rounded-t-lg object-contain" 
        />
        <div className="passing-year absolute bottom-1 right-1 text-xs bg-black text-white px-2 rounded">
          {userData.passOutYear}
        </div>
      </div>

      {/* <div className="user-details p-2">
        <div className="user-name font-bold text-xl text-green-800">
          {userData.fullName}
        </div>
        <div className="user-branch italic text-gray-600">{userData.selectedBranch}</div>
        <div className="user-specialty text-sm my-2 text-gray-700">{userData.position}</div>
        <div className="user-links flex justify-center space-x-4">
          {userData.links.map((link, index) => (
            <li key={index} className="list-none">
              {link.type === "LinkedIn" && (
                <a href={link.url} className="text-gray-600 hover:text-blue-600">
                  <i className="fab fa-linkedin-in" />
                </a>
              )}
              {link.type === "GitHub" && link.url && (
                <a href={link.url} className="text-gray-600 hover:text-black">
                  <i className="fab fa-github" />
                </a>
              )}
              {link.type === "Twitter" && link.url && (
                <a href={link.url} className="text-gray-600 hover:text-blue-400">
                  <i className="fab fa-twitter" />
                </a>
              )}
              {link.type === "YouTube" && link.url && (
                <a href={link.url} className="text-gray-600 hover:text-red-600">
                  <i className="fab fa-youtube" />
                </a>
              )}
            </li>
          ))}
          <Link href={`/${userData.username}`}>
            <div className="border border-black rounded-full">
              <p className="p-2 text-xs rounded-full duration-500 hover:bg-black hover:text-white hover:shadow-lg cursor-pointer">
                View Profile
              </p>
            </div>
          </Link>
        </div>
      </div> */}
      <div className="user-details p-3">
        <div className="user-name font-bold text-xl text-gray-800">
          {userData.fullName}
        </div>
        <div className="user-branch italic text-gray-500">{userData.selectedBranch}</div>
        <div className="user-specialty text-sm my-1 text-gray-600">{userData.position}</div>
        <div className="user-links flex justify-center space-x-4 mt-3">
          {userData.links.map((link, index) => (
            <li key={index} className="list-none">
              {link.type === "LinkedIn" && (
                <a href={link.url} className="text-gray-600 hover:text-blue-600">
                  <i className="fab fa-linkedin-in" />
                </a>
              )}
              {link.type === "GitHub" && link.url && (
                <a href={link.url} className="text-gray-600 hover:text-black">
                  <i className="fab fa-github" />
                </a>
              )}
              {link.type === "Twitter" && link.url && (
                <a href={link.url} className="text-gray-600 hover:text-blue-400">
                  <i className="fab fa-twitter" />
                </a>
              )}
              {link.type === "YouTube" && link.url && (
                <a href={link.url} className="text-gray-600 hover:text-red-600">
                  <i className="fab fa-youtube" />
                </a>
              )}
            </li>
          ))}
        </div>
        <Link href={`/${userData.username}`}>
          <div className="mt-4">
            <button className="w-full border border-gray-400 rounded-full py-1 text-sm font-semibold text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300">
              View Profile
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};


export default UserCard;




















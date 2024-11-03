import React from 'react';
import Link from 'next/link';
import { BsLinkedin, BsGithub, BsYoutube,  BsTwitter } from 'react-icons/bs';

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
    <div className="user-card bg-white p-1 md:p-4 rounded-lg shadow-lg transition-transform transform md:hover:scale-105 md:w-60">
      <div className=" flex items-center justify-center relative">
        <div className="max-w-sm mx-auto">
          <img
            src={userData?.profileImage || ""}
            alt={userData.fullName}
            className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover"
          />
        </div>
        <div className="passing-year absolute bottom-0 right-50 text-xs bg-black text-white px-2 rounded">
          {userData?.passOutYear}
        </div>
      </div>

      <div className="user-details p-2 text-xs md:text-base">
        <p className="user-name font-bold  text-gray-800">
          {userData.fullName} 
        </p>
        <p className="user-specialty my-1 text-gray-600">{userData.position}</p>
        <p className="user-branch italic text-gray-500">{userData.selectedBranch}</p>

        <div className="user-links flex justify-center space-x-4 mt-3">
          {userData.links.map((link, index) => (
            <li key={index} className="list-none">
              {link.type === "LinkedIn" && (
                <a href={link.url} className="text-gray-600 hover:text-blue-600">
                  <BsLinkedin className="fab fa-linkedin-in" />
                </a>
              )}
              {link.type === "GitHub" && link.url && (
                <a href={link.url} className="text-gray-600 hover:text-black">
                  <BsGithub className="fab fa-github" />
                </a>
              )}
              {link.type === "Twitter" && link.url && (
                <a href={link.url} className="text-gray-600 hover:text-blue-400">
                  <BsTwitter className="fab fa-twitter" />
                </a>
              )}
              {link.type === "YouTube" && link.url && (
                <a href={link.url} className="text-gray-600 hover:text-red-600">
                  <BsYoutube className="fab fa-youtube" />
                </a>
              )}
            </li>
          ))}
        </div>
        <Link href={`/user/${userData.username}`}>
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




















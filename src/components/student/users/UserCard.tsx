import React from 'react';
import Link from 'next/link';
import { BsLinkedin, BsGithub, BsYoutube, BsTwitter } from 'react-icons/bs';
import { getFullName } from '@/utils/getFullName';

interface UserCardProps {
  userData: {
    _id: string,
    username: string,
    email: string,
    firstname: string,
    lastname: string,
    profileImage: string | null,
    middlename: string | null,
    profession: string,
    position: string,
    passoutYear: number,
    links: { type: string; url: string }[];
    branchName: string,
    coursesName: string
  };
}

const UserCard: React.FC<UserCardProps> = ({ userData }) => {
  return (
    <div className="user-card bg-white p-1 md:p-4 rounded-lg shadow-lg transition-transform transform md:hover:scale-105 md:w-60">
      <div className=" flex items-center justify-center relative">
        <div className="max-w-sm mx-auto">
          <img
            src={userData?.profileImage || `https://api.dicebear.com/5.x/initials/svg?seed=${userData.firstname}`}
            alt={userData.username}
            className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover"
          />
        </div>
        <div className="passing-year absolute bottom-0 right-50 text-xs bg-black text-white px-2 rounded">
          {userData?.passoutYear}
        </div>
      </div>

      <div className="user-details p-2 text-xs md:text-base">
        <p className="user-name font-bold  text-gray-800">
          {getFullName(userData.firstname, userData.middlename, userData.lastname)}
        </p>
        <p className="user-specialty my-1 text-gray-600">{userData.position}</p>
        <p className="user-branch italic text-gray-500">{userData.branchName}</p>

        <div className="user-links flex justify-center space-x-4 mt-3">
          {userData.links && Object.keys(userData.links).length > 0 ? (
            Object.keys(userData.links).map((key, index) => {
              const url = userData.links[key as keyof typeof userData.links];

              // Check if url is a string before rendering
              if (typeof url !== 'string') return null;

              return (
                <li key={index} className="list-none text-xl">
                  {key === "linkedin" && url && (
                    <a href={url} className="text-gray-600 hover:text-blue-600">
                      <BsLinkedin />
                    </a>
                  )}
                  {key === "github" && url && (
                    <a href={url} className="text-gray-600 hover:text-black">
                      <BsGithub />
                    </a>
                  )}
                  {key === "twitter" && url && (
                    <a href={url} className="text-gray-600 hover:text-blue-400">
                      <BsTwitter />
                    </a>
                  )}
                  {key === "youtube" && url && (
                    <a href={url} className="text-gray-600 hover:text-red-600">
                      <BsYoutube />
                    </a>
                  )}
                </li>
              );
            })
          ) : (
            <p>No user links available</p>
          )}
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




















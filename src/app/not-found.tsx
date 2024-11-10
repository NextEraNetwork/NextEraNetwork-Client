import React from 'react';
import { FaHome } from 'react-icons/fa'; // Home icon from React Icons
import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50 p-6">
      {/* Emoji and Heading */}
      <div className="text-6xl mb-4">
        <span role="img" aria-label="Sad Face">😞</span> {/* Sad Emoji */}
      </div>
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">404 - Page Not Found</h1>
      
      {/* Subtext */}
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      {/* Call to Action */}
      <Link href="/">
        <div className="flex items-center justify-center text-indigo-600 font-semibold text-lg hover:text-indigo-700 transition duration-300">
          <FaHome className="mr-2" /> {/* Home Icon */}
          Go back to Home
        </div>
      </Link>

      {/* Optional: Add a 'thinking' emoji */}
      <div className="text-4xl mt-8 text-gray-500">
        <span role="img" aria-label="Thinking">🤔</span>
      </div>
    </div>
  );
};

export default Custom404;

import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import React from 'react';

const ComingSoon: React.FC = () => {
    return (
        <div className=" flex items-center justify-center  bg-gray-100">
            <div className="bg-white rounded-lg shadow-xl p-8 text-center flex flex-col items-center justify-center w-full h-screen">
                <div className="mb-6">
                    <div className="text-6xl font-extrabold text-indigo-600 mb-4">🚧</div>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                        This Feature is Coming Soon
                    </h2>
                    <p className="text-lg text-gray-500 mb-6">
                        We&apos;re working hard to bring you this feature. Stay tuned and check back later.
                    </p>
                </div>

                <div className="space-y-4">
                    {/* Call to Action Button */}
                    <a
                        href="#"
                        className="inline-block bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
                    >
                        Get Notified
                    </a>

                    {/* Or alternative call to action */}
                    <div className="text-sm text-gray-500">
                        Want to stay updated? Follow us on our social media!
                    </div>

                    <div className="flex justify-center space-x-4 mt-4">
                        {/* LinkedIn Icon */}
                        <a
                            href="https://www.linkedin.com/in/jinesh-prajapat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-indigo-600"
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </a>

                        {/* Instagram Icon */}
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-indigo-600"
                        >
                            <FaInstagram className="w-6 h-6" />
                        </a>

                        {/* Twitter Icon */}
                        <a
                            href="https://www.twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-indigo-600"
                        >
                            <FaTwitter className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;

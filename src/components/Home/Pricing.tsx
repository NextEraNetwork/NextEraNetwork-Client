'use client';
import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-700 py-16 scroll-mt-14">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 text-center transform transition-all hover:scale-105">
        Unlock Exclusive Features for Your Alumni Community
      </h1>
      <p className="text-lg md:text-xl text-white font-light mb-12 text-center max-w-2xl">
        Choose a subscription that fits your needs and start building connections with an extensive alumni network!
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/** Basic Plan */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-80 transform transition-all hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Basic Plan</h3>
          <p className="text-center text-3xl font-semibold text-cyan-500 mb-4">₹499 / month</p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <FaCheck className="text-cyan-500 mr-2" /> Profile Creation & Browsing
            </li>
            <li className="flex items-center">
              <FaCheck className="text-cyan-500 mr-2" /> Job & Internship Sharing
            </li>
            <li className="flex items-center">
              <FaTimes className="text-red-500 mr-2" /> Real-Time Chat
            </li>
            <li className="flex items-center">
              <FaTimes className="text-red-500 mr-2" /> Placement Statistics
            </li>
          </ul>
          <button className="w-full mt-8 py-2 px-4 text-white font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300">
            Get Started
          </button>
        </div>

        {/** Professional Plan */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-80 transform transition-all hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Professional Plan</h3>
          <p className="text-center text-3xl font-semibold text-cyan-500 mb-4">₹999 / month</p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <FaCheck className="text-cyan-500 mr-2" /> Profile Creation & Browsing
            </li>
            <li className="flex items-center">
              <FaCheck className="text-cyan-500 mr-2" /> Job & Internship Sharing
            </li>
            <li className="flex items-center">
              <FaCheck className="text-cyan-500 mr-2" /> Real-Time Chat
            </li>
            <li className="flex items-center">
              <FaTimes className="text-red-500 mr-2" /> Advanced Analytics
            </li>
          </ul>
          <button className="w-full mt-8 py-2 px-4 text-white font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300">
            Choose Professional
          </button>
        </div>

        {/** Premium Plan */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-80 transform transition-all hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Premium Plan</h3>
          <p className="text-center text-3xl font-semibold text-cyan-500 mb-4">₹1999 / month</p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <FaCheck className="text-cyan-500 mr-2" /> Profile Creation & Browsing
            </li>
            <li className="flex items-center">
              <FaCheck className="text-cyan-500 mr-2" /> Job & Internship Sharing
            </li>
            <li className="flex items-center">
              <FaCheck className="text-cyan-500 mr-2" /> Real-Time Chat
            </li>
            <li className="flex items-center">
              <FaCheck className="text-cyan-500 mr-2" /> Advanced Analytics
            </li>
            <li className="flex items-center">
              <FaCheck className="text-cyan-500 mr-2" /> Dedicated Support
            </li>
          </ul>
          <button className="w-full mt-8 py-2 px-4 text-white font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300">
            Go Premium
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

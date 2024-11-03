'use client';
import React from 'react';
import Link from 'next/link';

const HelpCenter: React.FC = () => {
  const userName = typeof window !== 'undefined' ? localStorage.getItem("userName") : '';
  const appURL = 'http://localhost:3000/dashboard'

  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Help Center</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Account Settings:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">
            <Link href={`${appURL}/setting/security/resetPassword`} className="text-blue-500 hover:underline">Change Password</Link>
          </li>
          <li className="mb-2">
            <Link href={`${appURL}/setting/security/resetUsername`} className="text-blue-500 hover:underline">Change Username</Link>
          </li>
          <li className="mb-2">
            <Link href={`${appURL}/setting/security/changeEmail`} className="text-blue-500 hover:underline">Change Email</Link>
          </li>
          <li className="mb-2">
            <Link href={`${appURL}/${userName}/Update`} className="text-blue-500 hover:underline">Profile Settings</Link>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">About Us:</h3>
        <p className="mb-4">
          Welcome to our website! We are dedicated to providing a seamless and enjoyable experience for all our users.
        </p>
        <p className="mb-4">
          For any inquiries or assistance, please contact our Help Center at <a href="mailto:help@website.com" className="text-blue-500 hover:underline">help@website.com</a>.
        </p>
      </div>
      <div>
        {/* <h3 className="text-lg font-semibold mb-2">More Information:</h3> */}
        {/* Add more information as needed */}
      </div>
    </div>
  );
};

export default HelpCenter;

import React from 'react';

const PortfolioVisibility: React.FC = () => {
  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow-md font-sans">
      <h2 className="text-2xl font-semibold mb-4">Portfolio Viewing</h2>
      <div className="mb-4">
        <p className="text-gray-600 mb-2">
          Our platform allows registered users to view portfolios uploaded by other users. 
          Once a user's portfolio is made public, it can be viewed by anyone with access to the platform.
        </p>
        <p className="text-gray-600 mb-2">
          Registered users also have the option to download portfolios for offline viewing and share them with others.
          However, users must adhere to our terms and conditions regarding the appropriate use of shared portfolios.
        </p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600 mb-2">
          The portfolio viewing feature enhances networking opportunities and facilitates the sharing of professional 
          experiences and qualifications among users on our platform.
        </p>
        <p className="text-gray-600 mb-2">
          For further details regarding portfolio viewing permissions and sharing policies, please refer to our terms and conditions.
        </p>
      </div>
    </div>
  );
};

export default PortfolioVisibility;

import React from 'react';

const UserAgreement: React.FC = () => {
  return (
    <div className="mx-auto p-6rounded-lg shadow-md font-sans">
      <h2 className="text-2xl font-semibold mb-4">User Agreement</h2>
      <p className="mb-4">
        By signing up for our community website, you agree to abide by the following terms and conditions:
      </p>
      <ol className="list-decimal ml-6 mb-4">
        <li className="mb-2"><b>Respectful Behavior:</b> Treat all members with respect and courtesy.</li>
        <li className="mb-2"><b>No Harassment:</b> Do not engage in any form of harassment, bullying, or discrimination.</li>
        <li className="mb-2"><b>Content Guidelines:</b> Adhere to our content guidelines, avoiding offensive, illegal, or harmful content.</li>
        <li className="mb-2"><b>Privacy:</b> Respect the privacy of other members and refrain from sharing personal information without consent.</li>
        <li className="mb-2"><b>Intellectual Property:</b> Do not infringe upon the intellectual property rights of others.</li>
        <li className="mb-2"><b>Moderation:</b> Accept that our moderators may take action, including removal of content or suspension of accounts, for violations of these terms.</li>
        <li className="mb-2"><b>Age Requirement:</b> Users must be at least 13 years old to create an account.</li>
        <li className="mb-2"><b>Legal Compliance:</b> Agree to comply with all applicable laws and regulations.</li>
      </ol>
      <p className="mb-4">
        Violation of these terms may result in the termination of your account. By signing up, you acknowledge that you have read, understood, and agree to these terms and conditions.
      </p>
    </div>
  );
};

export default UserAgreement;

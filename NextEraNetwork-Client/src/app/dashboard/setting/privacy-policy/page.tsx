// app/privacy-policy/page.tsx
'use client';
import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction & Data Collection</h2>
        <p className="mb-4">
          Welcome to our platform. This Privacy Policy explains how we collect, use, and share your personal information.
          Your privacy is important to us, and we are committed to protecting your data.
        </p>
        <h3 className="text-xl font-semibold mb-2">1. Information We Collect</h3>
        <ul className="list-disc ml-5 mb-4">
          <li><strong>Personal Information:</strong> such as name, email, contact details, and educational background.</li>
          <li><strong>Usage Data:</strong> includes information on how you use our platform, features accessed, etc.</li>
          <li><strong>Cookies and Tracking:</strong> used to enhance your experience on our platform.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Usage & Sharing</h2>
        <h3 className="text-xl font-semibold mb-2">2. How We Use Your Information</h3>
        <ul className="list-disc ml-5 mb-4">
          <li>To provide you with access to our platform and its services.</li>
          <li>To enhance our services based on your preferences and feedback.</li>
          <li>To communicate updates, changes, or important notices.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">3. Data Sharing</h3>
        <p className="mb-4">
          We do not sell your information to third parties. We may share your information with:
        </p>
        <ul className="list-disc ml-5 mb-4">
          <li><strong>Service Providers:</strong> who help us operate our platform (e.g., hosting, analytics).</li>
          <li><strong>Legal Compliance:</strong> as required by law to protect rights and ensure safety.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Security & Rights</h2>
        <h3 className="text-xl font-semibold mb-2">4. Security of Your Information</h3>
        <p className="mb-4">
          We take reasonable precautions to protect your information from unauthorized access, disclosure, or destruction.
          Our platform utilizes encryption and secure protocols to maintain data integrity.
        </p>
        <h3 className="text-xl font-semibold mb-2">5. Your Privacy Rights</h3>
        <ul className="list-disc ml-5 mb-4">
          <li><strong>Access & Update:</strong> You have the right to access and update your information.</li>
          <li><strong>Deletion:</strong> You may request deletion of your personal information.</li>
          <li><strong>Opt-out:</strong> You can opt out of marketing communications.</li>
        </ul>
        <p className="mb-4">
          If you have questions or concerns regarding your data, please contact our support team.
        </p>
      </section>

      <div className="text-center mt-10">
        <Link href="/">
          <span className="text-cyan-600 hover:underline">Back to Home</span>
        </Link>
      </div>
    </div>
  );
}

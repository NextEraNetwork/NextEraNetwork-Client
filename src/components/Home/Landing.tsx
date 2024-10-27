'use client'
import React from 'react';
import Testimonials from './Testimonials';
import Feature from './Features';

const LandingPage: React.FC = () => {
    return (
        <div>
            <header className="flex flex-col items-center justify-center h-screen bg-teal-500 text-white">
                <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
                    Unlock Your Potential with Our Alumni Platform
                </h1>
                <p className="text-xl md:text-2xl text-center mb-6 max-w-2xl">
                    Connect with peers, find mentorship, and access exclusive job opportunities tailored just for you.
                </p>
                <button
                    className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-gray-200"
                >
                    Request Demo
                </button>
            </header>

            <Feature/>
            {/*  Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto w-full max-w-7xl text-center">
                    <h2 className="text-4xl font-bold mb-10">Why Choose Our Platform?</h2>
                    <p className="text-lg mb-6">
                        Our platform is designed to empower colleges and organizations to foster strong connections with their alumni networks without any technical hassle.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-2xl font-semibold mb-4">No-Code Solution</h3>
                            <p className="text-gray-700">
                                Easily create and manage your alumni platform without needing any coding skills. Focus on what matters most: your community.
                            </p>
                        </div>
                        <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-2xl font-semibold mb-4">Fully Customizable</h3>
                            <p className="text-gray-700">
                                Tailor the platform to meet your specific needs and branding, ensuring it reflects your institution's identity and values.
                            </p>
                        </div>
                        <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-2xl font-semibold mb-4">Streamlined Communication</h3>
                            <p className="text-gray-700">
                                Foster engagement between alumni, current students, and administration, creating a vibrant community that thrives on connection.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Testimonials Section */}
            <Testimonials/>

            {/* Call to Action */}
            <footer className="py-20 bg-blue-600 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="mb-6">Join a community that empowers and supports you!</p>
                <a
                    href="/signup"
                    className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-gray-200"
                >
                    Sign Up Today
                </a>
            </footer>
        </div>
    );
};

export default LandingPage;

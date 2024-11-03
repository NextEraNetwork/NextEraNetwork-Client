'use state'
import React, { useEffect, useRef } from 'react';

interface Testimonial {
    quote: string;
    name: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "This platform has completely transformed my career! I've connected with so many amazing people.This platform has completely transformed my career! I've connected with so many amazing people.This platform has completely transformed my career! I've connected with so many amazing people.",
        name: "— John Doe"
    },
    {
        quote: "I found my dream job through the alumni network! Highly recommend it! This platform has completely transformed my career! I've connected with so many amazing people.",
        name: "— Jane Smith"
    },
    {
        quote: "An invaluable resource for staying connected with my alma mater.This platform has completely transformed my career! I've connected with so many amazing people.",
        name: "— Mark Johnson"
    },
    {
        quote: "The community support has been incredible. I feel empowered!This platform has completely transformed my career! I've connected with so many amazing people.",
        name: "— Emily Davis"
    },
    {
        quote: "This platform has completely transformed my career! I've connected with so many amazing people.This platform has completely transformed my career! I've connected with so many amazing people.",
        name: "— John Doe"
    },
    {
        quote: "I found my dream job through the alumni network! Highly recommend it!",
        name: "— Jane Smith"
    },
    {
        quote: "An invaluable resource for staying connected with my alma mater.",
        name: "— Mark Johnson"
    },
    {
        quote: "The community support has been incredible. I feel empowered!",
        name: "— Emily Davis"
    },
    {
        quote: "This platform has completely transformed my career! I've connected with so many amazing people.",
        name: "— John Doe"
    },
    {
        quote: "I found my dream job through the alumni network! Highly recommend it!",
        name: "— Jane Smith"
    },
    {
        quote: "An invaluable resource for staying connected with my alma mater.",
        name: "— Mark Johnson"
    },
    {
        quote: "The community support has been incredible. I feel empowered!",
        name: "— Emily Davis"
    }

];

const Testimonials: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (containerRef.current) {
                containerRef.current.scrollBy({
                    left: containerRef.current.clientWidth,
                    behavior: 'smooth'
                });
            }
        }, 5000); // Scroll every 3 seconds

        return () => clearInterval(scrollInterval); // Clean up on unmount
    }, []);

    return (
        <section id="customers" className="py-20 bg-gray-100 scroll-mt-14">
            <div className="container mx-auto text-center ">
                <h2 className="text-4xl font-bold mb-10">What Our Users Say</h2>
                <div
                    ref={containerRef}
                    className="flex overflow-x-auto scroll-smooth space-x-6 pb-4 scrollbar"
                    // style={{ scrollBehavior: 'smooth' }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-80 p-6 bg-white border rounded-lg shadow-md flex-none"
                        >
                            <p className="italic text-gray-600 mb-4">
                                {testimonial.quote}
                            </p>
                            <p className="font-bold">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

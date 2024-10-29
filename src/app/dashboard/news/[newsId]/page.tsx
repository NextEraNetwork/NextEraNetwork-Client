import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function NewsDetail({
    params
}: {
    params: { discussionTitle: string }
}) {

    // Dummy data for demonstration
    const newsData = {
        id: "1",
        title: "New Campus Initiative Launched",
        content: "The college has launched a new initiative to enhance student engagement and participation. The college has launched a new initiative to enhance student engagement and participation...",
        createdAt: new Date().toISOString(),
        image: "https://via.placeholder.com/800",
        pdf: "https://example.com/sample.pdf", // Optional PDF link
        tags: ["Campus", "Initiative"],
    };

    console.log("params", params)

    return (
        <div className="container mx-auto p-6">
            <Link href="/news" className="flex items-center text-gray-600 hover:text-blue-600 mb-4">
                <FaArrowLeft className="mr-2" />
                Back to News
            </Link>
            <h1 className="text-3xl font-bold mb-4">{newsData.title}</h1>
            <span className="text-gray-500 text-sm mb-4">
                {new Date(newsData.createdAt).toLocaleDateString()}
            </span>
            <div className="my-4">
                {newsData.tags && newsData.tags.length > 0 && (
                    <div className="flex space-x-2">
                        {newsData.tags.map((tag, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {newsData.image && (
                <div className="mb-4">
                    <Image src={newsData.image} alt={newsData.title} width={800} height={400} className="rounded-lg" />
                </div>
            )}
            <p className="text-gray-700 mb-4">{newsData.content}</p>
            {newsData.pdf && (
                <a href={newsData.pdf} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Download PDF
                </a>
            )}
        </div>
    );
};

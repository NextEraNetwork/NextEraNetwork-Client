// components/NewsCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NewsCardProps {
    title: string;
    content: string;
    createdAt: Date;
    image?: string;
    tags?: string[];
    id: string; // Assuming each news item has a unique ID for routing
}

const NewsCard: React.FC<NewsCardProps> = ({ title, content, createdAt, image, tags, id }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {image && <img src={image} alt={title} className="w-full h-48 lg:h-64 object-cover" />}
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-4 overflow-hidden">{content}</p>
                <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                        {new Date(createdAt).toLocaleDateString()}
                    </span>
                    {tags && tags.length > 0 && (
                        <div className="flex space-x-2">
                            {tags.map((tag, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                <Link href={`/news/${id}`} className="mt-4 inline-block text-blue-500 font-semibold hover:underline">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default NewsCard;

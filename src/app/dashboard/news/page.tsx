'use client';
import React, { useState } from 'react';
import NewsCard from '@/components/student/News/NewsCard';

interface NewsItem {
    title: string;
    content: string;
    createdAt: Date;
    image?: string;
    tags?: string[];
    id: string
}

const newsData = [
    {
        title: "New Campus Initiative Launched",
        content: "The college has launched a new initiative to enhance student engagement and participation. The college has launched a new initiative to enhance student engagement and participationThe college has launched a new initiative to enhance student engagement and participationThe college has launched a new initiative to enhance student engagement and participationThe college has launched a new initiative to enhance student engagement and participation",
        createdAt: new Date(),
        image: "https://via.placeholder.com/400",
        tags: ["Campus", "Initiative"],
        id : "1"
    },
    {
        title: "Upcoming Job Fair",
        content: "Join us for the upcoming job fair where you can meet potential employers and learn about job opportunitieThe college has launched a new initiative to enhance student engagement and participationThe college has launched a new initiative to enhance student engagement and participationThe college has launched a new initiative to enhance student engagement and participation.",
        createdAt: new Date(),
        image: "https://via.placeholder.com/400",
        tags: ["Jobs", "Events"],
        id : "1"
    },
    {
        title: "New Campus Initiative Launched",
        content: "The college has launched a new initiative to enhance student engagement and participation The college has launched a new initiative to enhance student engagement and participationThe college has launched a new initiative to enhance student engagement and participationThe college has launched a new initiative to enhance student engagement and participation",
        createdAt: new Date(),
        image: "https://via.placeholder.com/400",
        tags: ["Campus", "Initiative"],
        id : "1"
    },
    {
        title: "Upcoming Job Fair",
        content: "Join us for the upcoming job fair where you can meet potential employers and learn about job opportunities...",
        createdAt: new Date(),
        image: "https://via.placeholder.com/400",
        tags: ["Jobs", "Events"],
        id : "1"
    },
    {
        title: "New Campus Initiative Launched",
        content: "The college has launched a new initiative to enhance student engagement and participation...",
        createdAt: new Date(),
        image: "https://via.placeholder.com/400",
        tags: ["Campus", "Initiative"],
        id : "1"
    },
    {
        title: "Upcoming Job Fair",
        content: "Join us for the upcoming job fair where you can meet potential employers and learn about job opportunities...",
        createdAt: new Date(),
        image: "https://via.placeholder.com/400",
        tags: ["Jobs", "Events"],
        id : "1"
    },
    {
        title: "New Campus Initiative Launched",
        content: "The college has launched a new initiative to enhance student engagement and participation...",
        createdAt: new Date(),
        image: "https://via.placeholder.com/400",
        tags: ["Campus", "Initiative"],
        id : "1"
    },
    {
        title: "Upcoming Job Fair",
        content: "Join us for the upcoming job fair where you can meet potential employers and learn about job opportunities...",
        createdAt: new Date(),
        image: "https://via.placeholder.com/400",
        tags: ["Jobs", "Events"],
        id : "1"
    },
    {
        title: "New Campus Initiative Launched",
        content: "The college has launched a new initiative to enhance student engagement and participation...",
        createdAt: new Date(),
        image: "https://via.placeholder.com/400",
        tags: ["Campus", "Initiative"],
        id : "1"
    },
    {
        title: "Upcoming Job Fair",
        content: "Join us for the upcoming job fair where you can meet potential employers and learn about job opportunities...",
        createdAt: new Date(),
        image: "https://via.placeholder.com/400",
        tags: ["Jobs", "Events"],
        id : "1"
    },
    {
        title: "New Campus Initiative Launched",
        content: "The college has launched a new initiative to enhance student engagement and participation...",
        createdAt: new Date(),
        image: "https://via.placeholder.com/400",
        tags: ["Campus", "Initiative"],
        id : "1"
    },
    {
        title: "Upcoming Job Fair",
        content: "Join us for the upcoming job fair where you can meet potential employers and learn about job opportunities...",
        createdAt: new Date(),
        image: "https://via.placeholder.com/400",
        tags: ["Jobs", "Events"],
        id : "1"
    },

    // Add more dummy data as needed
];

const News: React.FC = () => {
    const [newsItems, setNewsItems] = useState<NewsItem[]>(newsData);
    // const [loading, setLoading] = useState(false);

    // setNewsItems(newsData);

    // useEffect(() => {
    //     const fetchNews = async () => {
    //         // Replace this URL with your actual API endpoint
    //         const response = await fetch('/api/news');
    //         const data = await response.json();
    //         setNewsItems(data);
    //         setLoading(false);
    //     };

    //     fetchNews();
    // }, []);

    // if (loading) {
    //     return <div className="text-center">Loading...</div>;
    // }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Latest News</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.map((news, index) => (
                    <NewsCard key={index} {...news} />
                ))}
            </div>
        </div>
    );
};

export default News;

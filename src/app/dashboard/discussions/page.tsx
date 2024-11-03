'use client';
import React, { useState, useEffect } from "react";
import DiscussionFilterSection from "@/components/student/Discussions/DiscussionFilterSection";
import DiscussionList from "@/components/student/Discussions/DiscussionList";
import Pagination from "@/components/student/Questions/Pagination";

const discussionTopicData = [
    {
        userId: { username: "user1", profileImage: "images.jinesh" },
        discussTitle: "You may not find ISO file.  You may not find ISO file. helloYou may not find ISO file. helloYou may not find ISO file. helloYou may not find ISO file. hello",
        discussDescription: "Some description about ISO file.Some description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO file [...]",
        upvotes: 24,
        views: 305,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user2", profileImage: "images.jinesh" },
        discussTitle: "Equal tree partition.",
        discussDescription: "Discussion about equal tree partition.Some description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO file [...]",
        upvotes: 12,
        views: 150,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user1", profileImage: "images.jinesh" },
        discussTitle: "You may not find ISO file.",
        discussDescription: "Some description about ISO file. Discussion about equal tree partition.Some description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileDiscussion about equal tree partition.Some description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO file[...]",
        upvotes: 24,
        views: 305,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user2", profileImage: "images.jinesh" },
        discussTitle: "Equal tree partition.",
        discussDescription: "Discussion about equal tree partition.Discussion about equal tree partition.Some description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO file [...]",
        upvotes: 12,
        views: 150,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user1", profileImage: "images.jinesh" },
        discussTitle: "You may not find ISO file.",
        discussDescription: "Some description about ISO file.Discussion about equal tree partition.Some description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO file [...]",
        upvotes: 24,
        views: 305,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user2", profileImage: "images.jinesh" },
        discussTitle: "Equal tree partition.",
        discussDescription: "Discussion about equal tree partition.Discussion about equal tree partition.Some description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO file [...]",
        upvotes: 12,
        views: 150,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user1", profileImage: "images.jinesh" },
        discussTitle: "You may not find ISO file.",
        discussDescription: "Some description about ISO file.Discussion about equal tree partition.Some description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO file [...]",
        upvotes: 24,
        views: 305,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user2", profileImage: "images.jinesh" },
        discussTitle: "Equal tree partition.",
        discussDescription: "Discussion about equal tree partition.Discussion about equal tree partition.Some description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO fileSome description about ISO file [...]",
        upvotes: 12,
        views: 150,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user1", profileImage: "images.jinesh" },
        discussTitle: "You may not find ISO file.",
        discussDescription: "Some description about ISO file. [...]",
        upvotes: 24,
        views: 305,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user2", profileImage: "images.jinesh" },
        discussTitle: "Equal tree partition.",
        discussDescription: "Discussion about equal tree partition. [...]",
        upvotes: 12,
        views: 150,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user1", profileImage: "images.jinesh" },
        discussTitle: "You may not find ISO file.",
        discussDescription: "Some description about ISO file. [...]",
        upvotes: 24,
        views: 305,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user2", profileImage: "images.jinesh" },
        discussTitle: "Equal tree partition.",
        discussDescription: "Discussion about equal tree partition. [...]",
        upvotes: 12,
        views: 150,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user1", profileImage: "images.jinesh" },
        discussTitle: "You may not find ISO file.",
        discussDescription: "Some description about ISO file. [...]",
        upvotes: 24,
        views: 305,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user2", profileImage:" images.jinesh" },
        discussTitle: "Equal tree partition.",
        discussDescription: "Discussion about equal tree partition. [...]",
        upvotes: 12,
        views: 150,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user1", profileImage: "images.jinesh" },
        discussTitle: "You may not find ISO file.",
        discussDescription: "Some description about ISO file. [...]",
        upvotes: 24,
        views: 305,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user2", profileImage: "images.jinesh" },
        discussTitle: "Equal tree partition.",
        discussDescription: "Discussion about equal tree partition. [...]",
        upvotes: 12,
        views: 150,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user1", profileImage: "images.jinesh" },
        discussTitle: "You may not find ISO file.",
        discussDescription: "Some description about ISO file. [...]",
        upvotes: 24,
        views: 305,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user2", profileImage: "images.jinesh" },
        discussTitle: "Equal tree partition.",
        discussDescription: "Discussion about equal tree partition. [...]",
        upvotes: 12,
        views: 150,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user1", profileImage: "images.jinesh" },
        discussTitle: "You may not find ISO file.",
        discussDescription: "Some description about ISO file. [...]",
        upvotes: 24,
        views: 305,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user2", profileImage: "images.jinesh "},
        discussTitle: "Equal tree partition.",
        discussDescription: "Discussion about equal tree partition. [...]",
        upvotes: 12,
        views: 150,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user1", profileImage: "images.jinesh" },
        discussTitle: "You may not find ISO file.",
        discussDescription: "Some description about ISO file. [...]",
        upvotes: 24,
        views: 305,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user2", profileImage: "images.jinesh" },
        discussTitle: "Equal tree partition.",
        discussDescription: "Discussion about equal tree partition. [...]",
        upvotes: 12,
        views: 150,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user1", profileImage: "images.jinesh" },
        discussTitle: "You may not find ISO file.",
        discussDescription: "Some description about ISO file. [...]",
        upvotes: 24,
        views: 305,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user2", profileImage: "images.jinesh" },
        discussTitle: "Equal tree partition.",
        discussDescription: "Discussion about equal tree partition. [...]",
        upvotes: 12,
        views: 150,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user1", profileImage: "images.jinesh" },
        discussTitle: "You may not find ISO file.",
        discussDescription: "Some description about ISO file. [...]",
        upvotes: 24,
        views: 305,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user2", profileImage: "images.jinesh" },
        discussTitle: "Equal tree partition.",
        discussDescription: "Discussion about equal tree partition. [...]",
        upvotes: 12,
        views: 150,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user1", profileImage: "images.jinesh" },
        discussTitle: "You may not find ISO file.",
        discussDescription: "Some description about ISO file. [...]",
        upvotes: 24,
        views: 305,
        createdAt: new Date().toISOString(),
    },
    {
        userId: { username: "user2", profileImage: "images.jinesh" },
        discussTitle: "Equal tree partition.",
        discussDescription: "Discussion about equal tree partition. [...]",
        upvotes: 12,
        views: 150,
        createdAt: new Date().toISOString(),
    },
    // Add more dummy data as needed
];

const Discuss: React.FC = ({
    searchParams
}: {
    searchParams?: {
        page?: string;
    };
}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTopics, setFilteredTopics] = useState(discussionTopicData);

    const filterOptions = ["Hot", "Newest to Oldest", "Most Votes"];

    useEffect(() => {
        // setIsLoading(false);
    }, []);

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);
        filterTopics(query);
    };

    const filterTopics = (query: string) => {
        if (query.trim() === '') {
            setFilteredTopics(discussionTopicData);
        } else {
            const filtered = discussionTopicData.filter(topic =>
                topic.discussTitle.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredTopics(filtered);
        }
    };

    const handleFilterSelect = (filter: string) => {
        console.log(`Selected filter: ${filter}`);
        // Implement sorting logic based on the selected filter
    };

    // Pagination Logic
    const currentPage = Number(searchParams?.page) || 1;
    const discussionsPerPage = 10;
    const totalPages = Math.ceil(filteredTopics.length / discussionsPerPage);

    // Calculating the index of the last discussion for the current page
    const indexOfLastDiscussion = currentPage * discussionsPerPage;
    const indexOfFirstDiscussion = indexOfLastDiscussion - discussionsPerPage;

    // Getting the current discussions based on pagination
    const currentDiscussions = filteredTopics.slice(indexOfFirstDiscussion, indexOfLastDiscussion);

    return (
        <div className="flex h-full">
            <div className="flex flex-col bg-white rounded-lg shadow-md md:p-6 w-full h-full">
                {/* Header */}
                <DiscussionFilterSection
                    filterOptions={filterOptions}
                    onFilterSelect={handleFilterSelect}
                    searchQuery={searchQuery}
                    handleSearchInputChange={handleSearchInputChange}
                />

                {/* Discussion List */}
                <div className="flex-grow overflow-auto scrollbar">
                    <DiscussionList discussions={currentDiscussions} />
                </div>

                {/* Pagination Controls (Optional) */}
                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={totalPages} />
                </div>
            </div>
        </div>
    );
};

export default Discuss;

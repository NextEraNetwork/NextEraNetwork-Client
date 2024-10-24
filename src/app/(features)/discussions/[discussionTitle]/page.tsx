'use client';
import React, { useState } from "react";
import { formatTimeAgo } from "@/app/lib/utils";
import { BiSolidUpvote } from "react-icons/bi";
import { bookmarkOutline, bookmark } from "ionicons/icons";
import { FaEye } from "react-icons/fa";
import CommentList from "@/components/student/Discussions/CommentList";
import Image from "next/image";

interface User {
    username: string;
    profileImage: string;
}

interface Discussion {
    _id: string;
    discussTitle: string;
    discussDescription: string;
    createdAt: string;
    userId: User;
    upvotes: string[];
    views: number;
}

export default function DiscussionTopicDetail({
    params
}: {
    params: { discussionTitle: string }
}) {

    const [discussionTopic] = useState<Discussion>({
        _id: "1",
        discussTitle: "Understanding React Context API",
        discussDescription: "<p>This is a detailed description about the context API in React This is a detailed description about the context API in React...</p>",
        createdAt: new Date().toISOString(),
        userId: {
            username: "Jinesh Prajapat",
            profileImage: "https://via.placeholder.com/150"
        },
        upvotes: ["user1", "user2"],
        views: 300,
    });

    const [bookmarkState, setBookmarkState] = useState(false);

    const handleClose = () => {
        // router.back();
    };

    const handleUpvoteClick = () => {
        console.log("Upvoted!");
        // Implement upvote functionality
    };

    const handleBookMark = () => {
        setBookmarkState(!bookmarkState);
        console.log(bookmarkState ? "Removed from bookmarks" : "Bookmarked!");
    };

    return (
        <div className="flex justify-center w-full h-full">
            <div className="w-full  p-6 bg-white rounded-lg shadow-lg overflow-hidden">
                <div className='flex'>
                    {/* upvotes and bookmark left */}
                    <div className="pt-2 pr-3">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <BiSolidUpvote
                                    className="p-2 text-sm bg-slate-200 text-slate-600 rounded-sm duration-500 cursor-pointer hover:bg-slate-300 hover:text-slate-800"
                                    onClick={handleUpvoteClick}
                                />
                                <div className="ml-2">{discussionTopic.upvotes.length}</div>
                            </div>
                            <div className="pt-5">
                                <Image src={bookmarkOutline}
                                    alt="bookmark"
                                    className={`p-2 bg-slate-200 rounded-sm duration-500 cursor-pointer hover:bg-slate-300 ${bookmarkState ? "fa-solid fa-bookmark text-slate-600" : "fa-regular fa-bookmark text-slate-800"}`}
                                    onClick={handleBookMark}
                                />
                            </div>
                        </div>
                    </div>

                    {/* right part profile, title description */}
                    <div className="flex-1 ">
                        <div className="flex items-center justify-between border-b pb-2">
                            <h2 className='text-lg font-semibold'>{discussionTopic.discussTitle}</h2>
                            <span
                                className=' bg-slate-200 font-bold p-2 rounded-md hover:bg-slate-500 hover:text-white text-xs cursor-pointer'
                                onClick={handleClose}
                            >
                                Close
                            </span>
                        </div>

                        {/* user and discussion time  */}
                        <div className='flex items-center gap-3 pt-2'>
                            <Image src={discussionTopic.userId.profileImage} alt={discussionTopic.userId.username} className="w-8 h-8 rounded-full" />
                            <div className="flex flex-row items-center gap-3">
                                <div className="font-medium">{discussionTopic.userId.username}</div>
                                <div className="text-xs text-gray-400">{formatTimeAgo(discussionTopic.createdAt)}</div>
                                <div className="flex items-center gap-1 text-xs text-gray-400">
                                    <FaEye className="flex items-center"></FaEye>
                                    <div>{discussionTopic.views}</div>
                                </div>
                            </div>
                        </div>

                        {/* description */}
                        <div className='mt-4 text-left text-base text-gray-800' dangerouslySetInnerHTML={{ __html: discussionTopic.discussDescription }} />
                    </div>
                </div>

                {/* Comment List Component */}
                <CommentList discussionId={discussionTopic._id} />
            </div>
        </div>
    )
}

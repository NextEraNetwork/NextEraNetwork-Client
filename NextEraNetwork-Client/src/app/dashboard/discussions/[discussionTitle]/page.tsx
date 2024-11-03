'use client';
import React, { useState } from "react";
import { formatTimeAgo } from "@/app/lib/utils";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { bookmarkOutline, arrowUpCircle } from "ionicons/icons";
import { FaEye } from "react-icons/fa";
import CommentList from "@/components/student/Discussions/CommentList";
import { useRouter } from 'next/navigation'
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
    const router = useRouter();

    console.log("params", params);

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
            <div className="w-full  bg-white rounded-lg shadow-lg overflow-hidden overflow-y-scroll">
                <div className='flex p-1 md:p-6'>
                    {/* upvotes and bookmark left */}
                    <div className="pt-2 pr-3">
                        <div className="flex flex-col">
                            <div className="flex flex-col items-center">
                                <img src={arrowUpCircle}
                                    alt="bookmark"
                                    className={`p-1 w-6 h-6 bg-slate-200 rounded-sm duration-500 cursor-pointer hover:bg-slate-300 ${bookmarkState ? "fa-solid fa-bookmark text-slate-600" : "fa-regular fa-bookmark text-slate-800"}`}
                                    onClick={handleBookMark}
                                />
                                {/* <div className="ml-2 text-xs">{discussionTopic.upvotes.length} <br/> upvotes </div> */}
                            </div>
                            <div className="pt-5">
                                <img src={bookmarkOutline}
                                    alt="bookmark"
                                    className={`p-1 w-6 h-6 bg-slate-200 rounded-sm duration-500 cursor-pointer hover:bg-slate-300 ${bookmarkState ? "fa-solid fa-bookmark text-slate-600" : "fa-regular fa-bookmark text-slate-800"}`}
                                    onClick={handleBookMark}
                                />
                            </div>
                        </div>
                    </div>

                    {/* right part profile, title description */}
                    <div className="flex-1 ">
                        <div className="flex items-center justify-between border-b pb-2">
                            <h2 className='text-sm md:text-lg font-semibold'>{discussionTopic.discussTitle} discussionTopic discussTitl ediscussionT opic. discussTitle </h2>
                            <span
                                className=' bg-slate-200 font-bold p-2 rounded-md hover:bg-slate-500 hover:text-white text-xs cursor-pointer'
                                onClick={() => router.back()}
                            >
                                Close
                            </span>
                        </div>

                        {/* user and discussion time  */}
                        <div className='flex items-center gap-3 pt-2'>
                            <img src={discussionTopic.userId.profileImage} alt={discussionTopic.userId.username} className="w-8 h-8 rounded-full" />
                            <div className="flex flex-col md:flex-row items-start md:gap-3">
                                <div className="font-medium text-xs md:text-sm">{discussionTopic.userId.username}</div>
                                <div className="flex flex-row gap-1">
                                    <div className="text-xs text-gray-400">{formatTimeAgo(discussionTopic.createdAt)}</div>
                                    <div className="flex items-center gap-1 text-xs text-gray-400">
                                        <FaEye className="flex items-center"></FaEye>
                                        <div>{discussionTopic.views}</div>
                                    </div>
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
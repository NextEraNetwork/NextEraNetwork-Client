// DiscussionList.tsx
import React from "react";
import Link from "next/link";
import { formatTimeAgo } from "@/app/lib/utils";
import Image from "next/image";

interface Discussion {
    userId: { username: string; profileImage: string };
    discussTitle: string;
    discussDescription: string;
    upvotes: number;
    views: number;
    createdAt: string;
}

interface DiscussionListProps {
    discussions: Discussion[];
}

const DiscussionList: React.FC<DiscussionListProps> = ({ discussions }) => {
    return (
        <div className="flex flex-col">
            {discussions.map((discussion, index) => (
                <div key={index} className="border-b border-gray-200 transition hover:bg-gray-100 p-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Link href={`/${discussion.userId.username}`} className="mr-4">
                                <Image src={discussion.userId.profileImage} alt="" className="w-10 h-10 rounded-full" />
                            </Link>
                            <div className="cursor-pointer w-full">
                                <Link href={`/Discuss/${discussion.discussTitle}`} className="text-md font-medium text-black block">
                                    {discussion.discussTitle}
                                </Link>
                                <div className="text-gray-600 text-sm pr-5">
                                    <span dangerouslySetInnerHTML={{ __html: discussion.discussDescription }} className="line-clamp-2 overflow-hidden" />
                                </div>
                                <div className="text-gray-400 text-xs">
                                    {formatTimeAgo(discussion.createdAt)}
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="flex items-center whitespace-nowrap">
                                <i className="fa-solid fa-circle-up text-gray-500"></i>
                                <span className="text-gray-700 ml-2">{discussion.upvotes} votes</span>
                            </div>
                            <div className="flex items-center whitespace-nowrap">
                                <i className="fa-solid fa-eye text-gray-500"></i>
                                <span className="text-gray-700 ml-2">{discussion.views} views</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DiscussionList;

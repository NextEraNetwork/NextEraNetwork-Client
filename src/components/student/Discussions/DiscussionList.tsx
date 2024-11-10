// DiscussionList.tsx
import React from "react";
import Link from "next/link";
import { formatTimeAgo } from "@/app/lib/utils";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

// interface Discussion {
//     userId: { username: string; profileImage: string };
//     discussTitle: string;
//     discussDescription: string;
//     upvotes: number;
//     views: number;
//     createdAt: string;
// }

interface Discussion {
    _id: string;
    profile_id:string;
    title: string;
    branch: string;
    description: string;
    created_at:string;
}

interface DiscussionListProps {
    discussions: Discussion[];
}

const DiscussionList: React.FC<DiscussionListProps> = ({ discussions }) => {

    console.log("discussions in list", discussions)
    return (
        <div className="flex flex-col">
            {discussions.map((discussion, index) => (
                <div key={index} className="border-b border-gray-200 transition hover:bg-gray-100 p-1 md:p-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            {/* <Link href={`/user/${discussion.userId.username}`} className="mr-4 w-10 h-10"> */}
                                <img src={`https://api.dicebear.com/5.x/initials/svg?seed=${discussion.title}`} alt={""} className="w-10 h-10 rounded-full" />
                            {/* </Link> */}
                            <div className="cursor-pointer w-full text-xs md:text-sm ">
                                <Link href={`/dashboard/discussions/${discussion._id}`} className=" text-xs md:text-sm font-medium text-black block">
                                    <span className="line-clamp-2 overflow-hidden">{discussion.title}</span>
                                </Link>
                                <div className="text-gray-600 text-xs md:text-sm pr-5">
                                    <span dangerouslySetInnerHTML={{ __html: discussion.description }} className="line-clamp-2 overflow-hidden" />
                                </div>
                                <div className="text-gray-400 text-xs">
                                    {formatTimeAgo(discussion.created_at)}
                                </div>
                            </div>
                        </div>
                        <div className="flex  flex-col md:flex-row md:gap-2 justify-end items-start">
                            <div className="flex  md:flex-col gap-1 items-center whitespace-nowrap">
                                <FaArrowAltCircleUp className=" text-gray-400 text-xs md:text-base"/>
                                <span className="text-gray-400 text-xs">
                                    {/* {discussion.upvotes}  */}
                                    24 votes</span>
                            </div>
                            <div className="flex  md:flex-col gap-1 items-center whitespace-nowrap">
                                <FaEye  className=" text-gray-400 text-xs md:text-base"/>
                                <span className="text-gray-400  text-xs">
                                    {/* {discussion.views} */}
                                     12 views</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DiscussionList;

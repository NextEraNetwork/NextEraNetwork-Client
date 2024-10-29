import React, { useState } from 'react';
import Link from 'next/link';
import { arrowUndoOutline, chatboxEllipsesOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { formatTimeAgo } from '@/app/lib/utils';
import Image from 'next/image';

// Define types for user and comment
interface User {
    username: string;
    profileImage: string;
}

interface Reply {
    _id: string;
    userId: User;
    body: string;
    commentedAt: string;
}

interface Comment {
    _id: string;
    userId: User;
    body: string;
    commentedAt: string;
    replies: Reply[];
}


interface CommentListProps {
    discussionId: string;
}


// Hardcoded comments data
const commentsData: Comment[] = [
    {
        _id: "1",
        userId: { username: "garima", profileImage: "images.jinesh" },
        body: "Find well balanced valid string input = (fdfsdf(dfgdf(hjk)) op = (dfgdf(hjk))...",
        commentedAt: "2023-10-22T12:00:00Z",
        replies: [
            {
                _id: "1-1",
                userId: { username: "user1", profileImage: "images.jinesh" },
                body: "This is a nested reply.",
                commentedAt: "2023-10-22T13:00:00Z"
            }
        ]
    },
    {
        _id: "1",
        userId: { username: "garima", profileImage: "images.jinesh" },
        body: "Find well balanced valid string input = (fdfsdf(dfgdf(hjk)) op = (dfgdf(hjk))...",
        commentedAt: "2023-10-22T12:00:00Z",
        replies: [
            {
                _id: "1-1",
                userId: { username: "user1", profileImage: "images.jinesh" },
                body: "This is a nested reply.",
                commentedAt: "2023-10-22T13:00:00Z"
            }
        ]
    },
    {
        _id: "1",
        userId: { username: "garima", profileImage: "images.jinesh" },
        body: "Find well balanced valid string input = (fdfsdf(dfgdf(hjk)) op = (dfgdf(hjk))...",
        commentedAt: "2023-10-22T12:00:00Z",
        replies: [
            {
                _id: "1-1",
                userId: { username: "user1", profileImage: "images.jinesh" },
                body: "This is a nested reply.",
                commentedAt: "2023-10-22T13:00:00Z"
            }
        ]
    },
    // Add more comments as needed
];

export const CommentList: React.FC<CommentListProps> = ({ discussionId }) => {
    const [formValue, setFormValue] = useState<{ commentDescription: string; nestedComment: string }>({ commentDescription: "", nestedComment: "" });
    const [showReplyInput, setShowReplyInput] = useState<string | null>(null);
    const [showReplies, setShowReplies] = useState<Set<string>>(new Set());

    console.log("discussionID", discussionId);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormValue({ ...formValue, [event.target.name]: event.target.value });
    };

    const handleReplyButtonClick = (index: string) => {
        setShowReplyInput(showReplyInput === index ? null : index);
    };

    const handleShowReplyButtonClick = (commentId: string) => {
        setShowReplies(prev => {
            const newSet = new Set(prev);
            newSet.has(commentId) ? newSet.delete(commentId) : newSet.add(commentId);
            return newSet;
        });
    };

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[99%] max-w-full sm:w-full">
                <div className="bg-white max-h-full  overflow-hidden overflow-y-auto w-full p-8 rounded-lg relative">
                    <div className="w-full">
                        <div className="absolute top-5 right-8 cursor-pointer sm:top-2 sm:right-2">
                            {/* Close button here */}
                        </div>

                        <div className="text-left text-lg font-semibold mb-4 p-2 border-y-2 border-gray-300">
                            {`Comments: ${commentsData.length ? commentsData.length : "NA"}`}
                        </div>

                        <form className="my-4 relative" onSubmit={(e) => { e.preventDefault(); /* Handle submit */ }}>
                            <textarea
                                id="commentDescription"
                                name="commentDescription"
                                placeholder="Write comment here"
                                value={formValue.commentDescription}
                                onChange={handleChange}
                                className="w-full h-36 text-base border border-gray-300 resize-none p-2 rounded-lg"
                                required
                            />
                            <button type="submit" className="absolute bottom-2 right-0 bg-gradient-to-r from-blue-500 to-gray-700 text-white font-semibold rounded-lg px-4 py-2">
                                Post
                            </button>
                        </form>

                        <div className="mt-5">
                            {commentsData.length > 0 ? commentsData.map((comment) => (
                                <CommentItem
                                    key={comment._id}
                                    comment={comment}
                                    handleReplyButtonClick={handleReplyButtonClick}
                                    handleShowReplyButtonClick={handleShowReplyButtonClick}
                                    showReplyInput={showReplyInput}
                                    showReplies={showReplies}
                                    handleChange={handleChange}
                                    formValue={formValue}
                                />
                            )) : <p>No comments available. Start by sharing your response</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface CommentItemProps {
    comment: Comment;
    handleReplyButtonClick: (index: string) => void;
    handleShowReplyButtonClick: (commentId: string) => void;
    showReplyInput: string | null;
    showReplies: Set<string>;
    handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    formValue: { commentDescription: string; nestedComment: string };
}

const CommentItem: React.FC<CommentItemProps> = ({
    comment,
    handleReplyButtonClick,
    handleShowReplyButtonClick,
    showReplyInput,
    showReplies,
    handleChange,
    formValue,
}) => {
    return (
        <div className="mb-4">
            <div className="flex items-center gap-4">
                <Link href={`/${comment.userId.username}`}>
                    <Image src={comment.userId.profileImage} alt={comment.userId.username} className="rounded-full w-8 h-8" />
                </Link>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-700">{comment.userId.username}</span>
                    <span className="text-xs text-gray-500">{formatTimeAgo(comment.commentedAt)}</span>
                    <p className="text-base">{comment.body}</p>
                </div>
            </div>

            <div className='flex justify-start gap-2 pl-16 mt-2'>
                {comment.replies.length > 0 && (
                    <button className="flex items-center gap-1 text-gray-500 font-medium py-1 px-2 rounded-lg hover:bg-gray-200 hover:text-black transition duration-300" onClick={() => handleShowReplyButtonClick(comment._id)}>
                        <IonIcon icon={chatboxEllipsesOutline} className='text-xl font-bold' />
                        <span className='text-xs'>{`Show ${comment.replies.length} replies`}</span>
                    </button>
                )}
                <button className="flex items-center gap-1 text-gray-500 font-medium py-1 px-2 rounded-lg hover:bg-gray-200 hover:text-black transition duration-300" onClick={() => handleReplyButtonClick(comment._id)}>
                    <IonIcon icon={arrowUndoOutline} className='text-xl font-bold' />
                    <span className='text-xs'>Reply</span>
                </button>
            </div>

            {showReplyInput === comment._id && (
                <form className="px-4 mt-2 flex gap-2 items-center" onSubmit={(e) => { e.preventDefault(); /* Handle nested comment */ }}>
                    <textarea
                        id="nestedComment"
                        name="nestedComment"
                        value={formValue.nestedComment}
                        onChange={handleChange}
                        placeholder="Write reply here"
                        className="w-full rounded-lg p-2 border border-gray-500 focus:outline-slate-300 focus:border-blue-500"
                        required
                    />
                    <button className="bg-blue-500 text-white font-semibold rounded-lg mt-2 hover:bg-blue-600 transition duration-300">
                        Post
                    </button>
                </form>
            )}

            {showReplies.has(comment._id) && (
                <div className='pl-4'>
                    {comment.replies.map((reply) => (
                        <CommentItem
                            key={reply._id}
                            comment={{ ...reply, replies: [] }}  // Ensure the reply is treated as a comment
                            handleReplyButtonClick={handleReplyButtonClick}
                            handleShowReplyButtonClick={handleShowReplyButtonClick}
                            showReplyInput={showReplyInput}
                            showReplies={showReplies}
                            handleChange={handleChange}
                            formValue={formValue}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CommentList;
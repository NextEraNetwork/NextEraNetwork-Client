'use client';
import React, { useEffect, useState } from "react";
import UserFilterSection from "@/components/student/users/UsersFilterSection";
import usersData from "@/data/usersData";
import UserCard from "@/components/student/users/UserCard";
import { getAllUsers } from "@/services/operations/student/allUserAPI";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/reducer/store';

const Users: React.FC = () => {
    const [selectedName, setSelectedName] = useState<string>("");
    const [branch, setBranch] = useState("All");
    const [passOutYear, setPassOutYear] = useState<number>(0); // Default to current date
    const [profession, setProfession] = useState("All");
    const [position, setPosition] = useState("All");

    const allUserList = useSelector((state: RootState) => state.allUser.allUseresList);
    const loading = useSelector((state: RootState) => state.profile.loading);
    const dispatch = useDispatch<AppDispatch>();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedName(e.target.value);
    };

    const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBranch(e.target.value);
    };

    const handlePassOutYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPassOutYear(Number(e.target.value));
    };

    const handleProfessionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProfession(e.target.value);
    };

    const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPosition(e.target.value);
    };

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    return (
        <div>
            <h1 className="text-base text-center md:text-2xl font-bold md:mb-2">All Users</h1>

            {/* Filter Section */}
            <UserFilterSection
                selectedName={selectedName}
                branch={branch}
                passOutYear={passOutYear}
                profession={profession}
                position={position}
                handleNameChange={handleNameChange}
                handleBranchChange={handleBranchChange}
                handlePassOutyearChange={handlePassOutYearChange}
                handleProfessionChange={handleProfessionChange}
                handlePositionChange={handlePositionChange}
            />

            {/* Display filtered users here */}
            <div className="user-cards grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2 md:gap-4">
                {allUserList.map(user => (
                    <UserCard key={user._id} userData={user} />
                ))}
            </div>
        </div>
    );
};

export default Users;

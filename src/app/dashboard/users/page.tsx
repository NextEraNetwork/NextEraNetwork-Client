'use client';
import React, { useState } from "react";
import UserFilterSection from "@/components/student/users/UsersFilterSection";
import usersData from "@/data/usersData";
import UserCard from "@/components/student/users/UserCard";

const Users: React.FC = () => {
    const [selectedName, setSelectedName] = useState<string>("");
    const [branch, setBranch] = useState("All");
    const [passOutYear, setPassOutYear] = useState<number>(0); // Default to current date
    const [profession, setProfession] = useState("All");
    const [position, setPosition] = useState("All");

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
                {usersData.map(user => (
                    <UserCard key={user.id} userData={user} />
                ))}
            </div>
        </div>
    );
};

export default Users;

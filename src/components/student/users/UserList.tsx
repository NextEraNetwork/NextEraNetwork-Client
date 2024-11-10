// components/UserList.tsx

import React from 'react';
import UserCard from './UserCard';
import usersData from '@/data/usersData'; 

const UserList: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 m-2">
      <div className="filter-section flex flex-col justify-between h-[90vh] gap-4 p-5 bg-white rounded-lg shadow-lg">
        <h2 className="uppercase">Filter Users</h2>
        {/* Add filter inputs here */}
      </div>
      <div className="user-cards flex flex-wrap justify-center gap-4">
        {/* {usersData.map(user => (
          <UserCard key={user.id} userData={user} />
        ))} */}
      </div>
    </div>
  );
};

export default UserList;

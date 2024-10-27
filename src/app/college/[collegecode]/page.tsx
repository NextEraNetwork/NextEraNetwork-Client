'use client';
import StudentDashBoard from '@/app/(features)/home/page';
import React from 'react';

const CollegeComponent: React.FC<{ children: React.ReactNode }> = ({ children = <StudentDashBoard/> }) =>{

  return (
    <div>
      <h1>Welcome to College {}</h1>
      {children}
    </div>
  );
};

export default CollegeComponent;

// pages/index.tsx

import React from 'react';
import { images } from '@/utils/images';
import Image from 'next/image';

const dummyData = {
  userName: "John Doe",
  profilePic: images.garud,
  events: [
    { id: 1, title: "Alumni Networking Event", date: "October 30, 2024", location: "Community Center" },
    { id: 2, title: "Webinar: Career Growth", date: "November 5, 2024", location: "Online" },
    { id: 3, title: "Annual Reunion", date: "December 15, 2024", location: "University Campus" },
    { id: 4, title: "Mentorship Program Kick-off", date: "January 10, 2025", location: "Main Hall" },
  ],
  jobOpportunities: [
    { id: 1, title: "Software Engineer", company: "Tech Corp", location: "Remote" },
    { id: 2, title: "Project Manager", company: "Business Solutions", location: "New York, NY" },
    { id: 3, title: "Data Analyst", company: "Data Insights", location: "San Francisco, CA" },
    { id: 4, title: "UX Designer", company: "Creative Agency", location: "Los Angeles, CA" },
  ],
  recentActivities: [
    { id: 1, action: "liked your post", user: "Alice Smith" },
    { id: 2, action: "commented on your photo", user: "Bob Johnson" },
    { id: 3, action: "joined a new group", user: "Charlie Brown" },
    { id: 4, action: "updated their profile", user: "Diana Prince" },
    { id: 5, action: "sent you a message", user: "Eve Adams" },
  ],
};

const StudentDashBoard: React.FC = () => {
  return (
    <>
      <header className="flex items-center mb-6">
        <Image src={dummyData.profilePic} alt="Profile Picture" className="w-16 h-16 rounded-full mr-4" />
        <h1 className="text-2xl font-semibold">Welcome back, {dummyData.userName}!</h1>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Recent Activities</h2>
          <ul className="bg-white shadow-md rounded-lg p-4 max-h-60 overflow-y-auto scrollbar">
            {dummyData.recentActivities.map(activity => (
              <li key={activity.id} className="border-b last:border-b-0 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                {activity.user} {activity.action}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Upcoming Events</h2>
          <ul className="bg-white shadow-md rounded-lg p-4 max-h-60 overflow-y-auto scrollbar">
            {dummyData.events.map(event => (
              <li key={event.id} className="border-b last:border-b-0 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                {event.title} - <span className="text-gray-500">{event.date}</span> at {event.location}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8 lg:col-span-2">
          <h2 className="text-xl font-bold mb-2">Job Opportunities</h2>
          <ul className="bg-white shadow-md rounded-lg p-4 max-h-60 overflow-y-auto scrollbar">
            {dummyData.jobOpportunities.map(job => (
              <li key={job.id} className="border-b last:border-b-0 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                {job.title} at <span className="text-gray-500">{job.company}</span> - <span className="italic">{job.location}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <footer className="text-center mt-6">
        <p className="text-gray-500">© {new Date().getFullYear()} Alumni Connection Platform</p>
      </footer>
    </>
  );
};

export default StudentDashBoard;

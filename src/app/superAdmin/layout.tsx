// 'use client'
// import Link from 'next/link';
// // import { useRouter } from 'next/router';
// import React from 'react';

// const SuperAdminPage: React.FC<{ children: React.ReactNode }> = ({children}) => {
// //   const router = useRouter();

//   const navItems = [
//     { name: 'Add University', path: '/adduniversity' },
//     { name: 'Add College', path: '/addcollege' },
//     { name: 'Add Department', path: '/adddepartment' },
//     { name: 'Add Courses', path: '/addcourses' },
//     { name: 'Add Branch', path: '/addbranch' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <nav className="bg-blue-600 shadow-md">
//         <div className="container mx-auto px-6 py-3 flex justify-between items-center">
//           <div className="text-white text-xl font-bold">SuperAdmin Panel</div>
//           <ul className="flex space-x-6">
//             {navItems.map((item) => (
//               <li key={item.name}>
//                 <Link href={item.path}>
//                   <div
//                     className={`text-white px-4 py-2 rounded-md transition duration-200 ${
//                       router.pathname === item.path
//                         ? 'bg-white text-blue-600'
//                         : 'hover:bg-blue-500'
//                     }`}
//                   >
//                     {item.name}
//                   </div>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="container mx-auto mt-8 p-4">
//         <h1 className="text-2xl font-semibold mb-6">Welcome to SuperAdmin Panel</h1>
//         <p className="text-gray-600">
//           Please select one of the options from the navigation bar to perform administrative tasks.
//         </p>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default SuperAdminPage;

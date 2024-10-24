// 'use client';
// import React, { useState } from 'react';

// const UniversityDetailsForm = () => {
//   const [formData, setFormData] = useState({
//     university: '',
//     college: '',
//     department: '',
//     courses: '',
//     branch: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       // Send data to respective APIs
//       await Promise.all([
//         fetch('/api/university', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ name: formData.university }),
//         }),
//         fetch('/api/college', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ name: formData.college }),
//         }),
//         fetch('/api/department', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ name: formData.department }),
//         }),
//         fetch('/api/courses', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ name: formData.courses }),
//         }),
//         fetch('/api/branch', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ name: formData.branch }),
//         }),
//       ]);

//       // Handle successful submission (optional)
//       console.log('Data submitted successfully!');
//     } catch (error) {
//       console.error('Error submitting data:', error);
//       // Handle error (e.g., show a message to the user)
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">University Details</h2>

//       {/* University Input */}
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">University</label>
//         <input
//           type="text"
//           name="university"
//           value={formData.university}
//           onChange={handleChange}
//           placeholder="Enter University Name"
//           required
//           className="border border-gray-300 rounded p-2 w-full"
//         />
//       </div>

//       {/* College Input */}
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">College</label>
//         <input
//           type="text"
//           name="college"
//           value={formData.college}
//           onChange={handleChange}
//           placeholder="Enter College Name"
//           required
//           className="border border-gray-300 rounded p-2 w-full"
//         />
//       </div>

//       {/* Department Input */}
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Department</label>
//         <input
//           type="text"
//           name="department"
//           value={formData.department}
//           onChange={handleChange}
//           placeholder="Enter Department Name"
//           required
//           className="border border-gray-300 rounded p-2 w-full"
//         />
//       </div>

//       {/* Courses Input */}
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Courses</label>
//         <input
//           type="text"
//           name="courses"
//           value={formData.courses}
//           onChange={handleChange}
//           placeholder="Enter Courses"
//           required
//           className="border border-gray-300 rounded p-2 w-full"
//         />
//       </div>

//       {/* Branch Input */}
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Branch</label>
//         <input
//           type="text"
//           name="branch"
//           value={formData.branch}
//           onChange={handleChange}
//           placeholder="Enter Branch"
//           required
//           className="border border-gray-300 rounded p-2 w-full"
//         />
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default UniversityDetailsForm;

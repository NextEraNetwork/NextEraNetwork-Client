// 'use client';
// import React, { useEffect, useRef, useState } from 'react';
// import Header from '@/components/Header';
// import { useAuth } from '@/context/AuthProvider';
// import LandingPage from '@/components/Home/Landing';
// import { useRouter } from 'next/navigation';
// import StudentDashBoard from './(features)/home/page';
// import StudentLayout from './(features)/layout';
// import CollegeLayout from './college/[collegecode]/layout';



// export default async function Home({ children }: { children: React.ReactNode }) {
//   const { user } = useAuth();
//   const router = useRouter();
//   const headerRef = useRef<HTMLDivElement>(null);
//   const [headerHeight, setHeaderHeight] = useState<number>(0);
//   const role = user?.role;

//   let token;

//   console.log("token", token);
//   useEffect(() => {
//     if (headerRef.current) {
//       setHeaderHeight(headerRef.current.offsetHeight);
//     }
//   }, [headerRef]);

//   useEffect(() => {
//     if (user) {
//       const { role, collegeCode, universityCode } = user;
//       if (role === 'student') {
//         router.push(`/`);
//       } else if (role === 'collegeAdmin') {
//         router.push(`/college/${collegeCode}`);
//       } else if (role === 'universityAdmin') {
//         router.push(`/university/${universityCode}`);
//       }
//     }
//   }, [])

//   return (
//     <>
//       {user ? (
//         <>
//           <Header />
//           <LandingPage />
//         </>
//       ) : (
//         role !== "student" ? (
//           // <StudentLayout>
//           //   {children || <StudentDashBoard />}
//           // </StudentLayout>
//           <></>

//         ) : role === "collegeAdmin" ? (
//           <CollegeLayout>
//             {children}
//           </CollegeLayout>
//         ) :
//           role === "universityAdmin" ? (
//             <div>
//               <h1>University Admin Component</h1>
//               {children}
//             </div>
//           ) :
//             <div>
//               <h1>You do not have permission to view this page.</h1>
//               <button onClick={() => router.push('/')}>Go Home</button>
//             </div>
//       )}
//     </>

//   );
// };


// app/page.tsx
'use client';
import LandingPage from '@/components/Home/Landing';
import { useAuth } from '@/context/AuthProvider';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

export default async function Home() {
  const { user } = useAuth();
  const router = useRouter();


  // Redirect based on role if user is logged in
  if (user) {
    console.log("user", user);
    const { role } = user || "";
    if (role !== 'student') router.push('/dashboard');
    else if (role === 'collegeAdmin') router.push('/college');
    else if (role === 'universityAdmin') router.push('/university');
  }
  else {
    return <>
      <Header />
      <LandingPage />
    </>;
  }
}

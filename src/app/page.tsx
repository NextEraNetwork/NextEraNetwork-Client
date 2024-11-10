'use client';
import LandingPage from '@/components/Home/Landing';
import { useAuth } from '@/context/AuthProvider';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

export default function Home() {
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

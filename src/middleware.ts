import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface User {
  email: string;
  id: string;
  accountType: string;
  profilestatus: boolean;
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail' || path === '/';
  const isProtectedPathStudent = path.startsWith('/dashboard') || path === '/MultiStepForm';
  const isProtectedPathCollege = path.startsWith('/college')  ||  path === '/college';

  const token = request.cookies.get('access_token')?.value || '';
  console.log("token in middleware", token, path);

  // Get the cookie value and ensure we strip the 'j:' prefix before parsing the JSON
  const userCookie = request.cookies.get('profile_id')?.value || '';

  if(isPublicPath && token)
  {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }

  // If the user has a token but their profile status is false, redirect them to MultiStepForm
  if (isProtectedPathStudent && token) {
    // Prevent a redirect loop by checking if the user is already on the correct page
    if (userCookie === "None") {
      // Check if they are already on /MultiStepForm to avoid redirect loop
      if (path !== '/MultiStepForm') {
        return NextResponse.redirect(new URL('/MultiStepForm', request.nextUrl));
      }
    } else {
      // If the profile is complete, send them to the dashboard, unless they are already there
      return NextResponse.next();
    }
  }

  if(isProtectedPathStudent && token && userCookie )
  {
    return NextResponse.next();
  }

  // Redirect logic for protected paths
  if (isProtectedPathStudent && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  if(isProtectedPathCollege){
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  // Allow access to the home path or stay on the home page if no token
  if (path === '/' && !token) {
    return NextResponse.next(); // Allow access to the home page without a token
  }

  // Allow all other paths if the token is present
  return NextResponse.next();
}

// Configuration for matching paths
export const config = {
  matcher: [
    '/',                   // Public and protected path
    '/login',              // Public path
    '/signup',             // Public path


    // student protected routes
    '/MultiStepForm',
    '/dashboard',
    '/dashboard/updateProfile',
    '/dashboard/users',          // Protected path
    '/dashboard/news',
    '/dashboard/events',
    '/dashboard/gallery',
    '/dashboard/questions',
    '/dashboard/discussions',
    '/dashboard/opportunities',
    '/dashboard/experiences',
    '/dashboard/saves',
    '/dashboard/setting',

    '/college',

  ],
};

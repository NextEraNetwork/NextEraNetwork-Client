import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define public paths
  const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail';
  
  // Define protected paths using startsWith
  const isProtectedPath = path.startsWith('/dashboard') || path.startsWith('/college'); 

  const token = request.cookies.get('refresh_token')?.value || ''; 

  console.log("token in middleware", token);

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }

  // Redirect logic for protected paths
  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
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
    '/dashboard/users',          // Protected path
    '/dashboard/news',
    '/dashboard/events',
    '/dashboard/gallery',
    '/dashboard/questions',
    '/dashboard/discussions',
    '/dashboard/opportunities',
    '/dashboard/experiences',
    '/dashboard/saves',
    '/college',            
    
  ],
};

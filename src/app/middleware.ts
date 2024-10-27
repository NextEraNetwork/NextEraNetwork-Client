// import { NextRequest, NextResponse } from 'next/server'
// import { decrypt } from './lib/decrypt'
// import { cookies } from 'next/headers'
 
// // 1. Specify protected and public routes
// const protectedRoutes = ['/dashboard', '/MultiStepForm']
// const publicRoutes = ['/login', '/signup', '/']
 
// export default async function middleware(req: NextRequest) {
//   // 2. Check if the current route is protected or public
//   const path = req.nextUrl.pathname
//   console.log("path name", path);
//   const isProtectedRoute = protectedRoutes.includes(path)
//   const isPublicRoute = publicRoutes.includes(path)
 
//   // 3. Decrypt the session from the cookie
//   const cookie = (await cookies()).get('session')?.value
//   const session = await decrypt(cookie)
 
//   // 4. Redirect to /login if the user is not authenticated
//   if (isProtectedRoute && !session?.userId) {
//     return NextResponse.redirect(new URL('/login', req.nextUrl))
//   }
 
//   // 5. Redirect to /dashboard if the user is authenticated
//   if (
//     isPublicRoute &&
//     session?.userId &&
//     !req.nextUrl.pathname.startsWith('/dashboard')
//   ) {
//     return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
//   }
 
//   return NextResponse.next()
// }
 
// // Routes Middleware should not run on
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// }

import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from './lib/decrypt';
import { cookies } from 'next/headers';

// Specify protected and public routes
const protectedRoutes = ['/dashboard', '/MultiStepForm'];
const publicRoutes = ['/login', '/signup', '/'];

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    console.log("Middleware triggered for path:", path); // Log the path when middleware is triggered

    const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));
    const isPublicRoute = publicRoutes.includes(path);

    let session;
    try {
        const cookie = (await cookies()).get('session')?.value;
        session = await decrypt(cookie);
    } catch (error) {
        console.error('Decryption error:', error);
    }

    console.log("Session:", session); // Log the session after decryption

    // Redirect to /login if not authenticated
    if (isProtectedRoute && !session?.userId) {
        console.log("Redirecting to /login because user is not authenticated.");
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    // Redirect to /dashboard if authenticated
    if (isPublicRoute && session?.userId) {
        console.log("Redirecting to /dashboard because user is authenticated.");
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
    }

    return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

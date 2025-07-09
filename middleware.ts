// ====================================================
// 🌐 MIDDLEWARE — Access Control & Route Protection
// 🔒 Handles public/protected routes, role-based redirects, and auth guard
// ====================================================

import { NextResponse, NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// 🔐 Encode JWT secret
const encodeSecret = new TextEncoder().encode(process.env.JWT_SECRET || '');

// 🧭 Role-based route map
const roleBasedRoutes: { [key: string]: string[] } = {
  '/dashboard/admin': ['admin'],
  '/dashboard/receptionist': ['receptionist', 'admin'],
  '/dashboard/user': ['guest'],
};

// 🌐 Public paths that don't require authentication
const publicPaths = [
  '/',
  '/login',
  '/signup',
  '/rooms',
  '/check-rooms',
  '/amenities',
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPublicPath = publicPaths.includes(pathname);

  const token = request.cookies.get('accessToken')?.value || '';
  let decoded: any = null;

  // ✅ Try to decode the token if exists
  if (token) {
    try {
      const { payload } = await jwtVerify(token, encodeSecret);
      decoded = payload;
    } catch (err) {
      console.warn('JWT verify failed:', err);
    }
  }

  // 🔁 If logged in and trying to access login/signup → redirect to homepage
  if (isPublicPath && decoded) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // ❌ Prevent ANY access to dashboard via manual URL typing, even if logged in
  if (pathname.startsWith('/dashboard') && decoded) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // ⛔ Not logged in & trying to access protected route → redirect to login
  if (!isPublicPath && !decoded) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // ✅ Allow role-based access (for internal redirection logic, optional fallback)
  if (!isPublicPath && decoded) {
    const userRole = decoded.role;

    for (const routePrefix in roleBasedRoutes) {
      if (pathname.startsWith(routePrefix)) {
        const allowedRoles = roleBasedRoutes[routePrefix];
        if (!allowedRoles.includes(userRole)) {
          // ❌ Unauthorized access
          return NextResponse.redirect(new URL('/unauthorized', request.url));
        }
        break;
      }
    }
  }

  // ✅ All good → let the request proceed
  return NextResponse.next();
}

// 🎯 Paths to apply middleware
export const config = {
  matcher: ['/dashboard/:path*', '/rooms/:id', '/cart', '/checkout'],
};

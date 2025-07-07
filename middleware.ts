import { NextResponse, NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// 🔐 Encode JWT secret
const encodeSecret = new TextEncoder().encode(process.env.JWT_SECRET || '');

// 🎯 Role-based route map
const roleBasedRoutes: { [key: string]: string[] } = {
  '/dashboard/admin': ['admin'],
  '/dashboard/receptionist': ['receptionist', 'admin'],
  '/dashboard/user': ['guest', 'user', 'admin', 'receptionist'],
  // আরও route চাইলে এখানে যোগ করো
};

// 🎯 Public paths that don't need auth
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

  // ✅ Try to decode the token if it exists
  if (token) {
    try {
      const { payload } = await jwtVerify(token, encodeSecret);
      decoded = payload;
    } catch (err) {
      console.warn('❌ JWT verify failed:', err);
    }
  }

  // 🔁 Logged in user trying to access login/signup
  if (isPublicPath && decoded) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // ⛔ Not logged in trying to access protected route
  if (!isPublicPath && !decoded) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // ✅ Role-based access check
  if (!isPublicPath && decoded) {
    const userRole = decoded.role;

    for (const routePrefix in roleBasedRoutes) {
      if (pathname.startsWith(routePrefix)) {
        const allowedRoles = roleBasedRoutes[routePrefix];
        if (!allowedRoles.includes(userRole)) {
          // 🚫 Unauthorized access
          return NextResponse.redirect(new URL('/unauthorized', request.url));
        }
        break;
      }
    }
  }

  // ✅ All good, proceed
  return NextResponse.next();
}

// 🎯 Apply middleware only on selected paths
export const config = {
  matcher: ['/dashboard/:path*', '/rooms/:id', '/cart', '/checkout'],
};

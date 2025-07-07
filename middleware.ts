import { NextResponse, NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// Convert secret to Uint8Array
const encodeSecret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublicPath =
    pathname === '/login' ||
    pathname === '/signup' ||
    pathname === '/' ||
    pathname === '/rooms' ||
    pathname === '/check-rooms' ||
    pathname === '/amenities';

  const token = request.cookies.get('accessToken')?.value || '';

  let decoded = null;

  if (token) {
    try {
      const { payload } = await jwtVerify(token, encodeSecret);
      decoded = payload;
    } catch (_) {}
  }

  if (isPublicPath && decoded) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!isPublicPath && !decoded) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/rooms/:id', '/cart', '/checkout'],
};

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const response = NextResponse.json(
    { message: 'Logged out successfully' },
    { status: 200 },
  );

  // Clear cookies (HttpOnly)
  response.cookies.set('accessToken', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    expires: new Date(0), // expire now
    path: '/',
  });

  response.cookies.set('refreshToken', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    expires: new Date(0),
    path: '/',
  });

  return response;
}

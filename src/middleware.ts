export { default } from "next-auth/middleware";
import { NextRequest, NextResponse } from 'next/server'

const baseUrl = 'http://localhost:3000/'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  const url = request.url;

  if (!token && url !== baseUrl) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (token && url === baseUrl){
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!register|api|_next/static|_next/image|favicon.ico).*)',]
}